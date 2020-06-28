import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-option',
  templateUrl: './topic-option.component.html',
  styleUrls: ['./topic-option.component.scss'],
})
export class TopicOptionComponent implements OnInit {

  public _topicOption: any;
  get topicOption() {
    return this._topicOption;
  }

  @Input()
  set topicOption(val: any) {
    if (val && JSON.stringify(val) !== JSON.stringify(this._topicOption)) {
      this._topicOption = Object.assign({}, val);
    }
  }

  constructor() { }

  ngOnInit() {}

}
