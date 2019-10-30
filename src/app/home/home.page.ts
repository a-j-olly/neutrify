import { APIService } from '../API.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homePage', {static: false}) homePage: IonContent;
  landingPageForm: FormGroup;

  constructor(private router: Router, private apiService: APIService) {}


  ngOnInit() {
    this.landingPageForm = new FormGroup({
      customerEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  async onSubmit() {
    console.log(this.landingPageForm.value);

    const res = await this.apiService.CreateCustomer(
      this.landingPageForm.value,
    );

    console.log('results: ', res);
    this.router.navigate(['/under-construction']);
  }

  navigateToTop() {
    this.homePage.scrollToTop();
  }
}
