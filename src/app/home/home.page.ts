import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
  ) {}


  ngOnInit() {
  }

  async ionViewWillEnter() {
    setTimeout(() => {
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(false, 'mainMenu');
    }, 1000);
  }

  navToSignUp() {
    this.router.navigateByUrl('/auth/create-account');
  }

  navToSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }
}
