import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  @ViewChild('page') page: IonContent;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSlideChange(event) {
    this.page.scrollToTop();
  }
}
