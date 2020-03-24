import { Subscription } from 'rxjs';
import { FilterService } from './../../../services/filter.service';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import {
  Arts,
  Games,
  News,
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
export class TopicsFilterComponent implements OnInit, OnDestroy {
  private option: any;
  public includedTopics: any = {};
  public excludedTopics: any = {};
  public segmentValue = 'include';
  public showFilter = false;
  public selectOptions: any = {};

  public artsDisabled = false;
  public gamesDisabled = false;
  public newsDisabled = false;
  public societyDisabled = false;
  public businessDisabled = false;
  public healthDisabled = false;
  public recreationDisabled = false;
  public scienceDisabled = false;
  public sportsDisabled = false;
  public computersDisabled = false;
  public homeDisabled = false;
  public shoppingDisabled = false;

  topicUserOption$: Subscription;

  @Input()
  set userOption(val: any) {
    this.option = val;
    this.initTopicView();
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.selectOptions = [
      { name: 'arts', label: 'Arts', values: Arts, disabledField: 'artsDisabled' },
      { name: 'games', label: 'Games', values: Games, disabledField: 'gamesDisabled' },
      { name: 'news', label: 'News', values: News, disabledField: 'newsDisabled' },
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

  ngOnDestroy() {
    this.topicUserOption$.unsubscribe();
  }

  initTopicView() {
    this.includedTopics = this.option.include;
    this.excludedTopics = this.option.exclude;
    console.log('init included topics', this.includedTopics);
    console.log('init excluded topics', this.excludedTopics);

    this.initTopic('artsDisabled', 'arts');
    this.initTopic('gamesDisabled', 'games');
    this.initTopic('newsDisabled', 'news');
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

  onSegmentChange() {
    this.initTopicView();
  }

  initTopic(disableBoolRef, valStr) {
    console.log('init topic', this.option[this.segmentValue][valStr], disableBoolRef, valStr);
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
    // console.log('after init topic', this.option[this.segmentValue][valStr], disableBoolRef, valStr);
  }

  configureCheckbox(disableBool, valStr): boolean {
    let res = true;
    console.log('configure checkbox', this[`${this.segmentValue}dTopics`][valStr], disableBool, valStr);
    if (disableBool) {
      if (this[`${this.segmentValue}dTopics`][valStr].length !== 1 ||
       this[`${this.segmentValue}dTopics`][valStr][0].toLowerCase() !== valStr.toLowerCase()) {
        console.log('changing topic obj');
        this[`${this.segmentValue}dTopics`][valStr] = new Array();
        this[`${this.segmentValue}dTopics`][valStr].push(valStr.toLowerCase());
      } else {
        res = res && false;
      }
    } else {
      const topicIndex = this[`${this.segmentValue}dTopics`][valStr].findIndex(topic => topic.toLowerCase() === valStr.toLowerCase());

      if (topicIndex !== -1) {
        this[`${this.segmentValue}dTopics`][valStr].splice(topicIndex, 1);
      }
    }
    console.log('after configure checkbox', this[`${this.segmentValue}dTopics`][valStr] , disableBool, valStr);
    return res;
  }

  checkboxClicked(event) {
    let hasChanged = false;

    console.log('checkbox clicked', event);
    if (event && event.target) {
      if (event.target.name === 'arts') {
        hasChanged = this.configureCheckbox(this.artsDisabled, 'arts');
      } else if (event.target.name === 'games') {
        hasChanged = this.configureCheckbox(this.gamesDisabled, 'games');
      } else if (event.target.name === 'news') {
        hasChanged = this.configureCheckbox(this.newsDisabled, 'news');
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
      console.log('has changed');
      this.selectChanged(null);
    }
  }

  selectChanged(event) {
    if (event && event.target) {
      this[`${this.segmentValue}dTopics`][event.target.name] = event.target.value;
    }
    console.log('select changed with this event: ', event);
    console.log('topicList after change: ', this[`${this.segmentValue}dTopics`]);
    this.option[this.segmentValue] = this[`${this.segmentValue}dTopics`];
    this.option.name = 'Topics';
    console.log('options before emit', this.option);
    this.userOptionChanged.emit(this.option);
  }
}
