import { LayoutTogglerComponent } from './layout-toggler/layout-toggler.component';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Platform, MenuController, PopoverController, ModalController, IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';
import { FilterService } from '../services/filter.service';
import { NewsFeedService } from '../services/news-feed.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-news-feed-wrapper',
  templateUrl: './news-feed-wrapper.page.html',
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
  styleUrls: ['./news-feed-wrapper.page.scss'],
})
export class NewsFeedWrapperPage {
  @ViewChild(IonContent) content: IonContent;

  public displayArticles: Array<any> = new Array<any>();
  public platformWidth: number;
  public platformHeight: number;
  public showRefreshFab = false;
  public filtersLoading = false;
  public filtersSaved = true;
  public menuStatus = false;
  public isFeedUpdating = true;
  public filtersInitStatus: boolean = this.authService.filtersInitStatus ? this.authService.filtersInitStatus : false;
  public searchTerm: string;
  public layout: string;

  private articlesSubscription$: Subscription;
  private routerEventSubscription$: Subscription;
  private platformResize$: Subscription;
  private platformSource: string;
  private timeLeft = environment.refreshTimeLimit;
  private timerObj: NodeJS.Timeout;
  private filtersLoadingSubscription$: Subscription;
  private filtersSavedSubscription$: Subscription;
  private menuSubscription$: Subscription;
  private isFeedUpdatingSubscription$: Subscription;
  private filtersInitStatus$: Subscription;
  private useFilters = false;
  private searchFilterSubscription$: Subscription;
  private layoutSubscription$: Subscription;

  constructor(
    private platform: Platform,
    public authService: AuthService,
    private menuService: MenuService,
    private menu: MenuController,
    private filterService: FilterService,
    private newsFeedService: NewsFeedService,
    private router: Router,
    private popoverController: PopoverController,
    private modalController: ModalController,
    private storage: Storage
  ) {
    this.platform.ready().then((readySource) => {
      this.platformSource = readySource;
      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();

      if (this.platformSource !== 'dom') {
        this.platform.resume.subscribe(() => {
          this.showRefreshFab = true;
        });
      }
    });

    this.filtersInitStatus$ = this.authService.getFiltersInitStatus().subscribe(status => this.filtersInitStatus = status);

    this.routerEventSubscription$ = this.router.events.subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate' && !event.url.startsWith('/app')) {
        this.newsFeedService.resetArticles();
        this.stopTimer();
        this.menu.close();
        this.menuService.closeMenu();
      }
    });

    this.articlesSubscription$ = this.newsFeedService.getArticles().subscribe(articles => {
      const { displayArticles, readyArticles } = articles;
      this.resetTimer();

      if (JSON.stringify(this.displayArticles) !== JSON.stringify(displayArticles)) {
        this.displayArticles = displayArticles;
      }
    });

    this.platformResize$ = this.platform.resize.subscribe(() => this.platformWidth = this.platform.width());

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      if (status !== this.menuStatus) {
        this.newsFeedService.displayThreshold = this.newsFeedService.setDisplayThreshold(this.platformHeight, this.platformWidth, status);
      }

      this.menuStatus = status;
    });

    this.isFeedUpdatingSubscription$ = this.newsFeedService.getFeedUpdateStatus().subscribe(status => this.isFeedUpdating = status);

    this.layoutSubscription$ = this.newsFeedService.getLayout().subscribe(layout => {
      if (layout !== this.layout) {
        this.newsFeedService.displayThreshold =
        this.newsFeedService.setDisplayThreshold(this.platformHeight, this.platformWidth, this.menuStatus);
      }

      this.layout = layout;
    });

    this.searchFilterSubscription$ = this.newsFeedService.getSearchFilter().subscribe(data => {

      if (data && data.searchTerm) {
        this.searchTerm = data.searchTerm;
        this.useFilters = data.useFilters;
      } else {
        this.searchTerm = '';
        this.useFilters = false;
      }
    });

    this.filtersLoadingSubscription$ = this.filterService.getFilterLoading().subscribe(status => {
      if (this.filtersInitStatus) {
        this.newsFeedService.openArticleIndex = undefined;
        this.filtersLoading = status;
      }
    });

    this.filtersSavedSubscription$ = this.filterService.getFilterSavedStatus().subscribe(status => {
      this.searchTerm = '';

      if (this.filtersInitStatus) {
        this.filtersSaved = status;
      }
    });
  }

  public async ionViewWillEnter() {
    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.menu.swipeGesture(true, 'filterMenu');
    this.menu.swipeGesture(true, 'mainMenu');
    this.menuService.openMenu();
  }

  async ionViewDidEnter() {
    const doneTutorial = await this.storage.get('neutrify_done_tutorial');
    if (!doneTutorial) {
      this.showTutorial().then(() => this.storage.set('neutrify_done_tutorial', true));
    }

    const layoutPreference: string = await this.storage.get('neutrify_layout_preference');
    this.newsFeedService.setLayout(layoutPreference ? layoutPreference : 'grid');
    this.startTimer();
  }

  async ionViewWillLeave() {
    this.stopTimer();
    this.menu.close();
    this.menuService.closeMenu();
    this.newsFeedService.resetArticles();
    this.newsFeedService.setFeedUpdateStatus(true);
  }

  public async saveFilters() {
    await this.newsFeedService.saveFilters();
  }

  public async loadFilters() {
    await this.newsFeedService.loadFilters();
  }

  public async showTutorial() {
    const popover = await this.modalController.create({
      component: TutorialComponent,
      showBackdrop: false,
      cssClass: 'tutorial-modal',
    });

    return await popover.present();
  }

  public async showSearchBar(event) {
    const popover = await this.popoverController.create({
      component: SearchBarComponent,
      event,
      showBackdrop: false,
      translucent: true,
      cssClass: 'search-bar-popover',
      mode: 'md',
      componentProps: {
        searchTerm: this.searchTerm,
        useFilters: this.useFilters,
      }
    });

    return await popover.present();
  }

  public async showLayoutToggler(event) {
    const popover = await this.popoverController.create({
      component: LayoutTogglerComponent,
      event,
      showBackdrop: false,
      translucent: true,
      mode: 'md',
      componentProps: {
        layout: this.layout,
      }
    });

    return await popover.present();
  }

  public async doRefresh() {
    this.content.scrollToTop();
    await this.newsFeedService.doRefresh();
  }

  public startTimer() {
    this.timerObj = setTimeout(() => {
      this.timeLeft -= 1;
      if (this.timeLeft > 0) {
        this.startTimer();
      } else {
        this.showRefreshFab = true;
      }
    }, 1000);
  }

  public resetTimer() {
    this.showRefreshFab = false;
    this.stopTimer();
    this.timeLeft = environment.refreshTimeLimit;
    this.startTimer();
  }

  public stopTimer() {
    clearTimeout(this.timerObj);
    clearInterval(this.timerObj);
  }

  public toggleMenu() {
    if (this.platformWidth < 720) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }
}
