import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.scss'],
})
export class WordFilterComponent implements OnInit {
  private option;

  get userOption(): any {
    return this.userOption;
  }

  @Input()
  set userOption(val: any) {
    this.option = val;
    this.wordFilterList = this.option[this.segmentValue];
  }

  @Input() wordFilterType: string;

  wordFilterList: Array<string>;
  wordOptionForm: FormGroup;
  wordListToggle = true;
  segmentValue = 'include';
  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.wordFilterList = this.option[this.segmentValue];

    this.wordOptionForm = new FormGroup({
      wordInput: new FormControl(null, Validators.required)
    });
  }

  onSegmentChange() {
    this.wordFilterList = this.option[this.segmentValue];
  }

  addWord() {
    console.log('segment: ', this.segmentValue);
    console.log('added value: ', this.wordOptionForm.value.wordInput);

    this.option[this.segmentValue].push(this.wordOptionForm.value.wordInput);
    this.option.name = this.wordFilterType;
    this.wordOptionForm.reset();

    this.wordFilterList = this.option[this.segmentValue];
    console.log('event emitted: ', this.option);
    this.userOptionChanged.emit(this.option);
    this.ga.eventEmitter('use_filter', 'engagement', `${this.wordFilterType} filter used`);
  }

  removeWord(index) {
    this.option[this.segmentValue].splice(index, 1);
    this.option.name = this.wordFilterType;
    this.wordFilterList = this.option[this.segmentValue];
    this.userOptionChanged.emit(this.option);
  }
}
