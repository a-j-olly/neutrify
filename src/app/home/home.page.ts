import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private menu: MenuController,
  ) {}

  async ionViewDidEnter() {
    await this.menu.swipeGesture(false, 'filterMenu');
    await this.menu.swipeGesture(false, 'mainMenu');

    if (await this.authService.isAuthenticated()) {
      await this.presentAlertConfirm();
    }
  }

  navToSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  navToHome() {
    this.router.navigateByUrl('/home/welcome');
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
            this.router.navigateByUrl('/app', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
