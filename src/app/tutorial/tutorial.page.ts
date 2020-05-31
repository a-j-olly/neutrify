import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Countries } from './../model/country-options';
import LocaleCode from 'locale-code';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  public localCountry: string;
  public tutorialForm: FormGroup;
  public countryOptions = Countries;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.localCountry = LocaleCode.getCountryName(this.getLang());
    this.tutorialForm = this.formBuilder.group({
      nationalNews: [false],
      selectCountry: [{ value: this.localCountry, disabled: true }]
    });
  }

  get f() { return this.tutorialForm.controls; }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        // this.router.navigateByUrl('/app', { replaceUrl: true });
      }
    });
  }

  getLang() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  }

  toggleNews(event) {
    if (event.detail.checked) {
      this.f.selectCountry.enable();
    } else {
      this.f.selectCountry.disable();
    }
  }

  selectChanged(event) {
    this.localCountry = event.target.value;
  }

  submit() {

  }
}
