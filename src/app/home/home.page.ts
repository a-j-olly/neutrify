import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}


  ngOnInit() {
  }

  navToSignUp() {
    this.router.navigateByUrl('/auth');
  }

  navToSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }
}
