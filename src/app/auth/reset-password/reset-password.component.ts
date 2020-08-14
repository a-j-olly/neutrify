import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../helper/must-match.validator';
import { Strong } from 'src/app/helper/strong.validator';
import { KeychainService } from 'src/app/services/keychain.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  passwordType = 'password';
  confirmPasswordType = 'password';
  invalidEmailDetails = false;
  loading = false;
  invalidCode = false;
  showSubmit = false;
  private platformSource;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService,
    private platform: Platform,
    private keychainService: KeychainService,
  ) {
    this.platform.ready().then(readySource => this.platformSource = readySource);
  }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      vefCode: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
    }, {
      validators: [MustMatch('password', 'confirmPassword'), Strong('password')]
    });
  }

  get f() { return this.resetPasswordForm.controls; }

  async resetPassword() {
    this.loading = true;
    if (this.f.email.valid) {
      this.f.email.disable();
      const res = await this.authService.resetPassword(this.f.email.value);
      if (res) {
        this.showSubmit = true;
        this.f.email.enable();
        this.loading = false;
        this.ga.eventEmitter('begin_reset_password', 'engagement', 'Begin resetting password');
      } else {
        this.invalidEmailDetails = true;
        this.f.email.reset();
        this.f.email.enable();
        this.loading = false;
      }
    }
  }

  async resetPasswordSubmit() {
    const vefCode = this.f.vefCode.value, email = this.f.email.value, password = this.f.password.value;
    this.loading = true;

    if (this.showSubmit && !this.invalidEmailDetails && this.f.vefCode.valid && this.f.password.valid && this.f.confirmPassword.valid) {
      this.resetPasswordForm.disable();
      const res = await this.authService.resetPasswordSubmit(vefCode, password);
      
      if (res) {
        if (this.platform.is('ios') && this.platformSource !== 'dom') {
          
          try {
            this.keychainService.setKeychainPassword(email, password);
          } catch (err) {
            console.log('Did/could not add the password to the keychain. Service returned this error: ', err);

            if (err.code === 'errSecDuplicateItem') {

              try {
                await this.keychainService.replaceKeychainPassword(email, password);
              } catch (err) {
                console.log('Did/could not replace the password on the keychain. Service returned this error: ', err);
              }
            } else {
              this.presentToast('Did/could not add the password to the keychain.', 'danger');
            }
          }
        }

        this.navToSignIn();
        this.resetPasswordForm.reset();
        this.showSubmit = false;
        this.resetPasswordForm.enable();
        this.loading = false;
        await this.presentToast('Successfully reset your password. Please sign in.', 'primary');
        this.ga.eventEmitter('reset_password', 'engagement', 'Reset password');
      } else {
        this.invalidCode = true;
        this.f.vefCode.reset();
        this.f.password.reset();
        this.f.confirmPassword.reset();
        this.resetPasswordForm.enable();
        this.loading = false;
      }
    }
  }

  togglePasswordType() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  toggleConfirmPasswordType() {
    this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
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

  navToSignIn() {
    this.resetPasswordForm.reset();
    this.router.navigateByUrl('/auth/sign-in');
  }
}
