import { animate, style, transition, trigger } from '@angular/animations';
import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./range-filter.component.scss'],
})
export class RangeFilterComponent implements OnInit {
  @Input() userOption;
  @Input() rangeFilterType: string;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public rangeSettings: any;
  public showFilter = false;

  public filtersLoading = false;
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    private ga: GoogleAnalyticsService
  ) {
    this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
      this.filtersLoading = status;
    });
  }

  public ngOnInit() {
    if (this.rangeFilterType === 'Article Attitude') {
      this.rangeSettings = {
        max: '1',
        min: '-1',
        step: '0.1',
        ticks: false,
        snaps: false,
        dualKnobs: true,
        pin: false,
        rangeIcons: {
          start: {
            name: 'flame',
            color: 'danger'
          },
          end: {
            name: 'heart',
            color: 'tertiary'
          }
        }
      };
    }
  }

  public onChange(event) {
    if (this.hasChanged(event)) {
      this.userOption.value = event.detail.value;
      this.userOption.name = this.rangeFilterType;
      this.userOptionChanged.emit(this.userOption);
      this.ga.eventEmitter('use_filter', 'engagement', 'Tone filter used');
    }
  }

  private hasChanged(event): boolean {
    let changed = false;
    if (event.detail.value && this.userOption.value) {
      const oldValue = this.userOption.value;
      const newValue = event.detail.value;
      if (newValue.lower !== oldValue.lower || newValue.upper !== oldValue.upper) {
        changed = true;
      } else {
        changed = false;
      }
    }
    return changed;
  }
}
