import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  backToApp() {
    this.router.navigateByUrl('/app');
    this.menu.enable(true, 'filterMenu');
  }

}
