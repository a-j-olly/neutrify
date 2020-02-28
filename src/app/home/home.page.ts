import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { AuthModalComponent } from './../auth-modal/auth-modal.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homePage', {static: false}) homePage: IonContent;
  landingPageForm: FormGroup;

  constructor(
    public authService: AuthService,
    public modalController: ModalController,
    private router: Router,
  ) {}


  ngOnInit() {
    this.landingPageForm = new FormGroup({
      customerEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  async manageAuth(view) {
    const modal = await this.modalController.create({
      component: AuthModalComponent,
      cssClass: 'auth-modal',
      componentProps: {
        view
      }
    });

    return await modal.present();
  }

  signUp() {
    this.router.navigateByUrl('/signup');
  }

  navigateToTop() {
    this.homePage.scrollToTop();
  }
}
