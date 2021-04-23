import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';
import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';
import { GoogleAnalyticsService } from './google-analytics.service';
import { Subject } from 'rxjs';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput, ModelStringFilterInput } from './neutrify-api.service';
import { sub, add } from 'date-fns';

@Injectable()
export class NewsFeedService {
  public openArticleIndex: number;
  public displayArticles: Array<any> = new Array<any>();
  public displayThreshold = 15;
  public nextToken: string;
  public filters: any;
  public searchFilter: any;
  public isFeedUpdating = true;
  public layout = 'grid';

  private isFeedUpdating$ = new Subject<boolean>();
  private readyArticles: Array<any> = new Array<any>();
  private articles$ = new Subject<any>();
  private limit = 25;
  private searchFilter$ = new Subject<any>();
  private layout$ = new Subject<any>();

  constructor(
    private filterService: FilterService,
    private authService: AuthService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService,
    private neutrifyAPI: APIService
  ) { }

  public setFilters(filters) {
    this.filters = filters;
  }

  public setSearchFilter(data) {
    if (data && data.searchTerm) {
      const searchFilter: ModelStringFilterInput = {
        contains: data.searchTerm.toLowerCase()
      };

      if (data.useFilters) {
        this.searchFilter = null;

        // add search term to filters
        if (this.filters && this.filters.and) {

          if (this.filters.and.length) {
            this.removeSearchFilter();
            this.filters.and.push({ searchTerms: searchFilter });
          } else {
            this.filters.and = [{ searchTerms: searchFilter }];
          }

        } else {
          this.filters['and'] = [{ searchTerms: searchFilter }];
        }

      } else {
        // use just searchTerm filter
        this.searchFilter = { searchTerms: searchFilter };
      }

    } else {
      if (this.filters && this.filters.and) {
        this.removeSearchFilter();
      }
      this.searchFilter = null;
    }

    this.searchFilter$.next(data);
  }

  public getSearchFilter() {
    return this.searchFilter$.asObservable();
  }

  public getFeedUpdateStatus() {
    return this.isFeedUpdating$.asObservable();
  }

  public setFeedUpdateStatus(status: boolean) {
    this.isFeedUpdating = status;
    this.isFeedUpdating$.next(status);
  }

  public getLayout() {
    return this.layout$.asObservable();
  }

  public setLayout(newLayout: string) {
    this.layout = newLayout;
    this.layout$.next(newLayout);
  }

  public getArticles() {
    return this.articles$.asObservable();
  }

  public setArticles(displayArticles?: Array<any>, readyArticles?: Array<any>) {
    if (displayArticles) {
      this.displayArticles = displayArticles;
    }

    if (readyArticles) {
      this.readyArticles = readyArticles;
    }

    this.articles$.next({ displayArticles, readyArticles });
  }

  public async saveFilters() {
    this.filterService.updateFilterLoading(true);
    const res = await this.filterService.saveFilters(this.authService.signedIn ? false : true);

    if (res) {
      await this.presentToast('Your filters have been saved.', 'success');
      this.ga.eventEmitter('save_filters_fab', 'engagement', 'Saved filters');
    } else {
      this.presentToast('Could not save your filters. Please try again.', 'danger');
    }

    this.filterService.updateFilterLoading(false);
  }

  public async loadFilters() {
    this.filterService.updateFilterLoading(true);
    const res = await this.filterService.loadFilters(this.authService.user.username, this.authService.signedIn ? false : true);

    if (res) {
      await this.presentToast('Your changes to the filters have been reset.', 'success');
      this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');
    } else {
      this.presentToast('Could not reset your filters. Please try again.', 'danger');
    }
  }

  public async listArticles(limit?, nextToken?) {
    if (nextToken === undefined) {
      nextToken = this.nextToken;
    }

    if (limit === undefined) {
      limit = 25;
    }

    const filters = this.searchFilter ? this.searchFilter : this.filters;
    let results;

    try {
      results = await this.neutrifyAPI.ArticlesByDate('news', this.setDateRange(), ModelSortDirection.DESC, filters, limit, nextToken);
    } catch (error) {
      console.log('Could not get articles. Service returned this error: ', error);

      if (error.errors && error.errors.length === 1) {
        const errMes = error.errors[0];
        if (errMes.message === 'Network Error') {
          for (let i = 0; i < 3; i++) {
            await setTimeout(() => {
              console.log('Retry attempt no: ', i + 1);
            }, 3000 * i + 1);

            try {
              results = await this.neutrifyAPI.ArticlesByDate(
                'news',
                this.setDateRange(),
                ModelSortDirection.DESC,
                this.filters,
                limit,
                nextToken
              );
              console.log('Successfully retried to get articles.');
              break;
            } catch (e) {}

            if (i === 2) {
              alert('Couldn\'t recover from network difficulties. Please check your connection.');
            }
          }
        }
      }
    }

    this.nextToken = results.nextToken;
    return results.items;
  }

  public async resetArticles() {
    this.nextToken = null;
    this.setArticles(new Array(), new Array());
  }

  public async handleInitDataLoad() {
    this.setFeedUpdateStatus(true);

    let i = 1;
    let newLimit = 200;
    do {
      if (i === 1) {
        this.readyArticles = await this.listArticles(newLimit, null);
      } else if (i === 2) {
        newLimit = 600;
        this.readyArticles = await this.listArticles(newLimit, null);
      } else if (i > 2 && i <= 10) {
        newLimit = 1000;
        this.readyArticles.push(...await this.listArticles(newLimit, this.nextToken));
      } else {
        await this.presentToast('There are not that many articles that fit your criteria.', 'primary');
        break;
      }

      i++;
    } while (this.nextToken && this.readyArticles.length < this.displayThreshold);

    this.displayArticles = this.readyArticles.slice(0, (this.displayThreshold - 1));
    this.readyArticles = this.readyArticles.slice((this.displayThreshold - 1));

    if (this.layout === 'grid') {
      this.earlyImageLoad(this.readyArticles);
    }

    this.limit = newLimit;
    this.setArticles(this.displayArticles, this.readyArticles);
    this.filterService.updateFilterLoading(false);
    this.setFeedUpdateStatus(false);

    if (!this.nextToken && this.readyArticles.length < this.displayThreshold) {
      await this.presentToast('Could only find a few articles that fit your criteria. Try to remove some filters.', 'primary');
    }
  }

  public async getNextPage() {
    if (this.nextToken && this.readyArticles.length < this.displayThreshold) {
      await this.loadReadyArticles();
    } else if (!this.nextToken) {
      this.presentToast('There are no more articles to be read. You\'re up to date.', 'primary');
    }

    await this.loadDisplayArticles();

    if (this.layout === 'grid') {
      await this.earlyImageLoad(this.readyArticles);
    }

    this.setArticles(this.displayArticles, this.readyArticles);
  }

  public async doRefresh(event?) {
    this.filterService.updateFilterLoading(true);

    try {
      await this.handleInitDataLoad();
    } catch (error) {
      console.log('Could not get articles. Service returned this error: ', error);
    }

    if (event) {
      this.ga.eventEmitter('refresh_pull', 'engagement', 'Refreshed feed');
      event.target.complete();
    } else {
      this.ga.eventEmitter('refresh_fab', 'engagement', 'Refreshed feed');
    }
  }

  public setDisplayThreshold(platformHeight: number, platformWidth: number, menuOpen: boolean): number {
    let threshold: number;

    if (platformHeight <= 360) {
      threshold = 12;
    } else if (platformHeight <= 480) {
      threshold = 15;
    } else if (platformHeight <= 640) {
      threshold = 21;
    } else {
      threshold = 27;
    }

    // This multiplier represents how many cards there are in a row, calculated from the width of the device.
    if (this.layout === 'grid') {
      threshold *= this.calculateThresholdMultiplier(platformWidth, menuOpen);
    }

    return threshold;
  }

  public async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center'
    });

    await toast.present();
  }


  private setDateRange(): ModelStringKeyConditionInput {
    const start = sub(new Date(), { days: environment.articleAgeLimit });
    const end = add(new Date(), { hours: 1 });

    return {
      between: [
        start.toISOString(), end.toISOString()
      ]
    };
  }

  private async earlyImageLoad(imgArr) {
    const imageLimit = this.readyArticles.length * 0.33 > 21 ? 21 : this.readyArticles.length * 0.33;
    const loadingImages: Promise<void>[] = imgArr.slice(0, imageLimit).map(async (article) => {

      if (article.image) {
        try {
          await this.preloadImage(article.image);
        } catch (error) {
          console.log('Failed to load image with this error: ', error);
          article.image = null;
        }
      }

    });

    return Promise.all(loadingImages);
  }

  private preloadImage(imgURL: string): Promise<void> {
    return new Promise((resolve, reject) => {

      const img = new Image();
      img.onstalled = () => {
        reject(`${imgURL} Stalled out`);
      };

      img.onload = () => {
        resolve();
      };

      img.onerror = () => {
        reject(`${imgURL} Errored`);
      };

      img.src = imgURL;

      setTimeout(() => {
        reject(`${imgURL} Timed out`);
      }, 5000);
    });
  }

  private async loadReadyArticles() {
    let i = 1;
    let numNewArticles = 0;

    do {
      const newArticles: Array<any> = new Array<any>();
      newArticles.push(...await this.listArticles(this.limit, this.nextToken));
      this.readyArticles.push(...newArticles);
      numNewArticles += newArticles.length;

      if (i > 10  && numNewArticles >= 3) {
        break;
      }

      i++;
    } while (this.nextToken && numNewArticles < this.displayThreshold);
  }

  private async loadDisplayArticles() {
    let numNewArticles: number;

    if (this.readyArticles.length >= this.displayThreshold) {
      numNewArticles = this.displayThreshold;
      this.displayArticles.push(...this.readyArticles.slice(0, (this.displayThreshold - 1)));
      this.readyArticles = this.readyArticles.slice((this.displayThreshold - 1));
    } else if (this.readyArticles.length) {
      numNewArticles = this.readyArticles.length;
      this.displayArticles.push(...this.readyArticles);
      this.readyArticles = [];
    }

    if (this.displayArticles.length >= 3 * this.displayThreshold) {
      this.displayArticles = this.displayArticles.slice((numNewArticles - 1));

      if (this.openArticleIndex && this.openArticleIndex - (numNewArticles - 1) < 0) {
        this.openArticleIndex = undefined;
      } else {
        this.openArticleIndex -= (numNewArticles - 1);
      }
    }
  }

  private calculateThresholdMultiplier(platformWidth: number, menuOpen: boolean) {
    const stdCardWidth = 310;
    let multiplier = 1;

    if (platformWidth < 646 || (platformWidth < 934 && menuOpen)) {
      return 1;
    }

    let calculableWidth: number;

    if (menuOpen) {
      calculableWidth = platformWidth - 934;
      multiplier = 2 + Math.floor(calculableWidth / stdCardWidth);
    } else {
      calculableWidth = platformWidth - 646;
      multiplier = 3 + Math.floor(calculableWidth / stdCardWidth);
    }

    return multiplier;
  }

  private removeSearchFilter() {
    const searchFilterIndex = this.filters.and.findIndex(f => f.searchTerms);
    if (searchFilterIndex !== -1) {
      if (this.filters.and.length === 1) {
        delete this.filters.and;
      } else {
        this.filters.and.splice(searchFilterIndex, 1);
      }
    }
  }
}
