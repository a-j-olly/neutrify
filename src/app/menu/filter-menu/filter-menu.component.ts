import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { AuthService } from './../../services/auth.service';
import { FilterService } from '../../services/filter.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

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

  private filtersSaved: boolean = true;
  private filtersSavedSubcription$: Subscription;

  private filtersLoadedSubcription$: Subscription;

  private filterOptions
  private filterSubcription$: Subscription;

  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    public authService: AuthService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService
    ) {
      this.filterOptions = this.filterService.filterOptions;
      this.initOptions();
      this.filtersSavedSubcription$ = this.filterService.getFilterSavedStatus().subscribe(async (status) => {
        this.filtersSaved = status;
      });

      this.filtersLoadedSubcription$ = this.filterService.getFilterLoadedStatus().subscribe(async (status) => {
        if (this.filtersSaved) {
          await this.initOptions();
        }
      });

      this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(async (filters) => {
        this.filterOptions = filters;
        this.initOptions();
      });

      this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filtersLoading = status;
      });
    }

  async initOptions() {

    this.toneUserOption = {
      value: {
        lower: this.filterOptions.toneLowerRange,
        upper: this.filterOptions.toneUpperRange
      }
    };

    this.sourcesUserOption = {
      include: [...this.filterOptions.sourcesToInclude],
      exclude: [...this.filterOptions.sourcesToExclude]
    };

    this.keywordsUserOption = {
      include: [...this.filterOptions.keywordsToInclude],
      exclude: [...this.filterOptions.keywordsToExclude]
    };


    this.locationsUserOption = {
      include: [...this.filterOptions.locationsToInclude],
      exclude: [...this.filterOptions.locationsToExclude]
    };

    this.topicsUserOption = {
      include: this.filterService.topicsUserOption.include,
      exclude: this.filterService.topicsUserOption.exclude,
      name: 'Topics'
    };
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
    this.filterService.updateFilterLoading(true);
      const res = await this.filterService.loadFilters(this.authService.user.username);
      if (res) {
        await this.presentToast('Your filters have been loaded.', 'success');
        this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');
      } else {
        this.presentToast('Could not load your filters. Please try again.', 'danger');
      }
  }

  async saveFilters() {
    this.filterService.updateFilterLoading(true);
    const res = await this.filterService.saveFilters();
    if (res) {
      await this.presentToast('Your filters have been saved.', 'success');
      this.ga.eventEmitter('save_filters', 'engagement', 'Saved filters');
    } else {
      this.presentToast('Could not save your filters. Please try again.', 'danger');
    }
  }

  async clearFilters() {
    this.filterService.updateFilterLoading(true);
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
