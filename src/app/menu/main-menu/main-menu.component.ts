import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public modalController: ModalController,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
  ) {}

  ngOnInit() {}

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.menuService.closeMenu();
      this.menu.enable(false, 'filterMenu');
      this.menu.enable(false, 'mainMenu');
      // this.menu.close('filterMenu');
      this.router.navigate(['/home']);
    } else {
      alert('Could not sign you out. Please try again.');
    }
  }
}
