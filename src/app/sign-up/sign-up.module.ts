import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage,
    children: [
      { path: '', redirectTo: '/signup/create-account', pathMatch: 'full' },
      { path: 'create-account', component: CreateAccountComponent },
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
  declarations: [SignUpPage, CreateAccountComponent]
})
export class SignUpPageModule {}
