import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../helper/must-match.validator';
import { Strong } from 'src/app/helper/strong.validator';

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
  buttonClicked = false;
  invalidCode = false;
  sentResetEmail = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
    this.authService.setState('resetPassword');
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
    this.buttonClicked = true;
    if (this.f.email.valid) {
      const res = await this.authService.resetPassword(this.f.email.value);
      if (res) {
        this.sentResetEmail = true;
        this.buttonClicked = false;
      } else {
        this.invalidEmailDetails = true;
        this.buttonClicked = false;
      }
    }
  }

  async resetPasswordSubmit() {
    this.buttonClicked = true;
    if (this.sentResetEmail && !this.invalidEmailDetails) {
      if (this.f.password.valid && this.f.confirmPassword.valid && this.f.vefCode.valid) {
        const res = await this.authService.resetPasswordSubmit(this.f.vefCode.value, this.f.password.value);
        if (res) {
          this.buttonClicked = false;
          this.resetPasswordForm.reset();
          this.navToSignIn();
          await this.presentToast('Successfully reset your password. Please sign in.', 'primary');
        } else {
          this.invalidCode = true;
          this.buttonClicked = false;
        }
      }
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
