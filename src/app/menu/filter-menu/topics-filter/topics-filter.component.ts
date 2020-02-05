import { Component, OnInit, Input } from '@angular/core';
import { Arts } from '../../../model/topic-options';

@Component({
  selector: 'app-topics-filter',
  templateUrl: './topics-filter.component.html',
  styleUrls: ['./topics-filter.component.scss'],
})
export class TopicsFilterComponent implements OnInit {
  private option;
  public topicList: Array<string>;
  public segmentValue = 'include';
  public showFilter = false;
  public arts = Arts;

  // get userOption(): any {
  //   return this.userOption;
  // }

  @Input()
  set userOption(val: any) {
    this.option = val;
    this.topicList = this.option[this.segmentValue];
  }

  constructor() { }

  ngOnInit() {
    console.log(this.topicList);
  }

  onSegmentChange() {
    this.topicList = this.option[this.segmentValue];
  }
}
