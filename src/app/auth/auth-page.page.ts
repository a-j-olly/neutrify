import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SignUpService } from './../services/sign-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    public signupService: SignUpService,
    private router: Router,
    private menuCtrl: MenuController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(false, 'mainMenu');
    }, 1000);
  }

  backToHome() {
    this.router.navigateByUrl('home');
  }
}
