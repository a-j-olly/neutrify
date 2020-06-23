import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  Arts,
  Games,
  Society,
  Business,
  Health,
  Recreation,
  Science,
  Sports,
  Computers,
  Home,
  Shopping
} from '../../../model/topic-options';

@Component({
  selector: 'app-topics-filter',
  templateUrl: './topics-filter.component.html',
  styleUrls: ['./topics-filter.component.scss'],
})
export class TopicsFilterComponent implements OnInit {
  private option: any = {};
  private copiedOptions = {};
  public includedTopics: any = {};
  public excludedTopics: any = {};
  public segmentValue = 'include';
  public showFilter = false;
  public selectOptions: any = {};

  public artsDisabled = false;
  public gamesDisabled = false;
  public societyDisabled = false;
  public businessDisabled = false;
  public healthDisabled = false;
  public recreationDisabled = false;
  public scienceDisabled = false;
  public sportsDisabled = false;
  public computersDisabled = false;
  public homeDisabled = false;
  public shoppingDisabled = false;

  @Input()
  set userOption(val: any) {

    if (val && JSON.stringify(val) !== JSON.stringify(this.option) || JSON.stringify(this.option) !== JSON.stringify(this.copiedOptions)) {
      this.option = Object.assign({}, val);
      this.initTopicView();
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor(private ga: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.selectOptions = [
      { name: 'arts', label: 'Arts', values: Arts, disabledField: 'artsDisabled' },
      { name: 'games', label: 'Games', values: Games, disabledField: 'gamesDisabled' },
      { name: 'society', label: 'Society', values: Society, disabledField: 'societyDisabled' },
      { name: 'business', label: 'Business', values: Business, disabledField: 'businessDisabled' },
      { name: 'health', label: 'Health', values: Health, disabledField: 'healthDisabled' },
      { name: 'recreation', label: 'Recreation', values: Recreation, disabledField: 'recreationDisabled' },
      { name: 'science', label: 'Science', values: Science, disabledField: 'scienceDisabled' },
      { name: 'sports', label: 'Sports', values: Sports, disabledField: 'sportsDisabled' },
      { name: 'computers', label: 'Computers', values: Computers, disabledField: 'computersDisabled' },
      { name: 'home', label: 'Home', values: Home, disabledField: 'homeDisabled' },
      { name: 'shopping', label: 'Shopping', values: Shopping, disabledField: 'shoppingDisabled' },
    ];
  }

  initTopicView() {
    this.initTopicObj(this.includedTopics, this.option.include);
    this.initTopicObj(this.excludedTopics, this.option.exclude);

    this.initTopic('artsDisabled', 'arts');
    this.initTopic('gamesDisabled', 'games');
    this.initTopic('societyDisabled', 'society');
    this.initTopic('businessDisabled', 'business');
    this.initTopic('healthDisabled', 'health');
    this.initTopic('recreationDisabled', 'recreation');
    this.initTopic('scienceDisabled', 'science');
    this.initTopic('sportsDisabled', 'sports');
    this.initTopic('computersDisabled', 'computers');
    this.initTopic('homeDisabled', 'home');
    this.initTopic('shoppingDisabled', 'shopping');
  }

  initTopicObj(ogObj, newObj) {
    Object.keys(newObj).forEach((key) => {
      if (!ogObj || !this.isArrEq(ogObj[key], newObj[key])) ogObj[key] = newObj[key];
    });
  }

  isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  onSegmentChange() {
    this.initTopicView();
  }

  initTopic(disableBoolRef, valStr) {
    if (this.option[this.segmentValue][valStr].length === 1) {

      if (this.option[this.segmentValue][valStr][0].toLowerCase() === valStr.toLowerCase()) {
        this[disableBoolRef] = true;
      } else {
        this[disableBoolRef] = false;
      }
    } else if (this.option[this.segmentValue][valStr].length < 1) {
      this[disableBoolRef] = false;
    } else if (this.option[this.segmentValue][valStr].length > 1) {
      if (this.option[this.segmentValue][valStr].findIndex(op => op.toLowerCase() === valStr.toLowerCase()) !== -1) {
        this[disableBoolRef] = true;
      } else {
        this[disableBoolRef] = false;
      }
    } else {
      this[disableBoolRef] = false;
    }
  }

  configureCheckbox(disableBool, valStr): boolean {
    let res = false;
    if (disableBool) {
      if (this[`${this.segmentValue}dTopics`][valStr].length !== 1 || this[`${this.segmentValue}dTopics`][valStr][0].toLowerCase() !== valStr.toLowerCase()) {
        this[`${this.segmentValue}dTopics`][valStr] = new Array();
        this[`${this.segmentValue}dTopics`][valStr].push(valStr.toLowerCase());
      }
    } else {
      const topicIndex = this[`${this.segmentValue}dTopics`][valStr].findIndex(topic => topic.toLowerCase() === valStr.toLowerCase());

      if (topicIndex !== -1) {
        this[`${this.segmentValue}dTopics`][valStr].splice(topicIndex, 1);
        res = true;
      }
    }

    return res;
  }

  checkboxClicked(event) {
    let hasChanged = false;

    if (event && event.target) {
      if (event.target.name === 'arts') {
        hasChanged = this.configureCheckbox(this.artsDisabled, 'arts');
      } else if (event.target.name === 'games') {
        hasChanged = this.configureCheckbox(this.gamesDisabled, 'games');
      } else if (event.target.name === 'society') {
        hasChanged = this.configureCheckbox(this.societyDisabled, 'society');
      } else if (event.target.name === 'business') {
        hasChanged = this.configureCheckbox(this.businessDisabled, 'business');
      } else if (event.target.name === 'health') {
        hasChanged = this.configureCheckbox(this.healthDisabled, 'health');
      } else if (event.target.name === 'recreation') {
        hasChanged = this.configureCheckbox(this.recreationDisabled, 'recreation');
      } else if (event.target.name === 'science') {
        hasChanged = this.configureCheckbox(this.scienceDisabled, 'science');
      } else if (event.target.name === 'computers') {
        hasChanged = this.configureCheckbox(this.computersDisabled, 'computers');
      } else if (event.target.name === 'home') {
        hasChanged = this.configureCheckbox(this.homeDisabled, 'home');
      } else if (event.target.name === 'shopping') {
        hasChanged = this.configureCheckbox(this.shoppingDisabled, 'shopping');
      } else if (event.target.name === 'sports') {
        hasChanged = this.configureCheckbox(this.sportsDisabled, 'sports');
      }
    }

    if (hasChanged) {
      this.selectChanged(null);
    }
  }

  selectChanged(event) {
    let topics;

    if (this.segmentValue === 'include') {
      topics = this.includedTopics;
    } else {
      topics = this.excludedTopics;
    }

    if (event && event.target) {
      topics[event.target.name] = event.target.value;
    }

    if (JSON.stringify(topics) !== JSON.stringify(this.copiedOptions[this.segmentValue])) {
      this.option[this.segmentValue] = topics;
      this.option.name = 'Topics';
      this.userOptionChanged.emit(this.option);
      
      this.copiedOptions[this.segmentValue] = this.buildTopicObj(topics);
      // this.ga.eventEmitter('use_filter', 'engagement', 'Topics filter used');
    }
  }

  buildTopicObj(objRef) {
    return Object.assign({}, {
      arts: [...objRef.arts],
      business: [...objRef.business],
      computers: [...objRef.computers],
      games: [...objRef.games],
      health: [...objRef.health],
      home: [...objRef.home],
      recreation: [...objRef.recreation],
      regional: [...objRef.regional],
      science: [...objRef.science],
      shopping: [...objRef.shopping],
      society: [...objRef.society],
      sports: [...objRef.sports]
    });
  }
}
