import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topic-option',
  templateUrl: './topic-option.component.html',
  styleUrls: ['./topic-option.component.scss'],
})
export class TopicOptionComponent implements OnInit {
  public optionDisabled = false;
  public oppositeDisabled = false;
  public displayValue: Array<string> = new Array<string>();

  @Input() filtersLoading;
  @Input() topicOption;

  private _topicValues: any = {};
  get topicValues() {
    return this._topicValues;
  }

  @Input()
  set topicValues(val: any) {

    if (val && JSON.stringify(val).toLowerCase() != JSON.stringify(this._topicValues).toLowerCase()) {
      this._topicValues = this.unmarshalTopicValues(val);
      this.displayValue = this.topicValues[this.segmentValue].map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
      this.initTopic();
    }
  }

  private _segmentValue = 'include';
  get segmentValue() {
    return this._segmentValue;
  }

  @Input()  
  set segmentValue(val: any) {
    this._segmentValue = val;

    if (JSON.stringify(this.displayValue).toLowerCase() != JSON.stringify(this.topicValues[this.segmentValue]).toLowerCase()) {
      this.displayValue = this.topicValues[this.segmentValue].map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
      this.initTopic();
    }
  }

  @Output() onTopicChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  unmarshalTopicValues(input) {
    let res: any = {};
    res['include'] = new Array();
    res.include.push(...input.include);

    res['exclude'] = new Array();
    res.exclude.push(...input.exclude);
    return res;
  }

  initTopic() {
    const target = this.topicValues[this.segmentValue];
    const oppositeTarget = this.topicValues[this.segmentValue === 'include' ? 'exclude' : 'include'];

    if (oppositeTarget.length) {
      this.oppositeDisabled = true;
    } else {
      this.oppositeDisabled = false;
    }

    if (target.length === 1) {

      if (target[0].toLowerCase() === this.topicOption.name.toLowerCase()) {
        this.optionDisabled = true;
      } else {
        this.optionDisabled = false;
      }
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

    if (event.detail.checked) {
      if (this.topicValues[this.segmentValue].length !== 1 || this.topicValues[this.segmentValue][0].toLowerCase() !== this.topicOption.name.toLowerCase()) {
        this.topicValues[this.segmentValue].length = 0;
        await this.topicValues[this.segmentValue].push(this.topicOption.name.toLowerCase());
        filtersChanged = true;
      }

      const oppositeSegmentValue = this.segmentValue === 'include' ? 'exclude' : 'include';
      if (this.topicValues[oppositeSegmentValue].length) {
        this.topicValues[oppositeSegmentValue].length = 0;
        filtersChanged = true;
      }

      this.oppositeDisabled = true;

    } else {
      const topicIndex = this.topicValues[this.segmentValue].findIndex(topic => topic.toLowerCase() === this.topicOption.name.toLowerCase());

      if (topicIndex !== -1) {
        await this.topicValues[this.segmentValue].splice(topicIndex, 1);
        filtersChanged = true;
      }

      const oppositeSegmentValue = this.segmentValue === 'include' ? 'exclude' : 'include';
      if (this.topicValues[oppositeSegmentValue].length) {
        this.oppositeDisabled = true;
      } else {
        this.oppositeDisabled = false;
      }
    }

    if (filtersChanged) {
      this.displayValue = this.topicValues[this.segmentValue].map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
      await this.emitTopicChange();
    }
  }

  async onSelectChange(event) {
    if (JSON.stringify(this.topicValues[this.segmentValue]).toLowerCase() != JSON.stringify(event.detail.value).toLowerCase()) {
      this.topicValues[this.segmentValue] = event.detail.value.map(val => val.toLowerCase());
      await this.emitTopicChange();
    }
  }

  emitTopicChange() {
    this.onTopicChange.emit({
      name: this.topicOption.name,
      value: this.topicValues
    });
  }
}
