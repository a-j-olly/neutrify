import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit {
  @Input() view: string;

  constructor() { }

  ngOnInit() {
  }

  changeView(event) {
    this.view = event;
  }
}
