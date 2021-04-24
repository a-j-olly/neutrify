import { Article } from './../../services/neutrify-api.service';
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

  public displayArticles: Array<Article> = new Array<Article>();
  public isFeedUpdating = true;
  public modalOpen = false;

  private filterSubscription$: Subscription;
  private readyArticles: Array<Article> = new Array<Article>();
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

    this.isFeedUpdatingSubscription$ = this.newsFeedService.getFeedUpdateStatus().subscribe(async (status) => {
      this.isFeedUpdating = status;

      if (this.isFeedUpdating) {
        await this.content.scrollToTop(0);

        if (this.modalOpen) {
          this.modalController.dismiss();
          this.newsFeedService.openArticleIndex = undefined;
          this.modalOpen = false;
        }
      }
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

  /**
   * Called once, after the first ngOnChanges().
   */
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

  /**
   * Called immediately before Angular destroys the directive or component.
   */
  public ngOnDestroy() {
    this.filterSubscription$.unsubscribe();
    this.articlesSubscription$.unsubscribe();
    this.isFeedUpdatingSubscription$.unsubscribe();
  }

  /**
   * Formats the date that will be displayed in the footer of article.
   *
   * @param  {string} date - The date ISO string from the article.
   */
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

  /**
   * Handles the clicking on of articles and scrolls to them if they are open.
   *
   * @param  {number} index
   */
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

  /**
   * Grabs the latest articles for the feed when the user pulls it down.
   *
   * @param  {any} event? - Custom Ionic event fired from the ion-refresher component.
   */
  public async doRefresh(event?: any) {
    this.content.scrollToTop();
    await this.newsFeedService.doRefresh();

    if (event) {
      event.target.complete();
    }
  }

  /**
   * Gets the next set of articles that are ready to be displayed on the feed.
   *
   * @param  {any} event - Custom Ionic event fired from the ion-refresher component.
   */
  public async getNextPage(event: any) {
    await this.newsFeedService.getNextPage();
    event.target.complete();
  }

  /**
   * When an image url fails to load, set the image property to null.
   *
   * @param  {Event} event - The DOM event returned on error.
   * @param  {number} index - The position in the array of articles.
   */
  public handleImgError(event: Event, index: number) {
    this.displayArticles[index].image = null;
  }

  /**
   * Scrolls the page to an element in the markup.
   *
   * @param  {string} id - The id of the element in the markup.
   */
  private async scrollTo(id: string) {
    let yOffset = document.getElementById(id).offsetTop;

    if (!this.platform.is('ios')) {
      yOffset = yOffset + 20;
    }

    await this.content.scrollToPoint(0, yOffset, 500);
  }

  /**
   * Opens up a modal that displays the article data.
   *
   * @param  {Article} article - The object contain all the article data.
   */
  private async openArticleModal(article: Article) {
    this.modalOpen = true;
    const modal = await this.modalController.create({
      component: ArticleWrapperComponent,
      componentProps: {
        article,
        layout: this.layout
      },
      cssClass: 'article-wrapper-modal'
    });

    modal.onDidDismiss().then(() => {
      this.newsFeedService.openArticleIndex = undefined;
      this.modalOpen = false;
    });
    return await modal.present();
  }
}
