import { GoogleAnalyticsService } from './../../services/google-analytics.service';
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

    this.filterService.updateFilterSaved(false);
    await this.filterService.updateFilterOptions(filterOptions);
  }

  async loadFilters() {
    try {
      const loadedConfig = await this.neutrifyAPI.ConfigByOwner(this.authService.user.username, null, null , 1);
      await this.filterService.updateFilterOptions(loadedConfig.items[0]);
      this.initOptions();
      await this.presentToast('Your filters have been loaded.', 'success');
      this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');
    } catch (error) {
      this.presentToast('Could not load your filters. Please try again.', 'danger');
    }
  }

  async saveFilters() {
    let res = await this.filterService.saveFilters();
    if (res) {
      await this.presentToast('Your filters have been saved.', 'success');
      this.ga.eventEmitter('save_filters', 'engagement', 'Saved filters');
    } else {
      this.presentToast('Could not save your filters. Please try again.', 'danger');
    }
  }

  async clearFilters() {
    try {
      const blankFilterObj = this.filterService.blankFilterObj();
      await this.filterService.updateFilterOptions(blankFilterObj);
      this.initOptions();
      await this.presentToast('Your filters have been reset. Don\'t forget to save them.', 'success');
    } catch (e) {
      this.presentToast('Could not reset your filters. Please try again.', 'danger');
    }
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}
