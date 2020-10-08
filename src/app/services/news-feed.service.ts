import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';
import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';
import { GoogleAnalyticsService } from './google-analytics.service';
import { Subject } from 'rxjs';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput } from './neutrify-api.service';
import { sub, add } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  public isFeedUpdating: boolean = true;
  private isFeedUpdating$ = new Subject<boolean>()
  
  private readyArticles: Array<any> = new Array<any>();
  private readyArticles$ = new Subject<any>()

  public displayArticles: Array<any> = new Array<any>();
  private displayArticles$ = new Subject<any>()

  public displayThreshold = 15;
  public nextToken: string;
  private limit = 25;

  public filters: any;

  public searchFilter: any;
  private searchFilter$ = new Subject<any>()

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

  public setSearchFilter(searchFilter) {
    this.searchFilter = searchFilter;
    this.searchFilter$.next(searchFilter);
  }

  public getSearchFilter() {
    return this.searchFilter$.asObservable();
  }

  public getIsFeedUpdatingStatus() {
    return this.isFeedUpdating$.asObservable();
  }

  public updateIsFeedUpdatingStatus(status: boolean) {
    this.isFeedUpdating = status;
    this.isFeedUpdating$.next(status);
  }

  public getReadyArticles() {
    return this.readyArticles$.asObservable();
  }

  public updateReadyArticles(articles: any) {
    this.readyArticles = articles;
    this.readyArticles$.next(articles);
  }

  public getDisplayArticles() {
    return this.displayArticles$.asObservable();
  }

  public updateDisplayArticles(articles: any) {
    this.displayArticles = articles;
    this.displayArticles$.next(articles);
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

  private setDateRange(): ModelStringKeyConditionInput {
    const start = sub(new Date(), { days: 3 });
    const end = add(new Date(), { hours: 1 });

    return {
      between: [
        start.toISOString(), end.toISOString()
      ]
    };
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
              results = await this.neutrifyAPI.ArticlesByDate('news', this.setDateRange(), ModelSortDirection.DESC, this.filters, limit, nextToken);
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
    this.readyArticles = new Array();
    this.displayArticles = new Array();
    this.updateDisplayArticles(this.displayArticles);
    this.updateReadyArticles(this.readyArticles);
  }

  public async handleInitDataLoad() {
    this.updateIsFeedUpdatingStatus(true);
    await this.resetArticles();

    let i = 1;
    let newLimit = 100;
    do {
      if (i === 1) {
        this.readyArticles = await this.listArticles(newLimit, null);
      } else if (i === 2) {
        newLimit = 400;
        this.readyArticles = await this.listArticles(newLimit, null);
      } else if (i > 2 && i <= 10) {
        newLimit = 1000;
        this.readyArticles.push(...await this.listArticles(newLimit, this.nextToken));
      } else {
        await this.presentToast('Could only find a few articles that fit your criteria. Please remove some filters.', 'primary');
        break;
      }

      if (i <= 10) {
        break;
      }

      i++;
    } while (this.nextToken && this.readyArticles.length < this.displayThreshold);

    this.displayArticles = this.readyArticles.slice(0, (this.displayThreshold - 1));
    this.readyArticles = this.readyArticles.slice((this.displayThreshold - 1));
    this.limit = newLimit;

    this.updateDisplayArticles(this.displayArticles);
    this.updateReadyArticles(this.readyArticles);
    this.filterService.updateFilterLoading(false);
    this.updateIsFeedUpdatingStatus(false);

    if (!this.nextToken && this.readyArticles.length < this.displayThreshold) {
      await this.presentToast('Could only find a few articles that fit your criteria. Try to remove some filters.', 'primary');
    }
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

  public setDisplayThreshold(platformHeight: number): number {
    let result;

    if (platformHeight <= 360) {
      result = 12;
    } else if (platformHeight <= 480) {
      result = 15;
    } else if (platformHeight <= 640) {
      result = 21;
    } else {
      result = 27;
    }

    return result;
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
}
