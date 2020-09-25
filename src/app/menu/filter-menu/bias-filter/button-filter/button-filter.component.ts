import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-button-filter',
  templateUrl: './button-filter.component.html',
  styleUrls: ['./button-filter.component.scss'],
})
export class ButtonFilterComponent implements OnInit {
  private buttonState: string = 'unassigned';
  public buttonColour: string = 'medium';
  @Input() buttonText: string;

  @Input()
  set buttonValue(val: string) {

    if (val.toLowerCase() !== this.buttonState.toLowerCase()) {
      this.buttonState = val;
      this.setInitialState();
    }
  }

  get buttonValue() {
    return this.buttonState;
  }

  @Output() onToggleButton: EventEmitter<any> = new EventEmitter();
  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
  ) {
    this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
      this.filtersLoading = status;
    });
  }

  ngOnInit() { }

  public toggleButton() {
    if (this.buttonValue === 'unassigned') {
      this.buttonValue ='include';
      this.buttonColour = 'primary';
    } else if (this.buttonValue === 'include') {
      this.buttonValue ='exclude';
      this.buttonColour = 'danger';
    } else if (this.buttonValue === 'exclude') {
      this.buttonValue ='unassigned';
      this.buttonColour = 'medium';
    }

    this.emitBiasChange();
  }

  private setInitialState() {
    if (this.buttonValue === 'unassigned') {
      this.buttonValue ='unassigned';
      this.buttonColour = 'medium';
    } else if (this.buttonValue === 'include') {
      this.buttonValue ='include';
      this.buttonColour = 'primary';
    } else if (this.buttonValue === 'exclude') {
      this.buttonValue ='exclude';
      this.buttonColour = 'danger';
    }
  }

  private emitBiasChange() {
    this.onToggleButton.emit({
      name: this.buttonText.toLowerCase(),
      value: this.buttonValue
    });
  }
}
