import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/mock-auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mustMatch } from 'src/app/helper/must-match.validator';
import { strong } from 'src/app/helper/strong.validator';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  signUpForm: FormGroup;
  passwordType = 'password';
  confirmPasswordType = 'password';
  invalidDetails = false;
  loading = false;
  signUpInterrupted = false;
  resetEmail: string;
  showConfirmSignUp = false;
  resentEmail: boolean;
  confirmSignUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private toastController: ToastController,
    private router: Router,
    private ga: GoogleAnalyticsService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    this.authService.setState('signUp');
    this.signUpForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      privacyConsent: [null, Validators.requiredTrue],
    }, {
      validators: [mustMatch('password', 'confirmPassword'), strong('password')]
    });
  }

  get sf() { return this.signUpForm.controls; }

  togglePasswordType() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  toggleConfirmPasswordType() {
    this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
  }

  async signUp() {
    this.loading = true;
    if (this.signUpForm.valid) {
      this.signUpForm.disable();
      const res = await this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password);

      if (res) {
        this.invalidDetails = false;
        this.initConfirmSignUp();
        this.loading = false;
        await this.presentToast('Please verify your email account.', 'secondary');
        this.signUpForm.enable();
        this.ga.eventEmitter('begin_sign_up', 'engagement', 'Begin signing up');
      } else {
        this.signUpForm.reset();
        this.invalidDetails = true;
        this.signUpForm.enable();
        this.loading = false;
        await this.presentToast('Unable to create a new account. Are you sure you don\'t already have an account?', 'danger');
      }
    }
  }

  initConfirmSignUp() {
    this.authService.setState('confirmSignUp');
    this.confirmSignUpForm = this.formBuilder.group({
      vefCode: [null, [Validators.required]]
    });
    this.showConfirmSignUp = true;
  }

  get cSF() { return this.confirmSignUpForm.controls; }

  async confirmSignUp() {
    this.loading = true;
    if (this.confirmSignUpForm.valid) {
      this.confirmSignUpForm.disable();
      const res = await this.authService.confirmSignUp(this.confirmSignUpForm.value.vefCode);

      if (res) {
        await this.presentToast('Successfully created your account. Please sign in.', 'primary');

        this.navToSignIn();
        this.invalidDetails = false;
        this.showConfirmSignUp = false;
        this.signUpForm.reset();
        this.confirmSignUpForm.reset();
        this.confirmSignUpForm.enable();
        this.loading = false;
        this.ga.eventEmitter('sign_up', 'engagement', 'Sign up');
      } else {
        this.invalidDetails = true;
        this.confirmSignUpForm.reset();
        this.confirmSignUpForm.enable();
        this.loading = false;
      }
    }
  }

  async resendEmail(email?: string) {
    this.loading = true;
    if (email) {
      this.signUpInterrupted = false;
    }

    const res = await this.authService.resendSignUp(email);
    if (res) {
      this.resentEmail = true;
      if (email) {
        this.signUpForm.reset();
        this.initConfirmSignUp();
      }
      this.loading = false;
    } else {
      await this.presentToast('Email could not be resent. Please check you have entered the correct email address.', 'danger');
      this.loading = false;
    }
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
    this.signUpForm.reset();
    this.router.navigateByUrl('/auth/sign-in');
  }

  openPage(url: string) {
    this.inAppBrowser.create(encodeURI(url), '_system');
  }
}


