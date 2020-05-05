import { MenuController, AlertController } from '@ionic/angular';
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
    private alertController: AlertController
  ) {}


  ngOnInit() {
  }

  async ionViewWillEnter() {
    setTimeout(() => {
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(false, 'mainMenu');
    }, 500);
  }

  async ionViewDidEnter() {
    if (this.authService.signedIn) {
      await this.presentAlertConfirm();
    }
  }

  navToSignUp() {
    this.router.navigateByUrl('/auth/create-account');
  }

  navToSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'You are signed in. Would you like to go to the app?',
      buttons: [
        {
          text: 'Sign Out',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await this.authService.signOut();
          }
        }, {
          text: 'Go To App',
          handler: () => {
            this.router.navigateByUrl('/app');
          }
        }
      ]
    });

    await alert.present();
  }
}
