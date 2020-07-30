import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {
  @ViewChild('page') page: IonContent;
  private platformSource: string;

  constructor(
    private router: Router,
    private platform: Platform,
    private themeDetection: ThemeDetection,
    private menu: MenuController
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

  async ionViewDidEnter() {
    await this.menu.swipeGesture(false, 'filterMenu');
    await this.menu.swipeGesture(false, 'mainMenu');
  }

  onSlideChange(event) {
    this.page.scrollToTop();
  }

  backToApp() {
    this.router.navigateByUrl('/app', { replaceUrl: true });
  }
}
