import { Subscription } from 'rxjs';
import { FilterService } from './../../services/filter.service';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput } from './../../services/neutrify-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  filters: any;
  filterSubcription$: Subscription;

  rawArticles: Array<any> = new Array<any>();
  displayArticles: Array<any> = new Array<any>();

  nextToken: string;
  limit = 25;
  articleDatePub: ModelStringKeyConditionInput;

  constructor(
    private neutrfiyAPI: APIService,
    private filterService: FilterService
    ) {

    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(ops => {
      console.log('ops', ops);
      this.filters = this.filterService.getQueryFilters();
      console.log('this.queryFilters', this.filters);
    });
  }

  async ngOnInit() {
    this.filters = this.filterService.getQueryFilters();
    console.log('article-list filters', this.filters);
    this.articleDatePub = this.setDateRange();
    await this.handleInitDataLoad();
  }

  ngOnDestroy() {
    this.filterSubcription$.unsubscribe();
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

  setDateRange(): ModelStringKeyConditionInput {
    const now = moment();
    const dateLimit = now.subtract(3, 'hours');

    return {
      between: [
        dateLimit.toISOString(), now.toISOString()
      ]
    };
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
    const results = await this.neutrfiyAPI.ArticlesByDate('news', this.articleDatePub,
     ModelSortDirection.DESC, this.filters, limit, nextToken);
    this.nextToken = results.nextToken;
    console.log('is new token null? ', this.nextToken === null);
    return results.items;
  }
}
