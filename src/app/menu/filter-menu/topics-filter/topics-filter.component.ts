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
import { FilterService } from 'src/app/services/filter.service';
import { Subscription } from 'rxjs';

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
      console.log('(onInput) val: ', val);

    if (val && JSON.stringify(val) != JSON.stringify(this.option)) {
      this.option['include'] = this.buildTopicObj(val['include']);
      this.option['exclude'] = this.buildTopicObj(val['exclude']); 
      // console.log('(onInput) this.option: ', this.option);

      this.filterValues = this.convertTopicObj(this.option);
      console.log('filter value', this.filterValues);

      // if (JSON.stringify(this.option[this.segmentValue]) !== JSON.stringify(this.filterValues)) {
      //   this.copyTopicObj(this.filterValues, this.option[this.segmentValue]);
      //   console.log('(onInput) this.filterValues: ', this.filterValues);
      // }
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    ) {
      this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filtersLoading = status;
      });
    }

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
    let keys = {
      'arts': [], 'games': [], 'society': [],
      'business': [], 'health': [], 'recreation': [],
      'science': [], 'sports': [], 'computers': [], 'home': [],
      'shopping': []
    };

    Object.keys(keys).forEach(k => {
      keys[k] = {
        include: ogObj.include[k],
        exclude: ogObj.exclude[k]
      }
    });

    return keys;
  }

  isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1) == JSON.stringify(arr2);
  }

  onSegmentChange(event) {
    this.segmentValue = event.detail.value;
  }

  handleTopicChange(event) {
    const { name: eventName, value: eventValue } = event;
    // let hasChanged = false;

    // let res: any = {}; 
    // res['include'] = this.buildTopicObj(this.option.include);
    // res['exclude'] = this.buildTopicObj(this.option.exclude);

    console.log('topic change event received: ', event);

    if (!this.isArrEq(this.option.include[eventName], eventValue.include) || !this.isArrEq(this.option.exclude[eventName], eventValue.exclude)) {
      this.filterService.updateFilterLoading(true);
      this.filterService.addToTopicOptionsWrapper([...eventValue.include], [...eventValue.exclude], eventName);
    }

    // if (hasChanged) {
    //   // res.name = 'Topics';
    //   console.log('(handleTopicChange) topics to emit: ', res);
    //   this.filterService.addTopicsOptions(res);
    //   // this.userOptionChanged.emit(res);
    // }
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
