import { AuthService } from './../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform, ToastController, IonContent } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
import { FilterService } from '../services/filter.service';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput } from '../services/neutrify-api.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { differenceInMinutes, sub, add, formatDistanceToNow } from 'date-fns';
import { AdMob } from '@admob-plus/ionic';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  animations: [
    trigger('btnInBottom', [
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0.7 }),
        animate(500)
      ]),
    ]),
    trigger('btnInLeft', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0.7 }),
        animate(500)
      ]),
    ])
  ],
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage {
  @ViewChild(IonContent) content: IonContent;

  public openArticleIndex: number;
  private platformSource: string;
  private timeLeft = environment.refreshTimeLimit;
  private timerObj: NodeJS.Timeout;
  private pausedTimestamp: number;
  public showRefreshFab = false;

  filters: any;
  filterSubcription$: Subscription;

  public filtersSaved: boolean = true;
  private filtersSavedSubcription$: Subscription;

  private readyArticles: Array<any> = new Array<any>();
  public displayArticles: Array<any> = new Array<any>();
  displayThreshold = 15;

  nextToken: string;
  limit = 25;
  updatingArticles = true;

  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription

  menuSubscription$: Subscription;
  menuStatus = true;

  platformResize$: Subscription;
  platformWidth: number;
  platformHeight: number;

  constructor(
    private neutrfiyAPI: APIService,
    private filterService: FilterService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService,
    private changeDetector: ChangeDetectorRef,
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    public authService: AuthService,
    private admob: AdMob,
    private screenOrientation: ScreenOrientation,
    private themeDetection: ThemeDetection
  ) {
    this.platform.ready().then((readySource) => {
      this.platformSource = readySource;
      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();
      this.screenOrientation.unlock();
      this.admob.setAppVolume(0);

      if (!environment.production) {
        this.admob.setDevMode(true);
      }
    });

    this.platform.pause.subscribe(() => {
      this.pausedTimestamp = new Date().getTime();
      this.pauseAds();
    });

    this.platform.resume.subscribe(() => {
      if (differenceInMinutes(new Date(), this.pausedTimestamp) >= 15) {
        this.resetTimer();
        this.showRefreshFab = true;
        this.playAds();
      }

      this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
        if (res.value) {
          this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
            document.body.classList.toggle('dark', res.value);
          }).catch((error: any) => console.error(error));
        }
      }).catch((error: any) => console.error(error));
    });
    
    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(async () => {
      this.filters = this.filterService.getQueryFilters();
      await this.handleInitDataLoad();
    });

    this.filtersSavedSubcription$ = this.filterService.getFilterSavedStatus().subscribe(async (status) => {
      if (this.authService.loaded) {
        this.filtersSaved = status;
      }
    });

    this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {

      if (this.authService.loaded) {
        this.filtersLoading = status;

        if (this.filtersLoading) {
          this.openArticleIndex = undefined;
        }
      }
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });
  }

  ionViewWillEnter() {
    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.displayThreshold = this.setDisplayThreshold();
  }

  async ionViewDidEnter() {
    this.filters = this.filterService.getQueryFilters();
    await this.handleInitDataLoad();

    this.startTimer();
    this.menuService.openMenu()
    this.menu.swipeGesture(true, 'filterMenu');
    this.menu.swipeGesture(true, 'mainMenu');
    this.playAds();
  }

  ionViewWillLeave() {
    this.pauseAds();
  }

  ionViewDidLeave() {
    this.resetArticles();
    this.filterSubcription$.unsubscribe();
    this.filtersSavedSubcription$.unsubscribe();
    this.updatingArticles = true;
  }

  startTimer() {
    this.timerObj = setTimeout(() => {
      this.timeLeft -= 1;      
      if (this.timeLeft > 0) {
        this.startTimer();
      } else {
        this.showRefreshFab = true;
      }
    }, 1000);
  }

  resetTimer() {
    this.showRefreshFab = false;
    this.stopTimer();
    this.timeLeft = environment.refreshTimeLimit;
    this.startTimer();
  }

  stopTimer() {
    clearTimeout(this.timerObj);
    clearInterval(this.timerObj);
  }

  playAds() {
    if (environment.production) {
      this.admob.banner.show({ id: {
        ios: 'ca-app-pub-1312649730148564/2740135529',
        android: 'ca-app-pub-1312649730148564/2037976682'
      }});
    } else {
      if (this.platformSource !== 'dom') {
        this.admob.banner.show({ id: {
          ios: 'test',
          android: 'test'
        }});
      }
    }
  }
    
  pauseAds() {
    if (this.platformSource !== 'dom') {
      if (environment.production && !this.platform.is('ios')) {
        this.admob.banner.hide({
          ios: 'ca-app-pub-1312649730148564/2740135529',
          android: 'ca-app-pub-1312649730148564/2037976682'
        });
      } else {
        this.admob.banner.hide({
          ios: 'test',
          android: 'test'
        });
      }
    }
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

  async resetArticles() {
    this.nextToken = null;
    this.readyArticles = new Array();
    this.displayArticles = new Array();
  }

  async handleInitDataLoad() {
    this.updatingArticles = true;
    await this.resetArticles();

    let i = 1;
    let newLimit = 100;
    do {
      if (i === 1) {
        this.readyArticles = await this.listArticles(newLimit);
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
      
      i++;
    } while (this.nextToken && this.readyArticles.length < this.displayThreshold);

    this.displayArticles = this.readyArticles.slice(0, (this.displayThreshold - 1));
    this.readyArticles = this.readyArticles.slice((this.displayThreshold - 1));

    this.limit = newLimit;
    this.filterService.updateFilterLoading(false);
    this.updatingArticles = false;

    if (!this.nextToken && this.readyArticles.length < this.displayThreshold) {
      await this.presentToast('Could only find a few articles that fit your criteria. Try to remove some filters.', 'primary');
    }
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

  setDisplayThreshold(): number {
    let result;

    if (this.platformHeight <= 360) {
      result = 12;
    } else if (this.platformHeight <= 480) {
      result = 15;
    } else if (this.platformHeight <= 640) {
      result = 21;
    } else {
      result = 27;
    }

    return result;
  }

  setDateRange(): ModelStringKeyConditionInput {
    const start = sub(new Date(), { days: 3 });
    const end = add(new Date(), { hours: 1 });

    return {
      between: [
        start.toISOString(), end.toISOString()
      ]
    };
  }

  async doRefresh(event?) {
    this.filterService.updateFilterLoading(true);
    this.updatingArticles = true;
    this.resetTimer();
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
    this.updatingArticles = false;
  }

  async getNextPage(event) {
    if (this.nextToken && this.readyArticles.length < this.displayThreshold) {

      this.updatingArticles = true;
      let noNewArticles = 0;
      do {
        const newArticles: Array<any> = new Array<any>();
        newArticles.push(...await this.listArticles(this.limit, this.nextToken));
        this.readyArticles.push(...newArticles);
        noNewArticles += newArticles.length;

      } while (this.nextToken && noNewArticles < this.displayThreshold);

    } else if (!this.nextToken) {
      this.presentToast('There are no more articles to be read. You\'re up to date.', 'primary');
    }

    await this.loadReadyArticles();
    this.updatingArticles = false;
    event.target.complete();
  }

  async listArticles(limit?, nextToken?) {
    if (nextToken === undefined) {
      nextToken = this.nextToken;
    }

    if (limit === undefined) {
      limit = 25;
    }

    let results;
    try {
      results = await this.neutrfiyAPI.ArticlesByDate('news', this.setDateRange(), ModelSortDirection.DESC, this.filters, limit, nextToken);
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
              results = await this.neutrfiyAPI.ArticlesByDate('news', this.setDateRange(), ModelSortDirection.DESC, this.filters, limit, nextToken);
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

  async saveFilters() {
    this.filterService.updateFilterLoading(true);
    const res = await this.filterService.saveFilters();
    if (res) {
      await this.presentToast('Your filters have been saved.', 'success');
      this.ga.eventEmitter('save_filters_fab', 'engagement', 'Saved filters');
    } else {
      this.presentToast('Could not save your filters. Please try again.', 'danger');
    }
    this.filterService.updateFilterLoading(false);
  }

  async loadFilters() {
    this.filterService.updateFilterLoading(true);
    const res = await this.filterService.loadFilters(this.authService.user.username);
    if (res) {
      await this.presentToast('Your changes to the filters have been reset.', 'success');
      this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');
    } else {
      this.presentToast('Could not reset your filters. Please try again.', 'danger');
    }
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

    if (this.displayArticles.length >= 3 * this.displayThreshold && !this.platform.is('ios')) {
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

  toggleMenu() {
    if (this.platformWidth < 720) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }
}
