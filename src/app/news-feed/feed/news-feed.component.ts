import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform, ToastController, IonContent } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { formatDistanceToNow } from 'date-fns';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  public openArticleIndex: number;

  filters: any;
  filterSubcription$: Subscription;

  public filtersSaved: boolean = true;
  private filtersSavedSubcription$: Subscription;

  public displayArticles: Array<any> = new Array<any>();
  private displayArticlesSubscription$: Subscription;

  private readyArticles: Array<any> = new Array<any>();
  private readyArticlesSubscription$: Subscription;

  private displayThreshold = 15;

  public nextToken: string;
  private limit = 25;

  public filterLoading: boolean = false;
  private filterLoadingSubcription$: Subscription;

  public isFeedUpdating = true;
  private isFeedUpdatingSubscription$: Subscription;

  platformResize$: Subscription;
  platformWidth: number;
  platformHeight: number;

  constructor(
    private filterService: FilterService,
    private toastController: ToastController,
    private changeDetector: ChangeDetectorRef,
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    public authService: AuthService,
    private content: IonContent,
    public newsFeedService: NewsFeedService,
  ) {
    this.platform.ready().then((readySource) => {
      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();
    });

    this.isFeedUpdatingSubscription$ = this.newsFeedService.getIsFeedUpdatingStatus().subscribe(status => {
      this.isFeedUpdating = status;
    });

    this.displayArticlesSubscription$ = this.newsFeedService.getDisplayArticles().subscribe(articles => {
      if (JSON.stringify(this.displayArticles) != JSON.stringify(articles)) {
        this.displayArticles = articles;
      }
    });

    this.readyArticlesSubscription$ = this.newsFeedService.getReadyArticles().subscribe(articles => {
      if (JSON.stringify(this.readyArticles) != JSON.stringify(articles)) {
        this.readyArticles = articles;
      }
    });

    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(async (ops) => {
      this.filters = this.filterService.getQueryFilters();
      this.newsFeedService.setFilters(this.filters);
      this.newsFeedService.setSearchFilter({searchTerm: null, useFilters: false});
      await this.newsFeedService.handleInitDataLoad();
    });

    this.filtersSavedSubcription$ = this.filterService.getFilterSavedStatus().subscribe(async (status) => {
      this.filtersSaved = status;
    });

    this.filterLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
      this.filterLoading = status;

      if (this.filterLoading) {
        this.openArticleIndex = undefined;
      }
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });
  }

  async ngOnInit() {
    this.displayThreshold = this.newsFeedService.displayThreshold;
    this.filters = this.filterService.getQueryFilters();
    this.newsFeedService.setFilters(this.filters);
    await this.newsFeedService.handleInitDataLoad();

    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.menu.swipeGesture(true, 'filterMenu');
    this.menu.swipeGesture(true, 'mainMenu');
    this.menuService.openMenu()
  }

  getArticleAge(date: string) {
    const diff = new Date().valueOf() - new Date(date).valueOf();
    const ageInMinutes = Math.floor(Math.abs(diff / 36e5) * 60);
    let age: string;
    if (ageInMinutes <= 15) {
      age = 'Just Now';
    } else {
      age = `${formatDistanceToNow(new Date(date))} ago`;
    }

    return age;
  }

  async onArticleSelected(index: number) {
    if (this.openArticleIndex !== undefined) {
      if (this.openArticleIndex == index) {
        this.openArticleIndex = undefined;
        return;
      }

      this.openArticleIndex = undefined;
    }

    this.openArticleIndex = index;
    this.changeDetector.detectChanges();
    await this.scrollTo(index.toString());
  }

  async scrollTo(id: string) {
    let yOffset = document.getElementById(id).offsetTop;

    if (!this.platform.is('ios')) {
      yOffset = yOffset + 20;
    }

    await this.content.scrollToPoint(0, yOffset, 500);
  }

  async doRefresh(event?) {
    await this.newsFeedService.doRefresh();

    if (event) {
      event.target.complete();
    }
  }

  async getNextPage(event) {
    let i = 1;

    if (this.newsFeedService.nextToken && this.readyArticles.length < this.displayThreshold) {
      this.newsFeedService.updateIsFeedUpdatingStatus(true);
      let noNewArticles = 0;
      do {
        const newArticles: Array<any> = new Array<any>();
        newArticles.push(...await this.newsFeedService.listArticles(this.limit, this.newsFeedService.nextToken));
        this.readyArticles.push(...newArticles);
        noNewArticles += newArticles.length;

        if (i > 10 && noNewArticles >= 3) {
          break;
        }

        i++;
      } while (this.newsFeedService.nextToken && noNewArticles < this.displayThreshold);

    } else if (!this.newsFeedService.nextToken) {
      await this.presentToast('There are no more articles to be read. You\'re up to date.', 'primary');
    }

    await this.loadReadyArticles();
    this.newsFeedService.updateDisplayArticles(this.displayArticles);
    this.newsFeedService.updateReadyArticles(this.readyArticles);
    this.newsFeedService.updateIsFeedUpdatingStatus(false);
    event.target.complete();
  }

  async loadReadyArticles() {
    let noNewArticles: number;

    if (this.readyArticles.length >= this.displayThreshold) {
      noNewArticles = this.displayThreshold;
      this.displayArticles.push(...this.readyArticles.slice(0, (this.displayThreshold - 1)));
      this.readyArticles = this.readyArticles.slice((this.displayThreshold - 1));
    } else if (this.readyArticles.length) {
      noNewArticles = this.readyArticles.length;
      this.displayArticles.push(...this.readyArticles);
      this.readyArticles = [];
    }

    if (this.displayArticles.length >= 6 * this.displayThreshold && !this.platform.is('ios')) {
      this.displayArticles = this.displayArticles.slice((noNewArticles - 1));

      if (this.openArticleIndex && this.openArticleIndex - (noNewArticles - 1) < 0) {
        this.openArticleIndex = undefined;
      } else {
        this.openArticleIndex -= (noNewArticles - 1);
      }
    }
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
