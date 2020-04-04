import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
// import { AuthGuardService } from './services/auth-guard.service';
import { Component, OnDestroy } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
  menuSubscription$: Subscription;
  menuStatus = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private menuService: MenuService,
    public authService: AuthService,
    private location: LocationStrategy,
    private router: Router,
  ) {
    this.location.onPopState(() => {
      if (this.router.url.startsWith('/app/account')) {
        this.menu.enable(true, 'filterMenu');
      }
      return false;
    });

    this.menu.enable(false, 'filterMenu');
    this.menu.enable(false, 'mainMenu');
    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      this.menuStatus = status;
    });

    this.initializeApp();
  }

  ngOnDestroy() {
    this.menuSubscription$.unsubscribe();
  }

  mainMenuOpen() {
    this.menu.swipeGesture(true, 'mainMenu');
  }

  filterMenuOpen() {
    if (!this.menuStatus) {
      this.menu.swipeGesture(true, 'filterMenu');
    }
  }

  mainMenuClosed() {
    this.menu.swipeGesture(false, 'mainMenu');
  }

  filterMenuClosed() {
    if (!this.menuStatus) {
      this.menu.swipeGesture(false, 'filterMenu');
    }
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
