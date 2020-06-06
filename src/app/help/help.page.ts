import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';
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
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    setTimeout(() => {
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(false, 'mainMenu');
    }, 200);
  }

  onSlideChange(event) {
    this.page.scrollToTop();
  }

  backToApp() {
    this.router.navigateByUrl('/app', { replaceUrl: true });
  }
}
