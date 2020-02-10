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
  public qualityUserOption;
  public sourcesUserOption;
  public topicsUserOption;
  public keywordsUserOption;
  public locationsUserOption;

  constructor(
    private filterService: FilterService,
    private neutrifyAPI: APIService,
    public authService: AuthService,
    private toastController: ToastController
    ) {
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

    this.keywordsUserOption = {
      include: filterOptions.keywordsToInclude,
      exclude: filterOptions.keywordsToExclude
    };

    this.locationsUserOption = {
      include: filterOptions.locationsToInclude,
      exclude: filterOptions.locationsToExclude
    };

    // const topicsToInclude = this.filterService.topicsUserOption.iclud;
    // const topicsToExclude = filterOptions.topicsToExclude;
    this.topicsUserOption = {};
    this.topicsUserOption['include'] = this.filterService.topicsUserOption.include;
    this.topicsUserOption['exclude'] = this.filterService.topicsUserOption.exclude;
    // this.topicsUserOption = {
    //   include: {
    //     arts: topicsToInclude.arts,
    //     games: topicsToInclude.games,
    //     news: topicsToInclude.news,
    //     regional: topicsToInclude.regional,
    //     society: topicsToInclude.society,
    //     business: topicsToInclude.business,
    //     health: topicsToInclude.health,
    //     recreation: topicsToInclude.recreation,
    //     science: topicsToInclude.science,
    //     sport: topicsToInclude.sport,
    //     computers: topicsToInclude.computers,
    //     home: topicsToInclude.home,
    //     shopping: topicsToInclude.shopping,
    //   },
    //   exclude: {
    //     arts: topicsToExclude.arts,
    //     games: topicsToExclude.games,
    //     news: topicsToExclude.news,
    //     regional: topicsToExclude.regional,
    //     society: topicsToExclude.society,
    //     business: topicsToExclude.business,
    //     health: topicsToExclude.health,
    //     recreation: topicsToExclude.recreation,
    //     science: topicsToExclude.science,
    //     sport: topicsToExclude.sport,
    //     computers: topicsToExclude.computers,
    //     home: topicsToExclude.home,
    //     shopping: topicsToExclude.shopping,
    //   }
    // };
  }

  async onFilterChange(event) {
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

    const filterOptions: any = this.filterService.buildFilterOptions({
      toneUserOption: this.toneUserOption,
      qualityUserOption: this.qualityUserOption,
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
  }

  async saveFilters() {
    try {
      const reqBody: UpdateConfigInput = this.filterService.marshalRequest();
      await this.neutrifyAPI.UpdateConfig(reqBody);
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
