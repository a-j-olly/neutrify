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
  private platformSource: string;

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

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  configureDarkmode() {
    if (!this.platform.is('android') || this.platformSource === 'dom') {
      this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
      this.toggleDarkTheme(this.prefersDark.matches)
    } else {
      this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
        if (res.value) {
          this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
            document.body.classList.toggle('dark', res.value);
          }).catch((error: any) => console.error(error));
        }
      }).catch((error: any) => console.error(error));
    }  
  }

  initializeApp() {
    this.platform.ready().then(async (readySource) => {
      this.platformSource = readySource;
      if (readySource !== 'dom') {
        if (this.platform.is('android')) {
          this.statusBar.backgroundColorByHexString('#333');
          this.statusBar.styleLightContent();
  
        } else if (this.platform.is('ios')) {
          this.statusBar.styleDefault();
        }
      }

      this.configureDarkmode();
      this.splashScreen.hide();
    });
  }
}
