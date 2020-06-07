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
    private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  async ionViewDidEnter() {
    if (await this.authService.isAuthenticated()) {
      await this.presentAlertConfirm();
    }
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
            this.router.navigateByUrl('/app', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
