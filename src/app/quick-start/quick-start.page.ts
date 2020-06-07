import { AuthService } from '../services/auth.service';
import { FilterService } from '../services/filter.service';
import { APIService, UpdateConfigInput } from '../services/neutrify-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Countries } from '../model/country-options';
import { TopicList } from '../model/topic-list';

import LocaleCode from 'locale-code';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './quick-start.page.html',
  styleUrls: ['./quick-start.page.scss'],
})
export class QuickStartPage implements OnInit {
  public localCountry: string;
  public tutorialForm: FormGroup;
  public countryOptions = Countries;
  public topicList = TopicList;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage,
    private toastController: ToastController,
    private neutrifyAPI: APIService,
    private filterService: FilterService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.localCountry = LocaleCode.getCountryName(this.getLang());
    this.tutorialForm = this.formBuilder.group({
      nationalNews: [false],
      selectCountry: [{ value: this.localCountry, disabled: true }],
      positiveNews: [false],
      topicsToExclude: [[]]
    });
  }

  get f() { return this.tutorialForm.controls; }

  getLang() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  }

  toggleNationalNews(event) {
    if (event.detail.checked) {
      this.f.selectCountry.enable();
    } else {
      this.f.selectCountry.disable();
    }
  }

  async localCountryChanged(event) {
    this.localCountry = event.target.value;
  }


  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center',
      position: 'middle'
    });
    toast.present();
  }

  async submit() {
    this.loading = true;
    let updatedFilters = false;
    const updatedFilterOptions = Object.assign(this.filterService.filterOptions);
    if (this.f.nationalNews.value && this.f.selectCountry.value) {
      updatedFilterOptions.locationsToInclude.push(this.f.selectCountry.value.toLowerCase());
      updatedFilters = true;
    }

    if (this.f.positiveNews.value) {
      updatedFilterOptions.toneLowerRange = 0;
      updatedFilterOptions.toneUpperRange = 1;
      updatedFilters = true;
    }

    if (this.f.topicsToExclude.value && this.f.topicsToExclude.value.length) {
      const topicsToExclude = this.f.topicsToExclude.value;

      if (typeof updatedFilterOptions.topicsToExclude === 'string') {
        updatedFilterOptions.topicsToExclude = JSON.parse(updatedFilterOptions.topicsToExclude);

        topicsToExclude.forEach((topic) => {
          updatedFilterOptions.topicsToExclude[topic.toLowerCase()] = [topic];
        });
      } else {
        updatedFilterOptions.topicsToExclude.push(...this.f.topicsToExclude.value);
        topicsToExclude.forEach((topic) => {
          this.filterService.topicsUserOption.exclude[topic.toLowerCase()] = [topic];
        });
      }
      updatedFilters = true;
    }

    if (updatedFilters) {
      this.filterService.updateFilterOptions(updatedFilterOptions);
      try {
        const reqBody: UpdateConfigInput = this.filterService.marshalRequest();
        await this.neutrifyAPI.UpdateConfig(reqBody);
      } catch (e) {
        console.log('Could not save filters. Service returned this error: ', e);
      }
    }

    this.storage.set('ion_did_quick_start', true);
    this.router.navigateByUrl('/app', { replaceUrl: true });
    this.loading = false;
  }
}
