import { AdMob } from '@admob-plus/ionic';
import { environment } from './../../environments/environment';
import { AuthService } from './../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage {
  menuSubscription$: Subscription;
  menuStatus = false;
  public displayAd = false;

  platformResize$: Subscription;
  platformWidth: number;
  platformHeight: number;

  constructor(
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    public authService: AuthService,
    private admob: AdMob
  ) {
    this.platform.ready().then((readySource) => {
      if (environment.production) {
        if (readySource === 'iOS') {
          this.admob.banner.show({ id: 'ca-app-pub-1312649730148564/2740135529' });
        } else if (readySource === 'android') {
          this.admob.banner.show({ id: 'ca-app-pub-1312649730148564/2037976682' });
        }
      } else {
        if (readySource !== 'dom') {
          this.admob.banner.show({ id: 'test' });
        }
      }

      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();
      this.displayAd = readySource === 'dom' && environment.production;
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });
  }

  ionViewWillEnter() {
    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
  }

  ionViewWillLeave() {
    this.menuSubscription$.unsubscribe();
    this.platformResize$.unsubscribe();
    if (environment.production) {
      this.admob.banner.hide({
        ios: 'ca-app-pub-1312649730148564/2740135529',
        android: 'ca-app-pub-1312649730148564/2037976682'
      });
    } else {
      this.admob.banner.hide({
        ios: 'test',
        android: 'test'
      });
    }
  }

  toggleMenu() {
    if (this.platformWidth < 1080) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }
}
