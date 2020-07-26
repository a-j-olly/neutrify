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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    public authService: AuthService,
    public router: Router,
    private themeDetection: ThemeDetection
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

  ionViewWillLeave() {
    this.menuSubscription$.unsubscribe();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  private async isAvailable(): Promise<ThemeDetectionResponse> {
    let darkModeAvailable: ThemeDetectionResponse;

    try {
      darkModeAvailable = await this.themeDetection.isAvailable();
    } catch (e) {
      console.log(e);
    }

    return darkModeAvailable;
  }

  private async isDarkModeEnabled(): Promise<ThemeDetectionResponse> {
    let darkModeEnabled: ThemeDetectionResponse;

    try {
      darkModeEnabled = await this.themeDetection.isDarkModeEnabled();
    } catch (e) {
      console.log(e);
    }

    return darkModeEnabled;
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  initializeApp() {
    this.platform.ready().then(async (readySource) => {
      if (readySource !== 'dom') {
        if (this.platform.is('android')) {
          this.statusBar.backgroundColorByHexString('#333');
          this.statusBar.styleLightContent();
  
          if ((await this.isAvailable()).value) {
            this.toggleDarkTheme((await this.isDarkModeEnabled()).value);
          }
  
        } else if (this.platform.is('ios')) {
          this.statusBar.styleDefault();
        }
      }

      if (!this.platform.is('android') || readySource === 'dom') {
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
        this.toggleDarkTheme(this.prefersDark.matches)
      }

      this.splashScreen.hide();
    });
  }
}
