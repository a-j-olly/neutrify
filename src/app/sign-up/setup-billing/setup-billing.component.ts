import { SignUpService } from './../../services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-setup-billing',
  templateUrl: './setup-billing.component.html',
  styleUrls: ['./setup-billing.component.scss'],
})
export class SetupBillingComponent implements OnInit {

  constructor(private signupService: SignUpService) { }

  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://js.stripe.com/v3/';
      window.document.body.appendChild(s);
    }
  }

  async goToCheckout() {
    const stripe = Stripe('pk_test_gzzdz8gjiV9GxEh653qELHNr00EvMJyHF2');
    try {
      const res = await stripe.redirectToCheckout({
        items: [{
          plan: environment.stripePrimaryProduct,
          quantity: 1,
        }],
        successUrl: `${environment.neutrifyUrl}/signup/confirm-details?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${environment.neutrifyUrl}/signup/setup-billing`,
        customerEmail: 'customer@example.com',
        client_reference_id: 'client reference id'
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }

  }

}
