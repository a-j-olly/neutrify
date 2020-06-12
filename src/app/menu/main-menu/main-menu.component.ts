import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  userEmail: string;
  readySource: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private menu: MenuController,
    private ga: GoogleAnalyticsService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.userEmail = this.authService.userEmail;
  }

  async signOut() {
    this.menuService.closeMenu();
    await this.menu.enable(false, 'filterMenu');
    await this.menu.enable(false, 'mainMenu');
    await this.presentAlertConfirm();
  }

  async goToHelp() {
    this.menuService.closeMenu();
    await this.menu.enable(false, 'filterMenu');
    await this.menu.enable(false, 'mainMenu');
    await this.router.navigateByUrl('/app/help');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'You are about to sign out. Would you like to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await this.menu.enable(true, 'filterMenu');
            await this.menu.enable(true, 'mainMenu');
          }
        }, {
          text: 'Sign Out',
          handler: async () => {
            const res = await this.authService.signOut();

            if (res) {
              this.ga.eventEmitter('logout', 'engagement', 'Logout');
              this.router.navigateByUrl('/auth/sign-in', { replaceUrl: true });
            } else {
              await this.menu.enable(true, 'filterMenu');
              await this.menu.enable(true, 'mainMenu');
              this.presentToast('Could not sign you out. Please try again.', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
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
