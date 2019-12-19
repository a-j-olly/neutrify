import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.scss'],
})
export class WordFilterComponent implements OnInit {
  @Input() userOption;
  @Input() wordFilterType: string;

  wordFilterList: Array<string>;
  wordOptionForm: FormGroup;
  wordListToggle = true;
  segmentValue: string;
  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    this.segmentValue = 'include';
    this.wordFilterList = this.userOption[this.segmentValue];

    this.wordOptionForm = new FormGroup({
      wordInput: new FormControl(null, Validators.required)
    });

    this.userOption.name = this.wordFilterType;
  }

  onSegmentChange() {
    this.wordFilterList = this.userOption[this.segmentValue];
  }

  addWord() {
    this.userOption[this.segmentValue].push(this.wordOptionForm.value.wordInput);
    this.wordOptionForm.reset();

    this.wordFilterList = this.userOption[this.segmentValue];
    this.userOptionChanged.emit(this.userOption);
  }

  removeWord(index) {
    this.userOption[this.segmentValue].splice(index, 1);
    this.wordFilterList = this.userOption[this.segmentValue];
    this.userOptionChanged.emit(this.userOption);
  }
}
