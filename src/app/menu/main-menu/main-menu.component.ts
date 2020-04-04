import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  public accountSettingToggle;

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
  ) {}

  ngOnInit() {
    this.accountSettingToggle = environment.accountSettingToggle;
  }

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.menuService.closeMenu();
      this.menu.enable(false, 'filterMenu');
      this.menu.enable(false, 'mainMenu');
      this.router.navigateByUrl('/home');
    } else {
      alert('Could not sign you out. Please try again.');
    }
  }

  goToAccountSettings() {
    this.menuService.closeMenu();
    this.menu.enable(false, 'filterMenu');
    this.router.navigate(['app/account']);
  }
}
