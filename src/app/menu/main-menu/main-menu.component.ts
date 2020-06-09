import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  userEmail: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
    private ga: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.userEmail = this.authService.userEmail;
  }

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.menuService.closeMenu();
      await this.menu.enable(false, 'filterMenu');
      await this.menu.enable(false, 'mainMenu');
      this.router.navigateByUrl('/auth/sign-in', { replaceUrl: true });
      this.ga.eventEmitter('logout', 'engagement', 'Logout');
    } else {
      alert('Could not sign you out. Please try again.');
    }
  }

  async goToHelp() {
    this.menuService.closeMenu();
    await this.menu.enable(false, 'filterMenu');
    await this.menu.enable(false, 'mainMenu');

    await this.router.navigateByUrl('/app/help');
  }
}
