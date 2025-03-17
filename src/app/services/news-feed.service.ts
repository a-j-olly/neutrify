import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';
import { AuthService } from './mock-auth.service';
import { ToastController } from '@ionic/angular';
import { GoogleAnalyticsService } from './google-analytics.service';
import { Subject } from 'rxjs';
import {
  APIService,
  ModelSortDirection,
  ModelStringKeyConditionInput,
  ModelStringFilterInput,
  Article,
  ModelArticleFilterInput,
  ArticlesByDateQuery
} from './mock-neutrify-api.service';
import { sub, add } from 'date-fns';

@Injectable()
export class NewsFeedService {
  public openArticleIndex: number;
  public displayArticles: Array<Article> = new Array<Article>();
  public displayThreshold = 15;
  public nextToken: string;
  public filters: ModelArticleFilterInput;
  public searchFilter: {searchTerms: ModelStringFilterInput} | null;
  public isFeedUpdating = true;
  public layout = 'grid';

  private isFeedUpdating$ = new Subject<boolean>();
  private readyArticles: Array<Article> = new Array<Article>();
  private articles$ = new Subject<any>();
  private limit = 25;
  private searchFilterData$ = new Subject<{ searchTerm: string; useFilters?: boolean }>();
  private layout$ = new Subject<any>();

  constructor(
    private filterService: FilterService,
    private authService: AuthService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService,
    private neutrifyAPI: APIService
  ) { }

  /**
   * Retrieves an array of articles using the graphQL API.
   *
   * @param  {number} limit? - The maximum number of articles to retrieve per page.
   * @param  {string} nextToken? - The token of the next page.
   * @returns Promise<Array<Article>> - A promise of the request array of articles.
   */
  public async listArticles(limit?: number, nextToken?: string): Promise<Array<Article>> {
    if (nextToken === undefined) {
      nextToken = this.nextToken;
    }

    if (limit === undefined) {
      limit = 25;
    }

    const filters = this.searchFilter ? this.searchFilter : this.filters;
    let results: ArticlesByDateQuery;

    try {
      results = await this.neutrifyAPI.ArticlesByDate('news', this.getDateRange(), ModelSortDirection.DESC, filters, limit, nextToken);
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
                this.getDateRange(),
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

  /**
   * Loads the initial articles for the news feed. Is also used to re-initalise the news feed.
   */
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

  /**
   * Creates empties article arrays and propagates them to their all subscribers.
   */
  public async resetArticles() {
    this.nextToken = null;
    this.setArticles(new Array(), new Array());
  }

  /**
   * When a user scrolls to the bottom of the news feed, get the next page of news articles from the database.
   */
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

  /**
   * Grabs the latest articles for the feed.
   *
   * @param  {any} event? - Custom Ionic event fired from the ion-refresher component.
   */
  public async doRefresh(event?: any) {
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

  /**
   * Calculates the minimum number of articles or display threshold that should be retrieved per page.
   *
   * @param  {number} platformHeight - Height of the screen.
   * @param  {number} platformWidth - Width of the screen.
   * @param  {boolean} menuOpen - Is the menu open?
   * @returns number - The display threshold.
   */
  public getDisplayThreshold(platformHeight: number, platformWidth: number, menuOpen: boolean): number {
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

  /**
   * Saves the current filters to the cloud/local storage.
   */
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

  /**
   * Loads the current filters to from the cloud/local storage.
   */
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

  /**
   * Either adds the search term filter to the existing filters or uses it instead.
   *
   * @param  {} searchFilterData - An object containing two properties: {string} searchTerm {boolean} useFilters.
   */
  public setSearchFilter(searchFilterData: {searchTerm: string; useFilters?: boolean}) {
    if (searchFilterData && searchFilterData.searchTerm) {
      const searchFilterInput: ModelStringFilterInput = {
        contains: searchFilterData.searchTerm.toLowerCase()
      };

      if (searchFilterData.useFilters) {
        this.searchFilter = null;

        // add search term to filters
        if (this.filters && this.filters.and) {

          if (this.filters.and.length) {
            this.removeSearchFilter();
            this.filters.and.push({ searchTerms: searchFilterInput });
          } else {
            this.filters.and = [{ searchTerms: searchFilterInput }];
          }

        } else {
          this.filters['and'] = [{ searchTerms: searchFilterInput }];
        }

      } else {
        // use just searchTerm filter
        this.searchFilter = { searchTerms: searchFilterInput };
      }

    } else {
      if (this.filters && this.filters.and) {
        this.removeSearchFilter();
      }
      this.searchFilter = null;
    }

    this.setSearchFilterData(searchFilterData);
  }

  /**
   * Notify subscribers that the articles have changed.
   *
   * @param  {Array<Article>} displayArticles? - The articles that are currently being displayed.
   * @param  {Array<Article>} readyArticles? - The articles that are ready to be displayed.
   */
  public setArticles(displayArticles?: Array<Article>, readyArticles?: Array<Article>) {
    if (displayArticles) {
      this.displayArticles = displayArticles;
    }

    if (readyArticles) {
      this.readyArticles = readyArticles;
    }

    this.articles$.next({ displayArticles, readyArticles });
  }

  /**
   * Notify subscribers that the feed update status has changed.
   *
   * @param  {boolean} status - Is the feed updating?
   */
  public setFeedUpdateStatus(status: boolean) {
    this.isFeedUpdating = status;
    this.isFeedUpdating$.next(status);
  }

  /**
   * Notify subscribers that the feed layout has changed.
   *
   * @param  {string} newLayout - Layout identifier.
   */
   public setLayout(newLayout: string) {
    this.layout = newLayout;
    this.layout$.next(newLayout);
  }

  /**
   * Sets the local instance of the article filter input.
   *
   * @param  {ModelStringFilterInput} filters - The local instance article filter input.
   */
   public setFilters(filters: ModelArticleFilterInput) {
    this.filters = filters;
  }

  /**
   * Subscribe to receive updates about in the layout of the feed.
   */
  public getLayout() {
    return this.layout$.asObservable();
  }

  /**
   * Subscribe to receive the latest articles (display & ready).
   */
  public getArticles() {
    return this.articles$.asObservable();
  }

  /**
   * Subscribe to receive searchFilterData.
   */
  public getSearchFilterData() {
    return this.searchFilterData$.asObservable();
  }

  /**
   * Subscribe to receive notifications when the feed is updating.
   */
  public getFeedUpdateStatus() {
    return this.isFeedUpdating$.asObservable();
  }

  /**
   * Presents a temporary modal that contains a message known as a 'toast'.
   *
   * @param  {string} message - The message to be displayed on the toast.
   * @param  {string} color - The colour of the toast.
   */
  public async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center'
    });

    await toast.present();
  }

  /**
   * For n number of arrays, initiate the download process for their images.
   *
   * @param  {Array<Article>} articleArray - The array of articles containing the images that are to be preloaded.
   */
  private async earlyImageLoad(articleArray: Array<Article>) {
    const n = this.readyArticles.length * 0.33 > 21 ? 21 : this.readyArticles.length * 0.33;
    const loadingImages: Promise<void>[] = articleArray.slice(0, n).map(async (article) => {

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

  /**
   * Handle the various image event handlers.
   *
   * @param  {string} imgURL - The url of the image.
   * @returns Promise - Return a promise when the image loading has been resolved.
   */
  private preloadImage(imgURL: string): Promise<void> {
    return new Promise((resolve, reject) => {

      const img = new Image();
      img.onstalled = () => {
        reject(`${imgURL} Stalled out.`);
      };

      img.onload = () => {
        resolve();
      };

      img.onerror = (err) => {
        reject(`${imgURL} \n\nAn error occurred: ${JSON.stringify(err, ['message', 'arguments', 'type', 'name'])}`);
      };

      img.src = imgURL;

      setTimeout(() => {
        reject(`${imgURL} Timed out.`);
      }, 5000);
    });
  }

  /**
   * Gets the next articles in order and then stores them in the readyArticles array.
   */
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


  /**
   * Move the ready articles into the displayArticles array.
   */
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

  /**
   * Notify all subscribers of the search filter data.
   *
   * @param  {{searchTerm:string;useFilters?:boolean}} data - The data that is used by the search bar.
   */
  private setSearchFilterData(data: {searchTerm: string; useFilters?: boolean}) {
    this.searchFilterData$.next(data);
  }

  /**
   * Find and remove the search filter from the filter object.
   */
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

  /**
   * Calculates the acceptable age of the articles to be retrieved.
   *
   * @returns ModelStringKeyConditionInput - The modeled object containing the acceptable article date range.
   */
  private getDateRange(): ModelStringKeyConditionInput {
    const start = sub(new Date(), { days: environment.articleAgeLimit });
    const end = add(new Date(), { hours: 1 });

    return {
      between: [
        start.toISOString(), end.toISOString()
      ]
    };
  }

  /**
   * Calculates a suitable multiplier for the display threshold based on the width of the screen.
   *
   * @param  {number} platformWidth - Width of the screen.
   * @param  {boolean} menuOpen - Is the menu open?
   */
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
}
