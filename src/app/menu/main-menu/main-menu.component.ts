import { TutorialComponent } from './../../news-feed/tutorial/tutorial.component';
import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController, ToastController, AlertController, Platform, ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { KeychainService } from 'src/app/services/keychain.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public userEmail: string = this.authService.userEmail;
  private userEmail$: Subscription;

  public currentRoute: string = '';
  private currentRoute$: Subscription;

  private platformSource: string;
  private _darkMode: boolean;

  set darkMode(val: any) {
    if (val !== undefined) {
      this._darkMode = val;
    }
  }

  get darkMode() {
    return this._darkMode;
  }

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
    private ga: GoogleAnalyticsService,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController,
    private inAppBrowser: InAppBrowser,
    private keychainService: KeychainService,
    private platform: Platform,
    private statusBar: StatusBar,
    private themeDetection: ThemeDetection,
    private storage: Storage
  ) {
    this.platform.ready().then(async (readySource) => {
      this.platformSource = readySource;
      const displayDarkMode = await this.storage.get('neutrify_dark_mode');

      if (displayDarkMode !== undefined && displayDarkMode !== null) {
        this.darkMode = displayDarkMode;
      } else if (this.platformSource !== 'dom') {
        await this.detectTheme();
      } else {
        let media = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = media.matches;
      }
    });

    this.userEmail$ = this.authService.getUserEmail().subscribe((email: string) => this.userEmail = email);
    this.currentRoute$ = this.menuService.getCurrentRoute().subscribe((currentRoute: string) => this.currentRoute = currentRoute);
  }

  async toggleTheme(event) {
    this.darkMode = event.detail.checked;
    
    await this.hideMenus();

    document.body.classList.toggle('dark', this.darkMode);

    if (this.platformSource !== 'dom' && this.platform.is('ios')) {
      if (this.darkMode) {
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.styleDefault()
      }
    }

    this.storage.set('neutrify_dark_mode', this.darkMode);
  }

  // used to ensure this.darkmode in this component is correct at init 
  async detectTheme(): Promise<void> {
    return await this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
      if (res.value) {
        this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
          this.darkMode = res.value;
        }).catch((error: any) => console.error(error));
      }
    }).catch((error: any) => console.error(error));
  }

  async signOut() {
    await this.hideMenus();
    await this.presentAlertConfirmSignout();
  }

  async deleteAccount() {
    await this.hideMenus();
    await this.presentAlertConfirmDelete();
  }

  async navTo(path: string) {
    await this.hideMenus();
    await this.router.navigateByUrl(path);
  }

  async openPage(url: string) {
    await this.hideMenus();
    if (this.platformSource === 'dom' && url.startsWith('https://neutrify.news')) {
      const path = url.split('https://neutrify.news')[1];
      this.router.navigateByUrl(path);
    } else {
      if (this.platformSource === 'dom') {
        window.open(encodeURI(url), '_blank');
      } else {
        this.inAppBrowser.create(encodeURI(url), '_system');
      }
    }
  }

  public async openTutorial() {
    const popover = await this.modalController.create({
      component: TutorialComponent,
      showBackdrop: false,
      cssClass: 'tutorial-modal'
    });

    return await popover.present().then(() => this.storage.set('neutrify_done_tutorial', true));
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

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center',
      position: 'middle'
    });
    await toast.present();
  }
}
