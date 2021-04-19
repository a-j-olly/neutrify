import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  ARTS,
  GAMES,
  SOCIETY,
  BUSINESS,
  HEALTH,
  RECREATION,
  SCIENCE,
  SPORTS,
  COMPUTERS,
  HOME,
  SHOPPING
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
  @Input()
  set userOption(val: any) {

    if (val && JSON.stringify(val) !== JSON.stringify(this.option)) {
      this.option['include'] = this.buildTopicObj(val['include']);
      this.option['exclude'] = this.buildTopicObj(val['exclude']);

      this.filterValues = this.convertTopicObj(this.option);
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public filtersLoading = false;

  public segmentValue = 'include';
  public showFilter = false;
  public selectOptions: any = {};
  public filterValues: any = {};

  private option: any = {};
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    ) {
      this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filtersLoading = status;
      });
    }

  public ngOnInit() {
    this.selectOptions = [
      { name: 'arts', label: 'Arts', values: ARTS },
      { name: 'games', label: 'Games', values: GAMES },
      { name: 'society', label: 'Society', values: SOCIETY },
      { name: 'business', label: 'Business', values: BUSINESS },
      { name: 'health', label: 'Health', values: HEALTH },
      { name: 'recreation', label: 'Recreation', values: RECREATION },
      { name: 'science', label: 'Science', values: SCIENCE },
      { name: 'sports', label: 'Sports', values: SPORTS },
      { name: 'computers', label: 'Computers', values: COMPUTERS },
      { name: 'home', label: 'Home', values: HOME },
      { name: 'shopping', label: 'Shopping', values: SHOPPING },
    ];
  }

  public onSegmentChange(event) {
    this.segmentValue = event.detail.value;
  }

  public async handleTopicChange(event) {
    const { name: eventName, value: eventValue } = event;

    if (!this.isArrEq(this.option.include[eventName], eventValue.include)
    || !this.isArrEq(this.option.exclude[eventName], eventValue.exclude)) {
      this.filterService.updateFilterLoading(true);
      await this.filterService.addToTopicOptionsWrapper([...eventValue.include], [...eventValue.exclude], eventName);
    }
  }

  private buildTopicObj(objRef?) {
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

  private convertTopicObj(ogObj) {
    const keys = {
      arts: [], games: [], society: [],
      business: [], health: [], recreation: [],
      science: [], sports: [], computers: [], home: [],
      shopping: []
    };

    Object.keys(keys).forEach(k => {
      keys[k] = {
        include: ogObj.include[k],
        exclude: ogObj.exclude[k]
      };
    });

    return keys;
  }

  private isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
