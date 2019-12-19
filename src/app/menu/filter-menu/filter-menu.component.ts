import { FilterService } from '../../services/filter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit, OnDestroy {
  toneUserOption;
  qualityUserOption;
  topicsUserOption;
  keywordsUserOption;

  constructor(
    private filterService: FilterService
    ) {
      this.getOptions();
      const filterOptions = this.filterService.buildFilterOptions(this.toneUserOption, this.qualityUserOption,
      this.topicsUserOption, this.keywordsUserOption);
      console.log('filter options', filterOptions);
      this.filterService.updateFilterOptions(filterOptions);
    }

  ngOnInit() {}

  getOptions() {
    this.topicsUserOption = {
      include: [],
      exclude: []
    };

    this.keywordsUserOption = {
      include: [],
      exclude: []
    };

    this.toneUserOption = {
      value: {
        lower: -1,
        upper: 1
      }
    };

    this.qualityUserOption = {
      value: {
        lower: 0,
        upper: 5
      }
    };
  }

  ngOnDestroy() {
  }

  onFilterChange(event) {
    switch (event.name) {
      case 'Tone':
        this.toneUserOption = event;
        break;
      case 'Quality':
        this.qualityUserOption = event;
        break;
      case 'Topics':
        this.topicsUserOption = event;
        break;
      case 'Keywords':
        this.keywordsUserOption = event;
        break;
      default:
        throw new Error('Unknown event.');
    }

    const filterOptions = this.filterService.buildFilterOptions(this.toneUserOption, this.qualityUserOption,
      this.topicsUserOption, this.keywordsUserOption);

    this.filterService.updateFilterOptions(filterOptions);
  }
}
