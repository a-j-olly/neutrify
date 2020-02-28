import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { SetupBillingComponent } from './setup-billing/setup-billing.component';
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
      // { path: 'setup-billing', component: SetupBillingComponent },
      // { path: 'confirm-details', component: ConfirmDetailsComponent }
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
  declarations: [SignUpPage, CreateAccountComponent, SetupBillingComponent, ConfirmDetailsComponent]
})
export class SignUpPageModule {}
