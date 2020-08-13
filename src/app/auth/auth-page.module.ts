import { SignInComponent } from './sign-in/sign-in.component';
import { AuthPage } from './auth-page.page';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInAsGuestComponent } from './sign-in-as-guest/sign-in-as-guest.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: '', redirectTo: '/auth/create-account', pathMatch: 'full' },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthPage,
    CreateAccountComponent,
    SignInComponent,
    ResetPasswordComponent,
    SignInAsGuestComponent
  ]
})
export class AuthPageModule {}
