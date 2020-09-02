import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(
    private router: Router
  ) { }

  navToHome() {
    this.router.navigateByUrl('/home');
  }

  navToTC() {
    this.router.navigateByUrl('/home/terms-conditions');
  }

  navToPrivacy() {
    this.router.navigateByUrl('/home/privacy-policy');
  }

  navToSupport() {
    this.router.navigateByUrl('/home/support');
  }
}
