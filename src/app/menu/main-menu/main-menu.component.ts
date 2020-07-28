import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController, ToastController, AlertController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { KeychainService } from 'src/app/services/keychain.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public userEmail: string;
  private platformSource: string;

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
    private platform: Platform
  ) {}

  ionViewWillEnter() {
    this.userEmail = this.authService.userEmail;
    this.platform.ready().then(readySource => this.platformSource = readySource);
  }

  async signOut() {
    await this.disableMenus();
    await this.presentAlertConfirmSignout();
  }

  async deleteAccount() {
    await this.disableMenus();
    await this.presentAlertConfirmDelete();
  }

  async goToHelp() {
    await this.disableMenus();
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
          cssClass: 'secondary',
          handler: async () => {
            await this.enableMenus();
          }
        }, {
          text: 'Sign out',
          handler: async () => {
            const res = await this.authService.signOut();

            if (res) {
              this.router.navigateByUrl('/auth/sign-in', { replaceUrl: true });
              this.ga.eventEmitter('logout', 'engagement', 'Logout');
            } else {
              await this.enableMenus();
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
          cssClass: 'secondary',
          handler: async () => {
            await this.enableMenus();
          }
        }, {
          text: 'Delete',
          handler: async (alertData) => {
            if (alertData.delete && alertData.delete === 'DELETE') {
              const res = await this.authService.deleteAccount();

              if (res) {

                if (this.platform.is('ios') && this.platformSource !== 'dom') {
                  try {
                    this.keychainService.removeKeychainPassword(this.userEmail);
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
                await this.enableMenus();
                await this.presentToast('Could not delete your account. Please contact customer support.', 'danger');
              }
              
              this.router.navigateByUrl('/auth/create-account', { replaceUrl: true });
            } else {
              await this.enableMenus();
              await this.presentToast('You must enter DELETE to confirm you want to delete your account.', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async disableMenus() {
    this.menuService.closeMenu();
    await this.menu.enable(false, 'filterMenu');
    await this.menu.enable(false, 'mainMenu');
    await this.menu.swipeGesture(false, 'filterMenu');
    await this.menu.swipeGesture(false, 'mainMenu');
  }

  async enableMenus() {
    await this.menu.enable(true, 'filterMenu');
    await this.menu.enable(true, 'mainMenu');
    await this.menu.swipeGesture(true, 'filterMenu');
    await this.menu.swipeGesture(true, 'mainMenu');
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
