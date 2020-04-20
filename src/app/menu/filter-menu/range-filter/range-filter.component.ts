import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss'],
})
export class RangeFilterComponent implements OnInit {
  @Input() userOption;
  @Input() rangeFilterType: string;

  rangeSettings: any;

  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.rangeFilterType === 'Attitude') {
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
    } else if (this.rangeFilterType === 'Quality') {
      this.rangeSettings = {
        max: '5',
        min: '0',
        step: '1',
        ticks: true,
        snaps: true,
        dualKnobs: true,
        pin: true,
        rangeIcons: {
          start: {
            name: 'star-outline',
            color: 'primary'
          },
          end: {
            name: 'star',
            color: 'primary'
          }
        }
      };
    }
  }

  onChange(event) {
    if (this.hasChanged(event)) {
      this.userOption.value = event.detail.value;
      this.userOption.name = this.rangeFilterType;
      this.userOptionChanged.emit(this.userOption);
    }
  }


  hasChanged(event): boolean {
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
