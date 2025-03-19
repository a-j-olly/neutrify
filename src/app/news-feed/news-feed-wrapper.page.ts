import { NewsFeedComponent } from './feed/news-feed.component';
import { LayoutTogglerComponent } from './layout-toggler/layout-toggler.component';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/mock-auth.service';
import {
	Platform,
	MenuController,
	PopoverController,
	ModalController,
	IonContent,
} from '@ionic/angular';
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
import { first } from 'rxjs/operators';
import { AdMob } from '@admob-plus/ionic';

@Component({
	selector: 'app-news-feed-wrapper',
	templateUrl: './news-feed-wrapper.page.html',
	animations: [
		trigger('btnInBottom', [
			transition('void => *', [
				style({ transform: 'translateY(100%)', opacity: 0.7 }),
				animate(500),
			]),
		]),
		trigger('btnInLeft', [
			transition('void => *', [
				style({ transform: 'translateX(-100%)', opacity: 0.7 }),
				animate(500),
			]),
		]),
	],
	styleUrls: ['./news-feed-wrapper.page.scss'],
})
export class NewsFeedWrapperPage {
	@ViewChild(IonContent) content: IonContent;
	@ViewChild(NewsFeedComponent) newsFeed: NewsFeedComponent;

	public displayArticles: Array<any> = new Array<any>();
	public platformWidth: number;
	public platformHeight: number;
	public showRefreshFab = false;
	public filtersLoading = false;
	public filtersSaved = true;
	public menuStatus = false;
	public isFeedUpdating = true;
	public filtersInitStatus: boolean = this.authService.filtersInitStatus
		? this.authService.filtersInitStatus
		: false;
	public searchTerm: string;
	public layout: string;

	private masterSubscription$: Subscription;
	private filtersInitStatus$: Subscription;

	private platformSource: string;
	private timeLeft = environment.refreshTimeLimit;
	private timerObj: NodeJS.Timeout;
	private useFilters = false;
	private currentBanner;

	constructor(
		public authService: AuthService,
		private platform: Platform,
		private menuService: MenuService,
		private menu: MenuController,
		private filterService: FilterService,
		private newsFeedService: NewsFeedService,
		private router: Router,
		private popoverController: PopoverController,
		private modalController: ModalController,
		private storage: Storage,
		private admob: AdMob
	) {
		this.platform.ready().then(async (readySource) => {
			this.platformSource = readySource.toLowerCase();
			this.platformWidth = this.platform.width();
			this.platformHeight = this.platform.height();

			if (readySource !== 'dom') {
				await this.admob.start();
				this.admob.setAppVolume(0);

				if (environment.production) {
					this.currentBanner = new this.admob.BannerAd({
						adUnitId: 'ca-app-pub-1312649730148564/2037976682',
					});
				} else {
					this.currentBanner = new this.admob.BannerAd({
						adUnitId: 'ca-app-pub-3940256099942544/6300978111',
					});
				}

				await this.playAds();

				this.platform.pause.subscribe(() => {
					this.pauseAds();
				});

				this.platform.resume.subscribe(() => {
					this.playAds();
					this.showRefreshFab = true;
				});
			}
		});

		this.filtersInitStatus$ = this.authService
			.getFiltersInitStatus()
			.pipe(first())
			.subscribe((status) => (this.filtersInitStatus = status));

		this.masterSubscription$ = this.openSubChain();
	}

	/**
	 * Ionic lifecycle - Fired when the component routing to is about to animate into view.
	 */
	public async ionViewWillEnter() {
		if (this.masterSubscription$.closed) {
			this.masterSubscription$ = this.openSubChain();
		}

		if (this.platformSource !== 'dom') {
			this.playAds();
		}

		this.menu.enable(true, 'filterMenu');
		this.menu.enable(true, 'mainMenu');
		this.menu.swipeGesture(true, 'filterMenu');
		this.menu.swipeGesture(true, 'mainMenu');
		this.menuService.openMenu();
	}

	/**
	 * Ionic lifecycle - Fired when the component routing to has finished animating.
	 */
	public async ionViewDidEnter() {
		const doneTutorial = await this.storage.get('neutrify_done_tutorial');
		if (!doneTutorial) {
			this.showTutorial().then(() =>
				this.storage.set('neutrify_done_tutorial', true)
			);
		}

		const layoutPreference: string = await this.storage.get(
			'neutrify_layout_preference'
		);
		this.newsFeedService.setLayout(
			layoutPreference ? layoutPreference : 'grid'
		);
		this.startTimer();
	}

	/**
	 * Ionic lifecycle - Fired when the component routing from is about to animate.
	 */
	public async ionViewWillLeave() {
		if (this.platformSource !== 'dom') {
			this.pauseAds();
		}

		this.stopTimer();
		this.menu.close();
		this.menuService.closeMenu();
		this.newsFeedService.resetArticles();
		this.newsFeedService.setFeedUpdateStatus(true);
	}

	/**
	 * Ionic lifecycle - Fired when the component routing to has finished animating.
	 */
	public async ionViewDidLeave() {
		this.filtersInitStatus$.unsubscribe();
		this.masterSubscription$.unsubscribe();
	}

	/**
	 * Saves the current filters to the cloud.
	 */
	public async saveFilters() {
		await this.newsFeedService.saveFilters();
	}

	/**
	 * Loads the saved filters into the news feed.
	 */
	public async loadFilters() {
		await this.newsFeedService.loadFilters();
	}

	/**
	 * Triggers the display of the tutorial modal.
	 */
	public async showTutorial() {
		const popover = await this.modalController.create({
			component: TutorialComponent,
			showBackdrop: false,
			cssClass: 'tutorial-modal',
		});

		return await popover.present();
	}

	/**
	 * Triggers the display of the search bar popover.
	 *
	 * @param {Event} event - DOM event used to position the popover
	 */
	public async showSearchBar(event: Event) {
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
			},
		});

		return await popover.present();
	}

	/**
	 * Triggers the display of the layout toggler popover.
	 *
	 * @param  {Event} event - DOM event used to position the popover
	 */
	public async showLayoutToggler(event: Event) {
		const popover = await this.popoverController.create({
			component: LayoutTogglerComponent,
			event,
			showBackdrop: false,
			translucent: true,
			mode: 'md',
			componentProps: {
				layout: this.layout,
			},
		});

		return await popover.present();
	}

	/**
	 * Grabs the latest articles for the feed when the user pulls it down.when the user clicks the refresh button.
	 */
	public async doRefresh() {
		this.content.scrollToTop();
		await this.newsFeedService.doRefresh();
	}

	/**
	 * Starts the countdown until the refresh button is displayed.
	 */
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

	/**
	 * Resets the countdown until the refresh button is displayed.
	 */
	public resetTimer() {
		this.showRefreshFab = false;
		this.stopTimer();
		this.timeLeft = environment.refreshTimeLimit;
		this.startTimer();
	}

	/**
	 * Stops the countdown until the refresh button is displayed.
	 */
	public stopTimer() {
		clearTimeout(this.timerObj);
		clearInterval(this.timerObj);
	}

	/**
	 * Toggles the display of the menus.
	 */
	public toggleMenu() {
		if (this.platformWidth < 720) {
			this.menuService.closeMenu();
			this.menu.toggle('filterMenu');
		} else {
			this.menuService.toggleMenu();
		}
	}

	private async playAds() {
		await this.currentBanner.show();
	}

	private async pauseAds() {
		await this.currentBanner.hide();
	}

	/**
	 * Chain subscribes to the observables required by the news feed.
	 *
	 * @returns Subscription - A single reference to the chain of subscriptions.
	 */
	private openSubChain(): Subscription {
		return this.newsFeedService
			.getFeedUpdateStatus()
			.subscribe((status) => (this.isFeedUpdating = status))
			.add(
				this.menuService.getMenuStatus().subscribe((status) => {
					if (status !== this.menuStatus) {
						this.newsFeedService.displayThreshold =
							this.newsFeedService.getDisplayThreshold(
								this.platformHeight,
								this.platformWidth,
								status
							);
					}

					this.menuStatus = status;
				})
			)
			.add(
				this.newsFeedService.getArticles().subscribe((articles) => {
					const { displayArticles, readyArticles } = articles;
					this.resetTimer();

					if (
						JSON.stringify(this.displayArticles) !==
						JSON.stringify(displayArticles)
					) {
						this.displayArticles = displayArticles;
					}
				})
			)
			.add(
				this.router.events.subscribe((event: NavigationStart) => {
					if (
						event.navigationTrigger === 'popstate' &&
						!event.url.startsWith('/app')
					) {
						this.newsFeedService.resetArticles();
						this.stopTimer();
						this.menu.close();
						this.menuService.closeMenu();
					}
				})
			)
			.add(
				this.platform.resize.subscribe(
					() => (this.platformWidth = this.platform.width())
				)
			)
			.add(
				this.newsFeedService.getLayout().subscribe((layout) => {
					if (layout !== this.layout) {
						this.newsFeedService.displayThreshold =
							this.newsFeedService.getDisplayThreshold(
								this.platformHeight,
								this.platformWidth,
								this.menuStatus
							);
					}

					this.layout = layout;
				})
			)
			.add(
				this.newsFeedService.getSearchFilterData().subscribe((data) => {
					if (data && data.searchTerm) {
						this.searchTerm = data.searchTerm;
						this.useFilters = data.useFilters;
					} else {
						this.searchTerm = '';
						this.useFilters = false;
					}
				})
			)
			.add(
				this.filterService.getFilterLoading().subscribe((status) => {
					if (this.filtersInitStatus) {
						this.newsFeedService.openArticleIndex = undefined;
						this.filtersLoading = status;
					}
				})
			)
			.add(
				this.filterService.getFilterSavedStatus().subscribe((status) => {
					this.searchTerm = '';

					if (this.filtersInitStatus) {
						this.filtersSaved = status;
					}
				})
			);
	}
}
