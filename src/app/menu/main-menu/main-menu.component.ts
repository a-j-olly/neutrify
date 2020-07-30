import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController, ToastController, AlertController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { KeychainService } from 'src/app/services/keychain.service';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  public userEmail: string;
  private platformSource: string;
  public darkMode: boolean

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
    private ga: GoogleAnalyticsService,
    private alertController: AlertController,
    private toastController: ToastController,
    private inAppBrowser: InAppBrowser,
    private keychainService: KeychainService,
    private platform: Platform,
    private themeDetection: ThemeDetection
  ) {
    if (this.platformSource !== 'dom' && this.platform.is('android')) {

        this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
          if (res.value) {
            this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
              this.darkMode = res.value;
            }).catch((error: any) => console.error(error));
          }
        }).catch((error: any) => console.error(error));
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  ngOnInit() {
    this.userEmail = this.authService.userEmail;
    this.platform.ready().then(readySource => this.platformSource = readySource);
  }

  async toggleTheme() {
    await this.hideMenus();
    document.body.classList.toggle('dark', this.darkMode);
  }

  async signOut() {
    await this.hideMenus();
    await this.presentAlertConfirmSignout();
  }

  async deleteAccount() {
    await this.hideMenus();
    await this.presentAlertConfirmDelete();
  }

  async goToHelp() {
    await this.hideMenus();
    await this.router.navigateByUrl('/app/help');
  }

  async presentAlertConfirmSignout() {
    const alert = await this.alertController.create({
      message: 'You are about to sign out. Would you like to continue?',
      header: 'Sign out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Sign out',
          handler: async () => {
            const res = await this.authService.signOut();

            if (res) {
              this.router.navigateByUrl('/auth/sign-in', { replaceUrl: true });
              this.ga.eventEmitter('logout', 'engagement', 'Logout');
            } else {
              this.presentToast('Could not sign you out. Please try again.', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Delete Account?',
      message: 'You are about to delete your account. This cannot be reversed! Enter DELETE below to confirm your decision.',
      inputs: [
        {
          name: 'delete',
          type: 'text',
          id: 'delete-id',
          placeholder: 'Enter "DELETE" here'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Delete',
          handler: async (alertData) => {
            if (alertData.delete && alertData.delete === 'DELETE') {
              const email = this.userEmail;
              const res = await this.authService.deleteAccount();

              if (res) {

                if (this.platform.is('ios') && this.platformSource !== 'dom') {
                  try {
                    this.keychainService.removeKeychainPassword(email);
                  } catch (err) {
                    if (err.code === 'errSecItemNotFound') {
                      // do nothing
                    } else {
                      await this.presentToast('Could not remove password from Keychain. Try to do so manually.', 'danger');
                    }
                  }
                }

                this.ga.eventEmitter('delete', 'engagement', 'Delete');
                await this.presentToast('Successfully deleted your account. Thank you for trying Neutrify.', 'primary');
              } else {
                await this.presentToast('Could not delete your account. Please contact customer support.', 'danger');
              }
              
              this.router.navigateByUrl('/auth/create-account', { replaceUrl: true });
            } else {
              await this.presentToast('You must enter DELETE to confirm you want to delete your account.', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async hideMenus() {
    this.menuService.closeMenu();
    await this.menu.close('filterMenu');
    await this.menu.close('mainMenu');
  }

  async openPage(url: string) {
    this.inAppBrowser.create(encodeURI(url), '_system');
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center',
      position: 'middle'
    });
    toast.present();
  }
}
