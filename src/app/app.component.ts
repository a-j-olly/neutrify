import { environment } from './../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { Component, ViewContainerRef, ViewChild, Compiler, Injector, ComponentRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from "@ionic-native/theme-detection/ngx";
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('filterMenuContainer', { read: ViewContainerRef }) filterMenuContainer: ViewContainerRef;
  @ViewChild('mainMenuContainer', { read: ViewContainerRef }) mainMenuContainer: ViewContainerRef;

  hasFilterView: boolean = false;

  public menuStatus = false;
  private menuSubscription$: Subscription;

  private prefersDark;
  private platformSource: string;

  public filtersInitStatus: boolean = false;
  private filtersInitStatus$: Subscription;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    public authService: AuthService,
    public router: Router,
    private themeDetection: ThemeDetection,
    private storage: Storage,
    private ga: GoogleAnalyticsService,
    private meta: MetaService
  ) {

    this.initializeApp();

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      this.menuStatus = status;
    });

    this.filtersInitStatus$ = this.authService.getFiltersInitStatus().subscribe(status => {
      this.filtersInitStatus = status;

      if (this.filtersInitStatus && !this.hasFilterView) {
        this.loadMenuComponents();
      }
    });
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ga.configEmitter(event.urlAfterRedirects);
      }
    });

    this.meta.updateTitle();
  }

  private loadMenuComponents() {
    // Dynamic import, activate code splitting and on demand loading of feature module
    import('./menu/menu.module').then(({ MenuComponentModule }) => {
      // Compile the module
      this.compiler.compileModuleAsync(MenuComponentModule).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        const { filterMenuFactory, mainMenuFactory } = moduleRef.instance.resolveComponents();
        <ComponentRef<MainMenuComponent>> this.mainMenuContainer.createComponent(mainMenuFactory, null, moduleRef.injector);
        <ComponentRef<FilterMenuComponent>> this.filterMenuContainer.createComponent(filterMenuFactory, null, moduleRef.injector);
        this.hasFilterView = true;
      });
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);

    if (this.platformSource !== 'dom' && this.platform.is('ios')) {
      if (shouldAdd) {
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.styleDefault()
      }
    }
  }

  async detectTheme(): Promise<void> {
    return await this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
      if (res.value) {
        this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
          this.toggleDarkTheme(res.value);
        }).catch((error: any) => console.error(error));
      }
    }).catch((error: any) => console.error(error));
  }

  async configureDarkmode() {
    const displayDarkMode = await this.storage.get('ion_display_dark_mode');

    if (displayDarkMode !== undefined && displayDarkMode !== null) {
      this.toggleDarkTheme(displayDarkMode);
    } else if (this.platform.is('android') && this.platformSource !== 'dom') {
      this.detectTheme();
    } else {
      this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.toggleDarkTheme(this.prefersDark.matches);
    }  
  }

  async initializeApp() {
    this.platform.ready().then(async (readySource) => {
      this.platformSource = readySource;

      if (this.platformSource !== 'dom' && this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#333');
        this.statusBar.styleLightContent();
      } else if (this.platform.is('ios')) {
        this.statusBar.styleDefault();
      }

      this.configureDarkmode();
      this.splashScreen.hide();
    });
  }
}
