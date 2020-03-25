import { Countries } from './../../../model/country-options';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss'],
})
export class CountryFilterComponent implements OnInit {
  private option;
  countryFilterList: Array<string>;
  selectList: Array<string>;
  countryOptionForm: FormGroup;
  countryListToggle = true;
  segmentValue = 'include';
  showFilter = false;
  disableCountries = false;
  countryOptions = Countries;

  get userOption(): any {
    return this.userOption;
  }

  @Input()
  set userOption(val: any) {
    this.option = val;
    this.countryFilterList = this.option[this.segmentValue];
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.countryFilterList = this.option[this.segmentValue];
    this.selectList = this.countryFilterList;

    this.countryOptionForm = new FormGroup({
      countryInput: new FormControl(null, Validators.required)
    });
  }

  onSegmentChange() {
    this.countryFilterList = this.option[this.segmentValue];
  }

  selectChanged(event) {
    this.selectList.push(...event.target.value);
    this.countryFilterList = [...new Set([...this.countryFilterList, ...event.target.value])];
    this.option[this.segmentValue] = this.countryFilterList;
    this.option.name = 'Locations';
    this.userOptionChanged.emit(this.option);
  }

  addWord() {
    this.option[this.segmentValue].push(this.countryOptionForm.value.countryInput);
    this.option.name = 'Locations';
    this.countryOptionForm.reset();

    this.countryFilterList = this.option[this.segmentValue];
    this.selectList = this.countryFilterList;
    this.userOptionChanged.emit(this.option);
  }

  removeWord(index) {
    this.option[this.segmentValue].splice(index, 1);
    this.option.name = 'Locations';
    this.countryFilterList = this.option[this.segmentValue];
    this.selectList = this.countryFilterList;
    this.userOptionChanged.emit(this.option);
  }
}
