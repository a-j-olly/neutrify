import { Component, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {
  @ViewChild('page') page: IonContent;

  constructor(
    private router: Router,
    private menu: MenuController
  ) {}

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
