import { animate, style, transition, trigger } from '@angular/animations';
import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./word-filter.component.scss'],
})
export class WordFilterComponent implements OnInit {
  public includeList = [];
  public excludeList = [];

  get userOption(): any {
    return this.userOption;
  }

  @Input()
  set userOption(val: any) {
    const { include, exclude } = val;
    if (JSON.stringify(include) != JSON.stringify(this.includeList)) {
      this.includeList = new Array();
      this.includeList.push(...include);
    } else if (JSON.stringify(exclude) != JSON.stringify(this.excludeList)) {
      this.excludeList = new Array();
      this.excludeList.push(...exclude);
    }

    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  @Input() wordFilterType: string;

  wordDisplayList: Array<string>;
  wordOptionForm: FormGroup;
  wordListToggle = true;
  segmentValue = 'include';
  showFilter = false;

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public filtersLoading: boolean = false;
  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    private ga: GoogleAnalyticsService,
    private toastController: ToastController
    ) {
      this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filtersLoading = status;
      });
    }

  ngOnInit() {
    this.wordOptionForm = new FormGroup({
      wordInput: new FormControl(null, Validators.required)
    });

    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  onSegmentChange() {
    this.wordDisplayList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
  }

  addWord() {
    const wordList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
    const val = this.wordOptionForm.value.wordInput.toLowerCase();
    if (!this.includeList.includes(val) && !this.excludeList.includes(val)) {
      wordList.push(val);
      this.wordDisplayList = wordList;

      this.userOptionChanged.emit({
        include: [...this.includeList],
        exclude: [...this.excludeList],
        name: this.wordFilterType
      });

      this.ga.eventEmitter('use_filter', 'engagement', `${this.wordFilterType} filter used`);
    } else {
      this.presentToast(`You are already filtering ${val}`, 'danger');
    }

    this.wordOptionForm.reset();
  }

  removeWord(index) {
    if (this.filtersLoading) return;

    const wordList = this.segmentValue === 'include' ? this.includeList : this.excludeList;
    wordList.splice(index, 1);

    this.wordDisplayList = wordList;
    this.userOptionChanged.emit({
      include: [...this.includeList],
      exclude: [...this.excludeList],
      name: this.wordFilterType
    });
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}
