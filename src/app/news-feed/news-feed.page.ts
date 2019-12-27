import { APIService, ModelStringKeyConditionInput, ModelSortDirection } from './../services/neutrify-api.service';
import { FilterService } from './../services/filter.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit, OnDestroy {
  rawArticles: Array<any> = new Array<any>();
  displayArticles: Array<any> = new Array<any>();

  nextToken: string;
  limit = 25;
  articleDatePub: ModelStringKeyConditionInput;

  menuSubscription$: Subscription;
  menuStatus = false;

  platformResize$: Subscription;
  platformWidth: number;

  filterSubcription$: Subscription;
  queryFilters: any;

  constructor(
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    private filterService: FilterService,
    private neutrifyService: APIService
  ) {
    this.platform.ready().then(() => {
      this.platformWidth = this.platform.width();
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });

    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(ops => {
      console.log('ops', ops);
      this.queryFilters = this.filterService.getQueryFilters();
      // this.displayArticles = this.filterService.filterArticles(this.rawArticles);
    });
  }

  async ngOnInit()  {
    this.articleDatePub = this.filterService.setDateRange();
    this.queryFilters = this.filterService.getQueryFilters();
    await this.handleInitDataLoad();
    // this.displayArticles = this.filterService.filterArticles(this.rawArticles);
  }

  ngOnDestroy() {
    this.menuSubscription$.unsubscribe();
    this.platformResize$.unsubscribe();
    this.filterSubcription$.unsubscribe();
  }

  toggleMenu() {
    if (this.platformWidth <= 1084) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }

  async handleInitDataLoad() {
    let i = 1;
    let newLimit = 25;
    let nextToken = 'true';

    while (this.rawArticles.length < 15 && nextToken) {
      newLimit *= i;
      this.rawArticles = await this.listArticles(newLimit);
      nextToken = this.nextToken;
      i *= 8;
    }

    this.limit = newLimit;
    this.displayArticles = this.rawArticles;
  }

  async doRefresh(event) {
    this.rawArticles = [];
    await this.handleInitDataLoad();
    event.target.complete();
  }

  async getNextPage(event) {
      let newArticles: Array<any> = new Array<any>();
      newArticles = await this.listArticles(this.limit, this.nextToken);
      console.log('new articles', newArticles.length, newArticles);

      console.log('raw articles before load: ', this.rawArticles.length, this.rawArticles);
      this.rawArticles.push(...newArticles);
      console.log('raw articles after load: ', this.rawArticles.length, this.rawArticles);

      console.log('display articles before load: ', this.displayArticles.length, this.displayArticles);
      this.displayArticles = this.rawArticles;
      // this.displayArticles.push(...this.filterService.filterArticles(newArticles));
      console.log('display articles after load: ', this.displayArticles.length, this.displayArticles);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.nextToken === null) {
        event.target.disabled = true;
      }
  }

  async listArticles(limit?, nextToken?) {
    console.log('list articles', limit);
    const results = await this.neutrifyService.ArticlesByDate('news', this.articleDatePub,
     ModelSortDirection.DESC, this.queryFilters, limit, nextToken);
    this.nextToken = results.nextToken;
    console.log('is new token null? ', this.nextToken === null);
    return results.items;
  }
}
