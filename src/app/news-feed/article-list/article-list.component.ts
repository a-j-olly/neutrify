import { Subscription } from 'rxjs';
import { ArticleComponent } from './article/article.component';
import { FilterService } from './../../services/filter.service';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput } from './../../services/neutrify-api.service';
import { Component, OnInit, ViewChildren, QueryList, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import * as moment from 'moment';
import { ToastController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() platformHeight: number;
  @ViewChild(IonContent) content: IonContent;
  @ViewChildren(ArticleComponent) articles !: QueryList<ArticleComponent>;
  openArticleId: string;

  filters: any;
  filterSubcription$: Subscription;

  rawArticles: Array<any> = new Array<any>();
  displayArticles: Array<any> = new Array<any>();
  displayThreshold = 15;

  nextToken: string;
  limit = 25;
  updatingArticles = false;

  constructor(
    private neutrfiyAPI: APIService,
    private filterService: FilterService,
    private toastController: ToastController,
    private changeDetector: ChangeDetectorRef
    ) {

    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(async () => {
      this.filters = this.filterService.getQueryFilters();
      await this.handleInitDataLoad();
    });
  }

  async ngOnInit() {
    this.displayThreshold = this.setDisplayThreshold();
    this.filters = this.filterService.getQueryFilters();
    await this.handleInitDataLoad();
  }

  async resetArticles() {
    this.nextToken = null;
    this.rawArticles = new Array();
    this.displayArticles = new Array();
  }

  ionViewWillLeave() {
    this.filterSubcription$.unsubscribe();
  }

  async handleInitDataLoad() {
    this.updatingArticles = true;
    await this.resetArticles();

    let i = 1;
    let newLimit = 50;
    do {
      if (i === 1) {
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i === 2) {
        newLimit = 100;
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i === 3) {
        newLimit = 200;
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i === 4) {
        newLimit = 300;
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i > 4) {
        this.rawArticles.push(...await this.listArticles(1000, this.nextToken));
      }
      this.displayArticles = this.rawArticles;
      i++;
    } while (this.nextToken && this.rawArticles.length < this.displayThreshold);

    this.limit = newLimit;
    this.updatingArticles = false;

    if (!this.nextToken && this.rawArticles.length < this.displayThreshold) {
      await this.presentToast('Could only find a few articles that fit your criteria. Try to remove some filters.', 'primary');
    }
  }

  async handleArticleToggle(status, id) {
    if (status) {
      if (this.openArticleId) {
        const article = this.articles.find((a: ArticleComponent) => {
          return a.id === this.openArticleId;
        });
        article.isCardExpanded = false;
        this.openArticleId = id.toString();
      } else {
        this.openArticleId = id.toString();
      }
    } else {
      this.openArticleId = null;
    }

    this.changeDetector.detectChanges();
    await this.scrollTo(id.toString());
  }

  async scrollTo(id: string) {
    const yOffset = document.getElementById(id).offsetTop;
    await this.content.scrollToPoint(0, yOffset, 200);
  }

  setDisplayThreshold(): number {
    let result;

    if (this.platformHeight <= 360) {
      result = 5;
    } else if (this.platformHeight <= 480) {
      result = 7;
    } else if (this.platformHeight <= 640) {
      result = 9;
    } else if (this.platformHeight <= 812) {
      result = 11;
    } else if (this.platformHeight <= 1024) {
      result = 16;
    } else if (this.platformHeight <= 1366) {
      result = 23;
    } else {
      result = 25;
    }

    return result;
  }

  setDateRange(): ModelStringKeyConditionInput {
    const start = moment().subtract(3, 'day');
    const end = moment().add(1, 'hour');

    return {
      between: [
        start.toISOString(), end.toISOString()
      ]
    };
  }

  async doRefresh(event) {
    this.updatingArticles = true;
    this.rawArticles = [];
    await this.handleInitDataLoad();
    event.target.complete();
    this.updatingArticles = false;
  }

  async getNextPage(event) {
    if (this.nextToken) {
      this.updatingArticles = true;
      let noNewArticles = 0;
      do {
        const newArticles: Array<any> = new Array<any>();
        newArticles.push(...await this.listArticles(this.limit, this.nextToken));
        noNewArticles += newArticles.length;
        if (newArticles.length > 0) {
          this.rawArticles.push(...newArticles);
        }

        this.displayArticles = this.rawArticles;
      } while (this.nextToken && noNewArticles < 5);

      this.updatingArticles = false;
    } else {
      this.presentToast('There are no more articles to be read. You\'re up to date.', 'primary');
    }
    event.target.complete();
  }

  async listArticles(limit?, nextToken?) {
    if (nextToken === undefined) {
      nextToken = this.nextToken;
    }

    if (limit === undefined) {
      limit = 25;
    }

    const results = await this.neutrfiyAPI.ArticlesByDate('news', this.setDateRange(),
     ModelSortDirection.DESC, this.filters, limit, nextToken);
    this.nextToken = results.nextToken;
    return results.items;
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}
