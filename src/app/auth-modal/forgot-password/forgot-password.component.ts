import { AuthService } from './../../services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../helper/must-match.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() view: EventEmitter<string> = new EventEmitter();

  forgotPasswordForm: FormGroup;
  passwordType = 'password';
  confirmPasswordType = 'password';
  invalidEmailDetails = false;
  buttonClicked = false;
  invalidCode = false;
  sentResetEmail = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setState('forgotPassword');
    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      vefCode: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  async forgotPassword() {
    this.buttonClicked = true;
    if (this.f.email.valid) {
      const res = await this.authService.forgotPassword(this.f.email.value);
      if (res) {
        this.sentResetEmail = true;
        this.buttonClicked = false;
      } else {
        this.invalidEmailDetails = true;
        this.buttonClicked = false;
      }
    }
  }

  changeView(event) {
    this.view.emit(event);
  }

  async forgotPasswordSubmit() {
    this.buttonClicked = true;
    if (this.sentResetEmail && !this.invalidEmailDetails) {
      if (this.f.password.valid && this.f.confirmPassword.valid && this.f.vefCode.valid) {
        const res = await this.authService.forgotPasswordSubmit(this.f.vefCode.value, this.f.password.value);
        if (res) {
          this.buttonClicked = false;
          this.forgotPasswordForm.reset();
          this.view.emit('signIn');
        } else {
          this.invalidCode = true;
          this.buttonClicked = false;
        }
      }
    }
  }
}
