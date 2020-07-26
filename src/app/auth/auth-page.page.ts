import { MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPage {
  private platformSource: string;

  constructor(
    private router: Router,
    private menu: MenuController,
    private menuService: MenuService,
    private platform: Platform,
    private themeDetection: ThemeDetection
  ) {

    this.platform.ready().then((readySource: string) => this.platformSource = readySource);

    if (this.platformSource !== 'dom' && this.platform.is('android')) {
      this.platform.resume.subscribe(() => {
        this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
          if (res.value) {
            this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
              document.body.classList.toggle('dark', res.value);
            }).catch((error: any) => console.error(error));
          }
        }).catch((error: any) => console.error(error));
      });
    }
  }

  async ionViewWillEnter() {
    this.menuService.closeMenu();
    await this.menu.close('filterMenu');
    await this.menu.close('mainMenu');
  }

  async ionViewDidEnter() {
    await this.menu.swipeGesture(false, 'filterMenu');
    await this.menu.swipeGesture(false, 'mainMenu');
  }

  backToHome() {
    this.router.navigateByUrl('home');
  }
}
