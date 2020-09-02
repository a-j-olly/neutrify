import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPage {
  public disableNavButtons: boolean = false;

  constructor(
    private router: Router,
    private menu: MenuController,
  ) {}

  async ionViewDidEnter() {
    await this.menu.swipeGesture(false, 'filterMenu');
    await this.menu.swipeGesture(false, 'mainMenu');
  }

  async navTo(path: string, replaceUrl: boolean) {
    if (!this.disableNavButtons) {
      this.disableNavButtons = true;
      await this.router.navigateByUrl(path, { replaceUrl });
    }
    this.disableNavButtons = false;
  }
}
