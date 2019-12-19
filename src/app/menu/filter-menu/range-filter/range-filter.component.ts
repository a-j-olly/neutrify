import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss'],
})
export class RangeFilterComponent implements OnInit {
  @Input() userOption;
  @Input() rangeFilterType: string;

  displayRange;
  rangeSettings: object;

  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.rangeFilterType === 'Tone') {
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

    this.displayRange = this.userOption.value;
    this.userOption.name = this.rangeFilterType;
  }

  onChange() {
    this.userOption.value = this.displayRange;
    this.userOptionChanged.emit(this.userOption);
  }

}
