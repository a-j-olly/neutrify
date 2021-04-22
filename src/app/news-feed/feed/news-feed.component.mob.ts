import { ArticleWrapperComponent } from './article-wrapper/article-wrapper.component';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform, IonContent, ModalController } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Component, ChangeDetectorRef, OnInit, OnDestroy, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { formatDistanceToNow } from 'date-fns';
import { NewsFeedService } from '../../services/news-feed.service';
import { AdMob } from '@admob-plus/ionic';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit, OnDestroy {
  @Input() layout: string;
  public isFeedUpdating = true;
  public displayArticles: Array<any> = new Array<any>();
  public modalOpen = false;
  private platformSource: string;

  private filterSubscription$: Subscription;

  private readyArticles: Array<any> = new Array<any>();
  private articlesSubscription$: Subscription;

  private isFeedUpdatingSubscription$: Subscription;

  private currentBanner;
  private resumeAdSubscription$: Subscription;
  private pauseAdSubscription$: Subscription;

  constructor(
    private filterService: FilterService,
    private changeDetector: ChangeDetectorRef,
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    public authService: AuthService,
    private content: IonContent,
    public newsFeedService: NewsFeedService,
    private admob: AdMob,
    private modalController: ModalController
  ) {
    this.platform.ready().then(async (readySource) => {
      this.platformSource = readySource;
      await this.admob.start();
      this.admob.setAppVolume(0);

      if (environment.production) {
        this.currentBanner = new this.admob.BannerAd({
          adUnitId: 'ca-app-pub-1312649730148564/2037976682'
        });
      } else {
        this.currentBanner = new this.admob.BannerAd({
          adUnitId: 'ca-app-pub-3940256099942544/6300978111'
        });
      }

      await this.playAds();
      let firstAd = true;

      this.admob.on('admob.banner.impression').subscribe(async () => {
        if (firstAd === true) {
          firstAd = false;
        } else {
          await this.pauseAds();

          setTimeout(async ()=> {
            await this.playAds();
          }, 500);
        }
      });
    });

    this.pauseAdSubscription$ = this.platform.pause.subscribe(() => {
      this.pauseAds();
    });

    this.resumeAdSubscription$ = this.platform.resume.subscribe(() => {
      this.playAds();
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

    this.filterSubscription$ = this.filterService.getFilterOptions().subscribe(async (ops) => {
      const filters = this.filterService.getQueryFilters();
      this.newsFeedService.setFilters(filters);
      this.newsFeedService.setSearchFilter({searchTerm: null, useFilters: false});
      await this.newsFeedService.handleInitDataLoad();
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
    this.pauseAds();
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

  private async playAds() {
    await this.currentBanner.show();
  }

  private async pauseAds() {
    await this.currentBanner.hide();
  }

  private async scrollTo(id: string) {
    let yOffset = document.getElementById(id).offsetTop;

    if (!this.platform.is('ios')) {
      yOffset = yOffset + 20;
    }

    await this.content.scrollToPoint(0, yOffset, 500);
  }

  private async openArticleModal(article) {
    this.modalOpen = true;
    const modal = await this.modalController.create({
      component: ArticleWrapperComponent,
      componentProps: {
        article,
        layout: this.layout
      },
      cssClass: 'article-wrapper-modal'
    });

    modal.onDidDismiss().then(() => modal.onDidDismiss().then(() => {
      this.newsFeedService.openArticleIndex = undefined;
      this.modalOpen = false;
    }));
    return await modal.present();
  }
}
