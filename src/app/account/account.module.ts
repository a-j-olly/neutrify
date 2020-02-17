import { SubscriptionComponent } from './subscription/subscription.component';
import { BillingComponent } from './billing/billing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      { path: '', redirectTo: '/app/account/subscription', pathMatch: 'full'},
      { path: 'billing', component: BillingComponent},
      { path: 'subscription', component: SubscriptionComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountPage, BillingComponent, SubscriptionComponent]
})
export class AccountPageModule {}
