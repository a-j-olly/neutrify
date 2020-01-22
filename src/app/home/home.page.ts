import { AuthService } from './../services/auth.service';
import { AuthModalComponent } from './../auth-modal/auth-modal.component';
import { APIService } from './../services/neutrify-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homePage', {static: false}) homePage: IonContent;
  landingPageForm: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private userDataService: UserDataService, public modalController: ModalController) {}


  ngOnInit() {
    this.landingPageForm = new FormGroup({
      customerEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  async manageAuth(view) {
    // this.authService.setState('signUp');

    const modal = await this.modalController.create({
      component: AuthModalComponent,
      cssClass: 'auth-modal',
      componentProps: {
        view
      }
    });

    return await modal.present();
    // const res = await this.apiService.CreateCustomer(
    //   this.landingPageForm.value,
    // );

    // this.userDataService.customerId = res.id;
    // this.userDataService.customerEmail = res.customerEmail;

    // this.router.navigate([]);
    // this.landingPageForm.reset();
  }

  navigateToTop() {
    this.homePage.scrollToTop();
  }
}
