import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { APIService } from './../../services/neutrify-api.service';
import { AuthService } from './../../services/auth.service';
import { FilterService } from '../../services/filter.service';
import { Component, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnDestroy {
  public toneUserOption;
  public sourcesUserOption;
  public topicsUserOption;
  public keywordsUserOption;
  public locationsUserOption;

  private filtersSaved: boolean = true;
  private filtersSavedSubcription$: Subscription;

  private filtersLoaded: boolean = true;
  private filtersLoadedSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    private neutrifyAPI: APIService,
    public authService: AuthService,
    private toastController: ToastController,
    private ga: GoogleAnalyticsService
    ) {
      this.initOptions();
      this.filtersSavedSubcription$ = this.filterService.getFilterSavedStatus().subscribe(async (status) => {
        console.log('filterSaved changed');
        this.filtersSaved = status;
      });

      this.filtersLoadedSubcription$ = this.filterService.getFilterLoadedStatus().subscribe(async (status) => {
        console.log('filterSaved loaded');
        this.filtersLoaded = status;
        if (this.filtersSaved && this.filtersLoaded) {
          await this.initOptions();
        }
      });
    }

  ngOnDestroy() {
    this.filtersSavedSubcription$.unsubscribe();
    this.filtersLoadedSubcription$.unsubscribe();
  }

  async initOptions() {
    console.log('initOptions called');
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

    this.topicsUserOption = {
      include: this.filterService.topicsUserOption.include,
      exclude: this.filterService.topicsUserOption.exclude,
      name: 'Topics'
    };

    console.log('(filter-menu) topicsUserOption: ', this.topicsUserOption);
  }

  async onFilterChange(event) {
    console.log('filters changed');
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
    console.log('buildOptions');
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
      const res = await this.filterService.loadFilters(this.authService.user.username);
      if (res) {
        await this.presentToast('Your filters have been loaded.', 'success');
        this.ga.eventEmitter('load_filters', 'engagement', 'Re-loaded filters');
        setTimeout(() => {
          this.filterService.updateFilterSaved(true);
        }, 200);
      } else {
        this.presentToast('Could not load your filters. Please try again.', 'danger');
      }
  }

  async saveFilters() {
    const res = await this.filterService.saveFilters();
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
