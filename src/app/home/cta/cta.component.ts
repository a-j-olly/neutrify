import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  public showPrivacyNotice = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.storage.get('ion_accepted_privacy').then(async (result) => {
      if (result) {
        this.showPrivacyNotice = false;
      } else {
        this.showPrivacyNotice = true;
      }
    });
  }

  acceptedPrivacyNotice() {
    this.storage.set('ion_accepted_privacy', true);
    this.showPrivacyNotice = false;
  }

  navToSignUp() {
    this.router.navigateByUrl('/auth/create-account');
  }

  navToSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  navToPrivacy() {
    this.router.navigateByUrl('/home/privacy-policy');
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
