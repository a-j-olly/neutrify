import { animate, style, transition, trigger } from '@angular/animations';
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
} from '../../../../assets/model/topic-options';
import { FilterService } from 'src/app/services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topics-filter',
  templateUrl: './topics-filter.component.html',
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ],
  styleUrls: ['./topics-filter.component.scss'],
})
export class TopicsFilterComponent implements OnInit {
  private option: any = {};
  public segmentValue = 'include';
  public showFilter = false;
  public selectOptions: any = {};
  public filterValues: any = {};

  @Input()
  set userOption(val: any) {

    if (val && JSON.stringify(val) != JSON.stringify(this.option)) {
      this.option['include'] = this.buildTopicObj(val['include']);
      this.option['exclude'] = this.buildTopicObj(val['exclude']); 

      this.filterValues = this.convertTopicObj(this.option);
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public filterLoading: boolean = false;
  private filterLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    ) {
      this.filterLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filterLoading = status;
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

  async handleTopicChange(event) {
    const { name: eventName, value: eventValue } = event;

    if (!this.isArrEq(this.option.include[eventName], eventValue.include) || !this.isArrEq(this.option.exclude[eventName], eventValue.exclude)) {
      this.filterService.updateFilterLoading(true);
      await this.filterService.addToTopicOptionsWrapper([...eventValue.include], [...eventValue.exclude], eventName);
    }
  }
}
