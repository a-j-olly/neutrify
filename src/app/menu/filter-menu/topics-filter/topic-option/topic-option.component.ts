import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topic-option',
  templateUrl: './topic-option.component.html',
  styleUrls: ['./topic-option.component.scss'],
})
export class TopicOptionComponent implements OnInit {
  public optionDisabled = false;
  public isVisible = false;
  public displayValue;

  @Input() topicOption;

  private _topicValues: any;
  get topicValues() {
    return this._topicValues;
  }

  @Input()
  set topicValues(val: any) {
    // console.log('(setFilterValues)', this.topicOption.name.toUpperCase());
    // console.log('(setFilterValues) val: ', val);
    // console.log('(setFilterValues) this.topicValues', this.topicValues);

    if (val && JSON.stringify(val) !== JSON.stringify(this._topicValues)) {
      // this.isVisible = false;
      this._topicValues = val;
      // setTimeout(() => this.isVisible = true);
      this.displayValue = this.topicValues[this.segmentValue];
      this.initTopic();
      // console.log('(setFilterValues) this.topicValues', this.topicValues);
    }
  }

  private _segmentValue = 'include';
  get segmentValue() {
    return this._segmentValue;
  }

  @Input()  
  set segmentValue(val: any) {
    // console.log('(setSegmentValue) val: ', val);
    this._segmentValue = val;

    if (JSON.stringify(this.displayValue) !== JSON.stringify(this.topicValues[this.segmentValue])) {
      this.displayValue = this.topicValues[this.segmentValue];
      this.initTopic();
    }
  }

  @Output() onTopicChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  initTopic() {
    // console.log('init topics');
    const target = this.topicValues[this.segmentValue];
    if (target.length === 1) {

      if (target[0].toLowerCase() === this.topicOption.name.toLowerCase()) {
        this.optionDisabled = true;
      } else {
        this.optionDisabled = false;
      }
    } else if (target.length < 1) {
      this.optionDisabled = false;
    } else if (target.length > 1) {
      if (target.findIndex(op => op.toLowerCase() === this.topicOption.name.toLowerCase()) !== -1) {
        this.optionDisabled = true;
      } else {
        this.optionDisabled = false;
      }
    } else {
      this.optionDisabled = false;
    }
  }

  async onCheckboxChange(event) {
    let filtersChanged = false;

    // console.log('(onCheckboxChange) event: ', event);
    if (event.detail.checked) {
      if (this.topicValues[this.segmentValue].length !== 1 || this.topicValues[this.segmentValue][0].toLowerCase() !== this.topicOption.name.toLowerCase()) {
        this.topicValues[this.segmentValue] = new Array();
        await this.topicValues[this.segmentValue].push(this.topicOption.name.toLowerCase());
        filtersChanged = true;
      }
    } else {
      const topicIndex = this.topicValues[this.segmentValue].findIndex(topic => topic.toLowerCase() === this.topicOption.name.toLowerCase());

      if (topicIndex !== -1) {
        await this.topicValues[this.segmentValue].splice(topicIndex, 1);
        filtersChanged = true;
      }
    }

    // console.log('(onCheckboxChange) filters changed? ', filtersChanged);

    if (filtersChanged) {
      this.displayValue = this.topicValues[this.segmentValue];
      await this.emitTopicChange();
      // console.log('(onCheckboxChange) displayValue: ', this.displayValue);
      // console.log('(onCheckboxChange) filterValues: ', this.topicValues[this.segmentValue]);
    }
  }

  async onSelectChange(event) {
    // console.log('(onSelectChange) event: ', event.detail.value);
    // console.log('(onSelectChange) displayValue: ', this.displayValue);
    // console.log('(onSelectChange) filterValues: ', this.topicValues[this.segmentValue]);

    if (JSON.stringify(this.topicValues[this.segmentValue]) !== JSON.stringify(event.detail.value)) {
      this.topicValues[this.segmentValue] = event.detail.value;
      await this.emitTopicChange();
      // console.log('(onSelectChange) updated filterValues: ', this.topicValues[this.segmentValue]);
    }
    // console.log('(onSelectChange) [before assignment] filterValues', this.topicValues);
    // console.log('(onSelectChange) [after assignment] filterValues', this.topicValues);
  }

  emitTopicChange() {
    this.onTopicChange.emit({
      name: this.topicOption.name,
      value: this.topicValues
    });
  }
}
