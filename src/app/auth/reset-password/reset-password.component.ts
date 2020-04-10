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
  loading = false;
  invalidCode = false;
  showSubmit = false;

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
    this.loading = true;
    if (this.f.email.valid) {
      const res = await this.authService.resetPassword(this.f.email.value);
      if (res) {
        this.showSubmit = true;
        this.loading = false;
      } else {
        this.invalidEmailDetails = true;
        this.loading = false;
      }
    }
  }

  async resetPasswordSubmit() {
    this.loading = true;
    if (this.showSubmit && !this.invalidEmailDetails && this.resetPasswordForm.valid) {
      const res = await this.authService.resetPasswordSubmit(this.f.vefCode.value, this.f.password.value);
      if (res) {
        this.resetPasswordForm.reset();
        this.showSubmit = false;
        this.navToSignIn();
        this.loading = false;
        await this.presentToast('Successfully reset your password. Please sign in.', 'primary');
      } else {
        console.log('reset password failed. this.showSubmit', this.showSubmit, '!this.invalidEmailDetails',
        !this.invalidEmailDetails, 'this.resetPasswordForm.valid', this.resetPasswordForm.valid);
        this.invalidCode = true;
        this.resetPasswordForm.reset();
        this.loading = false;
      }
    } else {
      console.log('failed to submit. this.showSubmit', this.showSubmit, '!this.invalidEmailDetails',
       !this.invalidEmailDetails, 'this.resetPasswordForm.valid', this.resetPasswordForm.valid);
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
    this.router.navigateByUrl('/auth/sign-in');
  }
}
