import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-as-guest',
  templateUrl: './sign-in-as-guest.component.html',
  styleUrls: ['./sign-in-as-guest.component.scss'],
})
export class SignInAsGuestComponent {

  constructor(private router: Router) { }

  public async navToApp() {
    await this.router.navigateByUrl('app', { replaceUrl: true });
  }
}
