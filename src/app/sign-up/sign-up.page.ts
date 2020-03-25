import { Router } from '@angular/router';
import { SignUpService } from './../services/sign-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    public signupService: SignUpService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigateByUrl('home');
  }
}
