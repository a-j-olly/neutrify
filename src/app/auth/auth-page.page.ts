import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPage {

  constructor(
    private router: Router,
    private menu: MenuController,
    private menuService: MenuService
  ) { }

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
