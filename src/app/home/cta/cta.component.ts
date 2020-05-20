import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  navToSignUp() {
    this.router.navigateByUrl('/auth/create-account');
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
            this.router.navigateByUrl('/app');
          }
        }
      ]
    });

    await alert.present();
  }
}
