import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  passwordType = 'password';
  invalidDetails: boolean = false;
  loading: boolean = false;
  showAlert: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private ga: GoogleAnalyticsService
  ) { 
  }

  ngOnInit() {
    this.authService.setState('signIn');
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.storage.get('ion_did_quick_start').then(async (result) => {
      this.showAlert = !result;
    });
  }

  get f() { return this.signInForm.controls; }

  togglePasswordType() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  async signIn() {
    this.loading = true;
    if (this.signInForm.valid) {
      this.signInForm.disable();
      const res = await this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password);

      if (res === 'true') {
        if (this.showAlert) {
          await this.presentAlertConfirm();
        } else {
          await this.router.navigateByUrl('/app', { replaceUrl: true });
        }

        this.invalidDetails = false;
        this.signInForm.reset();
        this.signInForm.enable();
        this.loading = false;
      } else {
        this.invalidDetails = true;
        this.signInForm.controls.password.reset();
        this.signInForm.enable();
        this.loading = false;
      }
    }
  }

  navToSignUp() {
    this.signInForm.reset();
    this.router.navigateByUrl('/auth/create-account');
  }

  navToResetPassword() {
    this.signInForm.reset();
    this.router.navigateByUrl('/auth/reset-password');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Would you like to set some starting filters? If not you will go straight to the app.',
      buttons: [
        {
          text: 'No thanks',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            this.storage.set('ion_did_quick_start', true);
            await this.router.navigateByUrl('/app', { replaceUrl: true });
          }
        }, {
          text: 'Quick start',
          handler: async () => {
            this.ga.eventEmitter('quick_start', 'engagement', 'Quick start');
            await this.router.navigateByUrl('/app/quick-start', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
