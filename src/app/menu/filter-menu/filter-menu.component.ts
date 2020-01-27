import { APIService } from './../../services/neutrify-api.service';
import { AuthService } from './../../services/auth.service';
import { FilterService } from '../../services/filter.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent {
  public toneUserOption;
  public qualityUserOption;
  public sourcesUserOption;
  public topicsUserOption;
  public keywordsUserOption;

  constructor(
    private filterService: FilterService,
    private neutrifyAPI: APIService,
    private authService: AuthService,
    private toastController: ToastController
    ) {
      console.log('init filter menu');
      this.initOptions();
    }

  initOptions() {
    const filterOptions = this.filterService.filterOptions;
    this.toneUserOption = {
      value: {
        lower: filterOptions.toneLowerRange,
        upper: filterOptions.toneUpperRange
      }
    };

    this.qualityUserOption = {
      value: {
        lower: filterOptions.qualityLowerRange,
        upper: filterOptions.qualityUpperRange
      }
    };

    this.sourcesUserOption = {
      include: filterOptions.sourcesToInclude,
      exclude: filterOptions.sourcesToExclude
    };

    this.topicsUserOption = {
      include: filterOptions.topicsToInclude,
      exclude: filterOptions.topicsToExclude
    };

    this.keywordsUserOption = {
      include: filterOptions.keywordsToInclude,
      exclude: filterOptions.keywordsToExclude
    };
  }

  async onFilterChange(event) {
    console.log('filters have changed: ', event);
    switch (event.name) {
      case 'Tone':
        this.toneUserOption = event;
        break;
      case 'Quality':
        this.qualityUserOption = event;
        break;
      case 'Sources':
        this.sourcesUserOption = event;
        break;
      case 'Topics':
        this.topicsUserOption = event;
        break;
      case 'Keywords':
        this.keywordsUserOption = event;
        break;
      default:
        throw new Error(`Unknown event: ${JSON.stringify(event)}`);
    }

    const filterOptions: any = this.filterService.buildFilterOptions({
      toneUserOption: this.toneUserOption,
      qualityUserOption: this.qualityUserOption,
      sourcesUserOption: this.sourcesUserOption,
      topicsUserOption: this.topicsUserOption,
      keywordsUserOption: this.keywordsUserOption
    });

    await this.filterService.updateFilterOptions(filterOptions);
  }

  async loadFilters() {
    const loadedConfig = await this.neutrifyAPI.ConfigByOwner(this.authService.user.username, null, null , 1);
    await this.filterService.updateFilterOptions(loadedConfig.items[0]);
    this.initOptions();
    await this.presentToast('Your filters have been loaded.', 'primary');
  }

  async saveFilters() {
    try {
      console.log('filter to be saved: ', this.filterService.filterOptions);
      await this.neutrifyAPI.UpdateConfig(this.filterService.filterOptions);
      await this.presentToast('Your filters have been saved.', 'primary');
    } catch (e) {
      console.log('Could not save filters. Service returned this error: ', e);
    }
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}
