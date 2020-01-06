import { AuthModalComponent } from './../../auth-modal/auth-modal.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: AuthService, public modalController: ModalController) { }

  ngOnInit() {}

  async manageAuth() {
    const modal = await this.modalController.create({
      component: AuthModalComponent
    });

    return await modal.present();
  }
}
