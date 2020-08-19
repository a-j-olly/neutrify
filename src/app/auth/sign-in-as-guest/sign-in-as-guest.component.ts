import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-sign-in-as-guest',
  templateUrl: './sign-in-as-guest.component.html',
  styleUrls: ['./sign-in-as-guest.component.scss'],
})
export class SignInAsGuestComponent {

  constructor(
    private router: Router,
    private ga: GoogleAnalyticsService
  ) { }

  public async navToApp() {
    this.ga.eventEmitter('guest_login', 'engagement', 'Guest login');
    await this.router.navigateByUrl('app', { replaceUrl: true });
  }
}
