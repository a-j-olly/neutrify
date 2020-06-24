import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.scss'],
})
export class WordFilterComponent implements OnInit {
  public includeList = [];
  public excludeList = [];

  get userOption(): any {
    return this.userOption;
  }

  @Input()
  set userOption(val: any) {
    const { include, exclude } = val;
    if (JSON.stringify(include) !== JSON.stringify(this.includeList)) {
      this.includeList = [...include];
    } else if (JSON.stringify(exclude) !== JSON.stringify(this.excludeList)) {
      this.excludeList = [...exclude];
    }

    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  @Input() wordFilterType: string;

  wordDisplayList: Array<string>;
  wordOptionForm: FormGroup;
  wordListToggle = true;
  segmentValue = 'include';
  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.wordOptionForm = new FormGroup({
      wordInput: new FormControl(null, Validators.required)
    });

    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  onSegmentChange() {
    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  addWord() {
    const wordList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
    wordList.push(this.wordOptionForm.value.wordInput);
    this.wordOptionForm.reset();

    this.wordDisplayList = wordList;

    this.userOptionChanged.emit({
      include: this.includeList,
      exclude: this.excludeList,
      name: this.wordFilterType
    });

    this.ga.eventEmitter('use_filter', 'engagement', `${this.wordFilterType} filter used`);
  }

  removeWord(index) {
    const wordList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
    wordList.splice(index, 1);

    this.wordDisplayList = wordList;

    this.userOptionChanged.emit({
      include: this.includeList,
      exclude: this.excludeList,
      name: this.wordFilterType
    });
  }
}
