import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // get user details e.g.
    // free trial end date
    // subscription payment day
    // length of subscription
    // subscription start date
    // monthly cost
  }

  async startSubscription() {
    // account for free subscription
    // inform stripe
    // update database
  }

  async cancelSubscription() {
    // inform stripe
    // update database
  }

}
