import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helper/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Output() view: EventEmitter<string> = new EventEmitter();
  signUpForm: FormGroup;
  passwordType = 'password';
  confirmPasswordType = 'password';
  invalidDetails = false;
  buttonClicked = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.authService.setState('signUp');
    this.signUpForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.signUpForm.controls; }

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
        this.view.emit('confirmSignUp');
        this.buttonClicked = false;
      } else {
        this.invalidDetails = true;
        this.buttonClicked = false;
      }
    }
  }
}
