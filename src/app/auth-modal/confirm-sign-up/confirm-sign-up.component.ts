import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-sign-up',
  templateUrl: './confirm-sign-up.component.html',
  styleUrls: ['./confirm-sign-up.component.scss'],
})
export class ConfirmSignUpComponent implements OnInit {
  @Output() view: EventEmitter<string> = new EventEmitter();

  confirmSignUpForm: FormGroup;
  invalidDetails = false;
  resentEmail: boolean;
  buttonClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.authService.setState('confirmSignUp');
    this.confirmSignUpForm = this.formBuilder.group({
      vefCode: [null, []]
    });
  }

  get f() { return this.confirmSignUpForm.controls; }

  async confirmSignUp() {
    if (this.confirmSignUpForm.valid) {
      const res = await this.authService.confirmSignUp(this.confirmSignUpForm.value.vefCode);

      if (res) {
        this.invalidDetails = false;
        this.confirmSignUpForm.reset();
        this.view.emit('signIn');
        await this.presentToast('Account creation complete, please sign in.', 'primary');
      } else {
        this.invalidDetails = true;
      }
    }
  }

  async resendEmail() {
    this.buttonClicked = true;
    const res = await this.authService.resendSignUp();
    if (res) {
      this.resentEmail = true;
      this.buttonClicked = false;
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
}
