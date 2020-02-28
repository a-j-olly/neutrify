import { SignUpService } from './../../services/sign-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.scss'],
})
export class ConfirmDetailsComponent implements OnInit {

  constructor(private signupService: SignUpService) { }

  ngOnInit() {}

}
