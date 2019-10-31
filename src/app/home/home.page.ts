import { APIService } from '../API.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent } from '@ionic/angular';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homePage', {static: false}) homePage: IonContent;
  landingPageForm: FormGroup;

  constructor(private router: Router, private apiService: APIService,
              private userDataService: UserDataService) {}


  ngOnInit() {
    this.landingPageForm = new FormGroup({
      customerEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  async onSubmit() {
    const res = await this.apiService.CreateCustomer(
      this.landingPageForm.value,
    );

    this.userDataService.customerId = res.id;
    this.userDataService.customerEmail = res.customerEmail;

    this.router.navigate(['/under-construction']);
    this.landingPageForm.reset();
  }

  navigateToTop() {
    this.homePage.scrollToTop();
  }
}
