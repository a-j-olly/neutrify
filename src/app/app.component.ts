import { environment } from './../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menuSubscription$: Subscription;
  menuStatus = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    public authService: AuthService,
    public router: Router,
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

  initializeApp() {
    this.platform.ready().then((readySource) => {
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#333');
        this.statusBar.styleLightContent();
      } else if (this.platform.is('ios')) {
        this.statusBar.styleDefault();
      }

      this.splashScreen.hide();
    });
  }
}
