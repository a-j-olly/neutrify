import { AuthService } from './../services/auth.service';
import { Subscription } from 'rxjs';
import { MenuController, Platform } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnDestroy {
  menuSubscription$: Subscription;
  menuStatus = false;

  platformResize$: Subscription;
  platformWidth: number;

  constructor(
    private menuService: MenuService,
    private menu: MenuController,
    private platform: Platform,
    private authService: AuthService
  ) {
    this.platform.ready().then(() => {
      this.platformWidth = this.platform.width();
    });

    this.platformResize$ = this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });
  }

  ngOnDestroy() {
    this.menuSubscription$.unsubscribe();
    this.platformResize$.unsubscribe();
  }

  toggleMenu() {
    if (this.platformWidth <= 1084) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }
}
