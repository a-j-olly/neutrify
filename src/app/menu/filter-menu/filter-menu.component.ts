import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { APIService, UpdateConfigInput } from './../../services/neutrify-api.service';
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
  public sourcesUserOption;
  public topicsUserOption;
  public keywordsUserOption;
  public locationsUserOption;

  constructor(
    private filterService: FilterService,
    private neutrifyAPI: APIService,
    public authService: AuthService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService
    ) {
      this.initOptions();
    }

  async initOptions() {
    const filterOptions = this.filterService.filterOptions;

    this.toneUserOption = {
      value: {
        lower: filterOptions.toneLowerRange,
        upper: filterOptions.toneUpperRange
      }
    };

    this.sourcesUserOption = {
      include: filterOptions.sourcesToInclude,
      exclude: filterOptions.sourcesToExclude
    };

    this.keywordsUserOption = {
      include: filterOptions.keywordsToInclude,
      exclude: filterOptions.keywordsToExclude
    };

    this.locationsUserOption = {
      include: filterOptions.locationsToInclude,
      exclude: filterOptions.locationsToExclude
    };

    this.topicsUserOption = {};
    this.topicsUserOption['include'] = this.filterService.topicsUserOption.include;
    this.topicsUserOption['exclude'] = this.filterService.topicsUserOption.exclude;

    // await this.buildOptions();
  }

  async onFilterChange(event) {
    switch (event.name) {
      case 'Attitude':
        this.toneUserOption = event;
        break;
      case 'News Sources':
        this.sourcesUserOption = event;
        break;
      case 'Topics':
        this.filterService.topicsUserOption = event;
        this.topicsUserOption = event;
        break;
      case 'Locations':
        this.locationsUserOption = event;
        break;
      case 'Keywords':
        this.keywordsUserOption = event;
        break;
      default:
        throw new Error(`Unknown event: ${JSON.stringify(event)}`);
    }

    await this.buildOptions();
  }

  async buildOptions() {
    const filterOptions: any = this.filterService.buildFilterOptions({
      toneUserOption: this.toneUserOption,
      sourcesUserOption: this.sourcesUserOption,
      topicsUserOption: this.topicsUserOption,
      keywordsUserOption: this.keywordsUserOption,
      locationsUserOption: this.locationsUserOption
    });

    await this.filterService.updateFilterOptions(filterOptions);
  }

  async loadFilters() {
    const loadedConfig = await this.neutrifyAPI.ConfigByOwner(this.authService.user.username, null, null , 1);
    await this.filterService.updateFilterOptions(loadedConfig.items[0]);
    this.initOptions();
    await this.presentToast('Your filters have been loaded.', 'primary');
    this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');

  }

  async saveFilters() {
    try {
      const reqBody: UpdateConfigInput = this.filterService.marshalRequest();
      await this.neutrifyAPI.UpdateConfig(reqBody);
      await this.buildOptions();
      await this.presentToast('Your filters have been saved.', 'primary');
      this.ga.eventEmitter('save_filters', 'engagement', 'Saved filters');
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
