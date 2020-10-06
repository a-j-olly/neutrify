import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Platform, MenuController, PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';
import { FilterService } from '../services/filter.service';
import { NewsFeedService } from '../services/news-feed.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { differenceInMinutes } from 'date-fns';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart } from '@angular/router';


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
  public displayArticles: Array<any> = new Array<any>();
  private displayArticlesSubscription$: Subscription;

  private routerEventSubscription$: Subscription;

  private platformResize$: Subscription;
  public platformWidth: number;
  public platformHeight: number;
  private platformSource: string;

  private timeLeft = environment.refreshTimeLimit;
  private timerObj: NodeJS.Timeout;
  private pausedTimestamp: number;
  public showRefreshFab = false;

  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription;

  public filtersSaved: boolean = true;
  private filtersSavedSubcription$: Subscription;

  private menuSubscription$: Subscription;
  public menuStatus = false;

  public isFeedUpdating = true;
  private isFeedUpdatingSubscription$: Subscription;

  public filtersInitStatus: boolean = this.authService.filtersInitStatus ? this.authService.filtersInitStatus : false;
  private filtersInitStatus$: Subscription;

  constructor(
    private platform: Platform,
    public authService: AuthService,
    private menuService: MenuService,
    private menu: MenuController,
    private filterService: FilterService,
    private newsFeedService: NewsFeedService,
    private router: Router,
    private popoverController: PopoverController
  ) {
    this.platform.ready().then((readySource) => {
      this.platformSource = readySource;
      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();
      this.newsFeedService.displayThreshold = this.newsFeedService.setDisplayThreshold(this.platformHeight);

      if (this.platformSource !== 'dom') {
        this.platform.pause.subscribe(() => {
          this.pausedTimestamp = new Date().getTime();
        });
    
        this.platform.resume.subscribe(() => {
          const timePassed = differenceInMinutes(new Date(), this.pausedTimestamp);
  
          if (timePassed >= 20) {
            this.newsFeedService.doRefresh();
          } else {
            this.showRefreshFab = true;
          }
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

    this.displayArticlesSubscription$ = this.newsFeedService.getDisplayArticles().subscribe(articles => {
      this.resetTimer();
  
      if (JSON.stringify(this.displayArticles) != JSON.stringify(articles)) {
        this.displayArticles = articles;
      }
    });

    this.platformResize$ = this.platform.resize.subscribe(() => this.platformWidth = this.platform.width());

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => this.menuStatus = status);

    this.isFeedUpdatingSubscription$ = this.newsFeedService.getIsFeedUpdatingStatus().subscribe(status => this.isFeedUpdating = status);
    
    this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe(status => {
      if (this.filtersInitStatus) {
        this.filtersLoading = status;
      }
    });

    this.filtersSavedSubcription$ = this.filterService.getFilterSavedStatus().subscribe(status => {
      if (this.filtersInitStatus) {
        this.filtersSaved = status;
      }
    });
  }

  async ionViewWillEnter() {
    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.menu.swipeGesture(true, 'filterMenu');
    this.menu.swipeGesture(true, 'mainMenu');
    this.menuService.openMenu()
  }

  async ionViewDidEnter() {
    this.startTimer();
  }

  async ionViewWillLeave() {
    this.stopTimer();
    this.menu.close();
    this.menuService.closeMenu();
  }

  public async saveFilters() {
    await this.newsFeedService.saveFilters();
  }

  public async loadFilters() {
    await this.newsFeedService.loadFilters();
  }

  public async search(event) {
    if (event.detail.value) {
      console.log('search term: ', event.detail.value);
    }
  }

  public async showSearchBar() {
    // this.buttonClicked = true;
    // const popover = await this.popoverController.create({
    //   component: AddFilterPopoverComponent,
    //   componentProps: {
    //     optionType,
    //     value
    //   },
    //   event,
    //   showBackdrop: false,
    //   translucent: true,
    //   cssClass: 'filter-popover'
    // });

    // this.buttonClicked = false;
    // return await popover.present();
  }

  public async doRefresh() {
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
