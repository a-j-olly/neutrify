import { ArticleWrapperComponent } from './article-wrapper/article-wrapper.component';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform, IonContent, ModalController } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Component, ChangeDetectorRef, OnInit, OnDestroy, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { formatDistanceToNow } from 'date-fns';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit, OnDestroy {
  @Input() layout: string;

  public displayArticles: Array<any> = new Array<any>();
  public isFeedUpdating = true;

  private filterSubscription$: Subscription;

  private readyArticles: Array<any> = new Array<any>();
  private articlesSubscription$: Subscription;

  private isFeedUpdatingSubscription$: Subscription;

  constructor(
    private filterService: FilterService,
    private changeDetector: ChangeDetectorRef,
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    public authService: AuthService,
    private content: IonContent,
    public newsFeedService: NewsFeedService,
    private modalController: ModalController,
  ) {
    this.filterSubscription$ = this.filterService.getFilterOptions().subscribe(async (ops) => {
      const filters = this.filterService.getQueryFilters();
      this.newsFeedService.setFilters(filters);
      this.newsFeedService.setSearchFilter({ searchTerm: null, useFilters: false });
      await this.newsFeedService.handleInitDataLoad();
    });

    this.isFeedUpdatingSubscription$ = this.newsFeedService.getFeedUpdateStatus().subscribe(status => {
      this.isFeedUpdating = status;
    });

    this.articlesSubscription$ = this.newsFeedService.getArticles().subscribe(articles => {
      const { displayArticles, readyArticles } = articles;

      if (JSON.stringify(this.displayArticles) !== JSON.stringify(displayArticles)) {
        this.displayArticles = displayArticles;
      }

      if (JSON.stringify(this.readyArticles) !== JSON.stringify(readyArticles)) {
        this.readyArticles = readyArticles;
      }
    });
  }

  public async ngOnInit() {
    const filters = this.filterService.getQueryFilters();
    this.newsFeedService.setFilters(filters);
    await this.newsFeedService.handleInitDataLoad();

    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.menu.swipeGesture(true, 'filterMenu');
    this.menu.swipeGesture(true, 'mainMenu');
    this.menuService.openMenu();
  }

  public ngOnDestroy() {
    this.filterSubscription$.unsubscribe();
    this.articlesSubscription$.unsubscribe();
    this.isFeedUpdatingSubscription$.unsubscribe();
  }

  public getArticleAge(date: string) {
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

  public async onArticleSelected(index: number) {
    if (this.newsFeedService.openArticleIndex !== undefined) {
      if (this.newsFeedService.openArticleIndex === index && this.layout === 'list') {
        this.newsFeedService.openArticleIndex = undefined;
        return;
      }

      this.newsFeedService.openArticleIndex = undefined;
    }

    this.newsFeedService.openArticleIndex = index;

    if (this.layout === 'grid') {
      await this.openArticleModal(this.displayArticles[index]);
      return;
    }

    this.changeDetector.detectChanges();
    await this.scrollTo(index.toString());
  }

  public async doRefresh(event?) {
    this.content.scrollToTop();
    await this.newsFeedService.doRefresh();

    if (event) {
      event.target.complete();
    }
  }

  public async getNextPage(event) {
    await this.newsFeedService.getNextPage();
    event.target.complete();
  }

  public handleImgError(event, index) {
    this.displayArticles[index].image = null;
  }

  private async scrollTo(id: string) {
    let yOffset = document.getElementById(id).offsetTop;

    if (!this.platform.is('ios')) {
      yOffset = yOffset + 20;
    }

    await this.content.scrollToPoint(0, yOffset, 500);
  }

  private async openArticleModal(article) {
    const modal = await this.modalController.create({
      component: ArticleWrapperComponent,
      componentProps: {
        article,
        layout: this.layout
      },
      cssClass: 'article-wrapper-modal'
    });

    modal.onDidDismiss().then(() => this.newsFeedService.openArticleIndex = undefined);
    return await modal.present();
  }

}
