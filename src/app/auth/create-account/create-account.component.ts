import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SignUpService } from './../../services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/helper/must-match.validator';
import { Strong } from 'src/app/helper/strong.validator';
import { ToastController } from '@ionic/angular';

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
  buttonClicked = false;

  signUpInterrupted = false;
  resetEmail: string;
  showConfirmSignUp = false;
  resentEmail: boolean;
  confirmSignUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private toastController: ToastController,
    private signUpService: SignUpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.setState('signUp');
    this.signUpForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      // resetEmail: [null, [Validators.email]]
    }, {
      validators: [MustMatch('password', 'confirmPassword'), Strong('password')]
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
    this.buttonClicked = true;
    if (this.signUpForm.valid) {
      const res = await this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password);

      if (res) {
        this.invalidDetails = false;
        this.signUpForm.reset();
        this.buttonClicked = false;
        this.initConfirmSignUp();
      } else {
        this.invalidDetails = true;
        this.buttonClicked = false;
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
    if (this.confirmSignUpForm.valid) {
      const res = await this.authService.confirmSignUp(this.confirmSignUpForm.value.vefCode);

      if (res) {
        this.invalidDetails = false;
        this.confirmSignUpForm.reset();
        this.signUpService.createAccountComplete = true;
        this.navToSignIn();
        await this.presentToast('Successfully created your account. Please sign in.', 'primary');
      } else {
        this.invalidDetails = true;
      }
    }
  }

  async resendEmail(email?: string) {
    this.buttonClicked = true;
    if (email) {
      this.signUpInterrupted = false;
    }

    const res = await this.authService.resendSignUp(email);
    if (res) {
      this.resentEmail = true;
      this.buttonClicked = false;
      if (email) {
        this.signUpForm.reset();
        this.initConfirmSignUp();
      }
    } else {
      await this.presentToast('Email could not be resent. Please check you have entered the correct email address.', 'danger');
      this.buttonClicked = false;
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
    this.router.navigateByUrl('/auth/sign-in');
  }
}


