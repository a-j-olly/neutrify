import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { Component, ViewContainerRef, ViewChild, Compiler, Injector, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { MetaService } from './services/meta.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('filterMenuContainer', { read: ViewContainerRef }) filterMenuContainer: ViewContainerRef;
  public menuStatus = false;
  public filtersInitStatus = false;

  private hasFilterMenuViewInit = false;
  private menuSubscription$: Subscription;
  private prefersDark;
  private platformSource: string;
  private filtersInitStatus$: Subscription;

  constructor(
    public authService: AuthService,
    public router: Router,
    private compiler: Compiler,
    private injector: Injector,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    private themeDetection: ThemeDetection,
    private storage: Storage,
    private ga: GoogleAnalyticsService,
    private meta: MetaService,
    private screenOrientation: ScreenOrientation,
    private ref: ChangeDetectorRef
  ) {
    this.initializeApp();

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      this.menuStatus = status;
    });

    this.filtersInitStatus$ = this.authService.getFiltersInitStatus().subscribe(status => {
      this.filtersInitStatus = status;

      if (this.filtersInitStatus && !this.hasFilterMenuViewInit) {
        this.ref.detectChanges();
        this.loadFilterMenu();
      } else if (!this.filtersInitStatus) {
        this.hasFilterMenuViewInit = false;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuService.updateCurrentRoute(event.urlAfterRedirects);
        this.ga.configEmitter(event.urlAfterRedirects);
      }
    });

    this.meta.updateTitle();
  }

  public toggleMenu() {
    this.menuService.toggleMenu();
  }

  public toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);

    if (this.platformSource !== 'dom' && this.platform.is('ios')) {
      if (shouldAdd) {
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.styleDefault();
      }
    }
  }

  public async detectTheme(): Promise<void> {
    return await this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
      if (res.value) {
        this.themeDetection.isDarkModeEnabled().then((theme: ThemeDetectionResponse) => {
          this.toggleDarkTheme(theme.value);
        }).catch((error: any) => console.error(error));
      }
    }).catch((error: any) => console.error(error));
  }

  public async configureDarkmode() {
    const displayDarkMode = await this.storage.get('neutrify_dark_mode');

    if (displayDarkMode !== undefined && displayDarkMode !== null) {
      this.toggleDarkTheme(displayDarkMode);
    } else if (this.platform.is('android') && this.platformSource !== 'dom') {
      this.detectTheme();
    } else {
      this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.toggleDarkTheme(this.prefersDark.matches);
    }
  }

  public async initializeApp() {
    this.platform.ready().then(async (readySource) => {
      this.platformSource = readySource;

      if (this.platformSource !== 'dom') {
        this.screenOrientation.unlock();

        if (this.platform.is('android')) {
          this.statusBar.backgroundColorByHexString('#0083ce');
          this.statusBar.styleLightContent();
        } else if (this.platform.is('ios')) {
          this.statusBar.styleDefault();
        }
      }

      this.configureDarkmode();
      this.splashScreen.hide();
    });
  }

  private loadFilterMenu() {
    // Dynamic import, activate code splitting and on demand loading of feature module
    // eslint-disable-next-line @typescript-eslint/naming-convention
    import('./menu/filter-menu/filter-menu.module').then(({ FilterMenuModule }) => {
      // Compile the module
      this.compiler.compileModuleAsync(FilterMenuModule).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        const filterMenuFactory = moduleRef.instance.resolveFilterMenuComponent();
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        <ComponentRef<FilterMenuComponent>> this.filterMenuContainer.createComponent(filterMenuFactory, null, moduleRef.injector);
        this.hasFilterMenuViewInit = true;
      });
    });
  }
}
