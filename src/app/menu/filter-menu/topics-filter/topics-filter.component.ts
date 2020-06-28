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
  public filterValues: any = {};

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

    if (val && JSON.stringify(val) !== JSON.stringify(this.option)) {
      this.option['include'] = this.buildTopicObj(val['include']);
      this.option['exclude'] = this.buildTopicObj(val['exclude']); 
      // console.log('(onInput) this.option: ', this.option);

      this.filterValues = this.convertTopicObj(this.option);
      // console.log('filter value', this.filterValues);

      // if (JSON.stringify(this.option[this.segmentValue]) !== JSON.stringify(this.filterValues)) {
      //   this.copyTopicObj(this.filterValues, this.option[this.segmentValue]);
      //   console.log('(onInput) this.filterValues: ', this.filterValues);
      // }
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.selectOptions = [
      { name: 'arts', label: 'Arts', values: Arts },
      { name: 'games', label: 'Games', values: Games },
      { name: 'society', label: 'Society', values: Society },
      { name: 'business', label: 'Business', values: Business },
      { name: 'health', label: 'Health', values: Health },
      { name: 'recreation', label: 'Recreation', values: Recreation },
      { name: 'science', label: 'Science', values: Science },
      { name: 'sports', label: 'Sports', values: Sports },
      { name: 'computers', label: 'Computers', values: Computers },
      { name: 'home', label: 'Home', values: Home },
      { name: 'shopping', label: 'Shopping', values: Shopping },
    ];
  }

  buildTopicObj(objRef?) {
    return Object.assign({}, {
      arts: objRef.arts ? [...objRef.arts] : [],
      business: objRef.business ? [...objRef.business] : [],
      computers: objRef.computers ? [...objRef.computers] : [],
      games: objRef.games ? [...objRef.games] : [],
      health: objRef.health ? [...objRef.health] : [],
      home: objRef.home ? [...objRef.home] : [],
      recreation: objRef.recreation ? [...objRef.recreation] : [],
      regional: objRef.regional ? [...objRef.regional] : [],
      science: objRef.science ? [...objRef.science] : [],
      shopping: objRef.shopping ? [...objRef.shopping] : [],
      society: objRef.society ? [...objRef.society] : [],
      sports: objRef.sports ? [...objRef.sports] : []
    });
  }

  copyTopicObj(ogObj, newObj) {
    Object.keys(newObj).forEach((key) => {
      if (!ogObj || !this.isArrEq(ogObj[key], newObj[key])) ogObj[key] = newObj[key];
    });
  }

  convertTopicObj(ogObj) {
    // console.log('ogObj', ogObj);
    const keys = [
      'arts', 'games', 'society',
      'business', 'health', 'recreation',
      'science', 'sports', 'computers', 'home',
      'shopping'
    ];

    return {
      arts: {
        include: ogObj.include['arts'],
        exclude: ogObj.exclude['arts']
      },
      games: {
        include: ogObj.include['games'],
        exclude: ogObj.exclude['games']
      },
      society: {
        include: ogObj.include['society'],
        exclude: ogObj.exclude['society']
      },
      business: {
        include: ogObj.include['business'],
        exclude: ogObj.exclude['business']
      },
      health: {
        include: ogObj.include['health'],
        exclude: ogObj.exclude['health']
      },
      recreation: {
        include: ogObj.include['recreation'],
        exclude: ogObj.exclude['recreation']
      },
      science: {
        include: ogObj.include['science'],
        exclude: ogObj.exclude['science']
      },
      sports: {
        include: ogObj.include['sports'],
        exclude: ogObj.exclude['sports']
      },
      computers: {
        include: ogObj.include['computers'],
        exclude: ogObj.exclude['computers']
      },
      home: {
        include: ogObj.include['home'],
        exclude: ogObj.exclude['home']
      },
      shopping: {
        include: ogObj.include['shopping'],
        exclude: ogObj.exclude['shopping']
      },
    };
  }

  isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  onSegmentChange(event) {
    this.segmentValue = event.detail.value;
  }

  handleTopicChange(event) {
    let hasChanged = false;
    console.log('topic change event received: ', event);

    if (!this.isArrEq(this.option.include[event.name], event.value.include)) {
      this.option.include[event.name] = event.value.include;
      hasChanged = true;
    }
    
    if (!this.isArrEq(this.option.exclude[event.name], event.value.exclude)) {
      this.option.exclude[event.name] = event.value.exclude;
      hasChanged = true;
    }

    if (hasChanged) {
      this.option.name = 'Topics';
      this.userOptionChanged.emit(this.option);
    }
  //   let topics;

  //   if (this.segmentValue === 'include') {
  //     topics = this.includedTopics;
  //   } else {
  //     topics = this.excludedTopics;
  //   }



  //   if (event && event.target) {
  //     topics[event.target.name] = event.target.value;
  //   }

  //   if (JSON.stringify(topics) !== JSON.stringify(this.copiedOptions[this.segmentValue])) {
  //     this.option[this.segmentValue] = topics;
  //     this.option.name = 'Topics';
  //     this.userOptionChanged.emit(this.option);
      
  //     this.copiedOptions[this.segmentValue] = this.buildTopicObj(topics);
  //   }
  }
}
