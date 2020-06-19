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
  private platformSource;

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
      this.platformSource = readySource;
      this.platformWidth = this.platform.width();
      this.platformHeight = this.platform.height();
      this.displayAd = readySource === 'dom' && environment.production;
    });

    this.platform.pause.subscribe(() => {
      this.pauseAds();
    });

    this.platform.resume.subscribe(() => {
      this.playAds();
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });
  }

  playAds() {
    if (environment.production) {
      this.admob.banner.show({ id: {
        ios: 'ca-app-pub-1312649730148564/2740135529',
        android: 'ca-app-pub-1312649730148564/2037976682'
      }});
    } else {
      if (this.platformSource !== 'dom') {
        this.admob.banner.show({ id: {
          ios: 'test',
          android: 'test'
        }});
      }
    }
  }

  pauseAds() {
    if (this.platformSource !== 'dom') {
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
  }

  ionViewDidEnter() {
    this.menu.enable(true, 'filterMenu');
    this.menu.enable(true, 'mainMenu');
    this.playAds();
  }

  ionViewWillLeave() {
    this.pauseAds();
  }

  toggleMenu() {
    if (this.platformWidth < 720) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }
}
