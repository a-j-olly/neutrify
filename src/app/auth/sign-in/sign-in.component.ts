import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  passwordType = 'password';
  invalidDetails = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.authService.setState('signIn');
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.signInForm.controls; }

  togglePasswordType() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  async signIn() {
    this.loading = true;
    if (this.signInForm.valid) {
      const res = await this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password);

      if (res === 'true') {
        this.storage.get('ion_did_quick_start').then(async (result) => {
          if (result) {
            await this.router.navigateByUrl('/app', { replaceUrl: true });
          } else {
            await this.presentAlertConfirm();
          }
        });
        this.invalidDetails = false;
        this.loading = false;
        this.signInForm.reset();
      } else if (res === 'false') {
        this.invalidDetails = true;
        this.signInForm.reset();
        this.loading = false;
      } else {
        this.loading = false;
        this.signInForm.reset();
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
            await this.router.navigateByUrl('/app', { replaceUrl: true });
          }
        }, {
          text: 'Quick start',
          handler: async () => {
            await this.router.navigateByUrl('/quick-start', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
