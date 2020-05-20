import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

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
    private ga: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.userEmail = this.authService.userEmail;
  }

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.menuService.closeMenu();
      this.router.navigateByUrl('/home/welcome');
      this.ga.eventEmitter('logout', 'engagement', 'Logout');
    } else {
      alert('Could not sign you out. Please try again.');
    }
  }
}
