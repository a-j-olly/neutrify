import { environment } from './../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from "@ionic-native/theme-detection/ngx";
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private menuSubscription$: Subscription;
  public menuStatus = false;
  private prefersDark;
  private platformSource: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    public authService: AuthService,
    public router: Router,
    private themeDetection: ThemeDetection,
    private storage: Storage
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.gaTrackingId, { page_path: event.urlAfterRedirects });
      }
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      this.menuStatus = status;
    });

    this.initializeApp();
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
