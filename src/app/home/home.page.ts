import { MenuController, AlertController, IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('homeTabs') tabs: IonTabs;
  private currentTab: string;
  public showHomeButton = true;

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
    this.router.navigateByUrl('/home');
  }

  private getCurrentTab() {
    return this.tabs.getSelected();
  }

  public onTabChange() {
    this.currentTab = this.getCurrentTab();
    this.showHomeButton = this.currentTab !== 'welcome';
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
