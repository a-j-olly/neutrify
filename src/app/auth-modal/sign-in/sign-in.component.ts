import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @Output() view: EventEmitter<string> = new EventEmitter();

  signInForm: FormGroup;
  passwordType = 'password';
  invalidDetails = false;
  buttonClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private modalController: ModalController,
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
    this.buttonClicked = true;
    if (this.signInForm.valid) {
      const res = await this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password);

      if (res === 'true') {
        this.invalidDetails = false;
        this.modalController.dismiss();
        this.router.navigate(['./app']);
      } else if (res === 'false') {
        this.invalidDetails = true;
        this.signInForm.reset();
        this.buttonClicked = false;
      } else {
        this.view.emit(res);
        this.buttonClicked = false;
      }
    }
  }
}
