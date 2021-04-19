import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-button-filter',
  templateUrl: './button-filter.component.html',
  styleUrls: ['./button-filter.component.scss'],
})
export class ButtonFilterComponent implements OnInit {
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

  @Output() toggleButton: EventEmitter<any> = new EventEmitter();


  public buttonColour = 'medium';

  public filtersLoading = false;

  private buttonState = 'unassigned';

  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
  ) {
    this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
      this.filtersLoading = status;
    });
  }

  ngOnInit() { }

  public onToggleButton() {
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
    this.toggleButton.emit({
      name: this.buttonText.toLowerCase(),
      value: this.buttonValue
    });
  }
}
