import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from '../auth-modal/forgot-password/forgot-password.component';
import { ConfirmSignUpComponent } from '../auth-modal/confirm-sign-up/confirm-sign-up.component';
import { SignUpComponent } from '../auth-modal/sign-up/sign-up.component';
import { SignInComponent } from '../auth-modal/sign-in/sign-in.component';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    AuthModalComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmSignUpComponent,
    ForgotPasswordComponent
  ],
})
export class HomePageModule {}
