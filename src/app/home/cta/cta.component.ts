import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  public showPrivacyNotice = true;
  public releaseToggle = environment.readyToRelease;
  private platformSource: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private platform: Platform,
    private inAppBrowser: InAppBrowser,
    private ga: GoogleAnalyticsService
  ) {
    this.platform.ready().then((readySource) => {
      this.platformSource = readySource;
    });
  }

  public ionViewWillEnter() {
    this.storage.get('neutrify_accepted_privacy').then(async (result) => {
      if (result) {
        this.showPrivacyNotice = false;
      } else {
        this.showPrivacyNotice = this.platformSource === 'dom';
      }
    });
  }

  public acceptedPrivacyNotice() {
    this.storage.set('neutrify_accepted_privacy', true);
    this.showPrivacyNotice = false;
  }

  public navTo(path: string) {
    if (path === '/app') {
      this.ga.eventEmitter('guest_login', 'engagement', 'Guest login');
    }

    this.router.navigateByUrl(path);
  }

  public async presentAlertConfirm() {
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

  public openGoogleStore() {
    this.openPage(environment.googleStoreUri);
  }

  public openPage(url: string) {
    this.inAppBrowser.create(encodeURI(url), '_system');
  }
}
