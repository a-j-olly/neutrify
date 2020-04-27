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

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
  }

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.menuService.closeMenu();
      this.router.navigateByUrl('/home');
    } else {
      alert('Could not sign you out. Please try again.');
    }
  }
}
