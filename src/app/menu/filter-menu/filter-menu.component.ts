import { FilterService } from '../../services/filter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit, OnDestroy {
  filterForm: FormGroup;
  toneUserOption;
  qualityUserOption;
  topicsUserOption;
  keywordsUserOption;

  constructor(
    private menuService: MenuService,
    private filterService: FilterService
    ) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      sentimentRange: new FormControl(),
      concepts: new FormControl(),
      topics: new FormControl()
   });

    this.getOptions();
  }

  getOptions() {
    this.topicsUserOption = {
      include: ['Politics'],
      exclude: ['Economics']
    };

    this.keywordsUserOption = {
      include: [],
      exclude: []
    };

    this.toneUserOption = {
      value: {
        lower: -0.5,
        upper: 0.5
      }
    };

    this.qualityUserOption = {
      value: {
        lower: 2,
        upper: 5
      }
    };
  }

  ngOnDestroy() {
  }

  saveFilters() {
    console.log('save filters');
  }
}
