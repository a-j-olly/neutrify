import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PWAUpdaterService {

  constructor(
    private readonly updates: SwUpdate,
    private alertController: AlertController
  ) {
    this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  private async showAppUpdateAlert() {
    await this.alertController.create({
      header: 'Update Available',
      message: 'Tap \'OK\' to update the app.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
      }, {
        text: 'OK',
        handler: () => {
          this.doAppUpdate();
        },
        cssClass: 'primary'
      }]
    });
  }

  private doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
