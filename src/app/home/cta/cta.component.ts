import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  public showPrivacyNotice = true;
  private platformSource: string;
  public releaseToggle = environment.readyToRelease;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private platform: Platform,
    private inAppBrowser: InAppBrowser
  ) {
    this.platform.ready().then((readySource) => {
      this.platformSource = readySource;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_accepted_privacy').then(async (result) => {
      if (result) {
        this.showPrivacyNotice = false;
      } else {
        this.showPrivacyNotice = this.platformSource === 'dom';
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

  openAppleStore() {
    this.openPage(environment.appleStoreUri);
  }

  openGoogleStore() {
    this.openPage(environment.googleStoreUri);
  }

  openPage(url: string) {
    this.inAppBrowser.create(encodeURI(url), '_system');
  }
}
