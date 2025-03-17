import { ModelArticleFilterInput, UpdateConfigInput, APIService } from './mock-neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as TopicGroups from '../../assets/model/topic-options';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterSaved = true;
  public filterSaved$ = new Subject<boolean>();

  public filterLoaded = true;
  public filterLoaded$ = new Subject<boolean>();

  public filterOptions: any;
  public filterOptions$ = new Subject<unknown>();

  public filtersLoading = false;
  public filtersLoading$ = new Subject<boolean>();

  public topicsUserOption: any = {};

  constructor(
    private neutrifyAPI: APIService,
    private toastController: ToastController,
    private storage: Storage
    ) { }

  public buildFilterOptions(userOptions) {

    return Object.assign({}, {
      id: this.filterOptions.id,
      toneUpperRange: userOptions.toneUserOption.value.upper,
      toneLowerRange: userOptions.toneUserOption.value.lower,
      sourcesToInclude: userOptions.sourcesUserOption.include,
      sourcesToExclude: userOptions.sourcesUserOption.exclude,
      topicsToInclude: this.mergeTopics(userOptions.topicsUserOption.include),
      topicsToExclude: this.mergeTopics(userOptions.topicsUserOption.exclude),
      keywordsToInclude: userOptions.keywordsUserOption.include,
      keywordsToExclude: userOptions.keywordsUserOption.exclude,
      locationsToInclude: userOptions.locationsUserOption.include,
      locationsToExclude: userOptions.locationsUserOption.exclude,
      biasToInclude: userOptions.biasUserOption.include,
      biasToExclude: userOptions.biasUserOption.exclude,
    });
  }

  public mergeTopics(optionObj): Array<string> {
    return [
      ...optionObj.arts,
      ...optionObj.games,
      ...optionObj.society,
      ...optionObj.business,
      ...optionObj.health,
      ...optionObj.recreation,
      ...optionObj.science,
      ...optionObj.sports,
      ...optionObj.computers,
      ...optionObj.home,
      ...optionObj.shopping,
    ];
  }

  public unmarshalFilter(data): any {
    return {
      id: data.id,
      keywordsToInclude: data.keywordsToInclude,
      keywordsToExclude: data.keywordsToExclude,
      toneUpperRange: data.toneUpperRange,
      toneLowerRange: data.toneLowerRange,
      topicsToInclude: data.topicsToInclude,
      topicsToExclude: data.topicsToExclude,
      sourcesToInclude: data.sourcesToInclude,
      sourcesToExclude: data.sourcesToExclude,
      locationsToInclude: data.locationsToInclude,
      locationsToExclude: data.locationsToExclude,
      biasToInclude: data.biasToInclude,
      biasToExclude: data.biasToExclude
    };
  }

  public async updateFilterOptions(inputFilterOptions) {
    const newFilterOptions = Object.assign({}, inputFilterOptions);

    if (JSON.stringify(this.filterOptions) === JSON.stringify(newFilterOptions)) {
      this.filterOptions$.next(this.filterOptions);
      return;
    }

    if ((typeof newFilterOptions.topicsToInclude) === 'string' || (typeof newFilterOptions.topicsToExclude) === 'string') {
      const parsedInclude = JSON.parse(newFilterOptions.topicsToInclude);
      const parsedExclude = JSON.parse(newFilterOptions.topicsToExclude);
      this.topicsUserOption.include = parsedInclude;
      this.topicsUserOption.exclude = parsedExclude;
      newFilterOptions.topicsToInclude = this.mergeTopics(parsedInclude);
      newFilterOptions.topicsToExclude = this.mergeTopics(parsedExclude);
    } else {

      newFilterOptions.topicsToInclude.forEach(value => {
        const topicGroup = this.findTopicsGroup(value);
        if (!this.topicsUserOption.include[topicGroup.toLowerCase()].includes(value)) {
          this.topicsUserOption.include[topicGroup.toLowerCase()].push(value.toLowerCase());
        }
      });

      newFilterOptions.topicsToExclude.forEach(value => {
        const topicGroup = this.findTopicsGroup(value);
        if (!this.topicsUserOption.exclude[topicGroup.toLowerCase()].includes(value)) {
          this.topicsUserOption.exclude[topicGroup.toLowerCase()].push(value.toLowerCase());
        }
      });
    }

    this.filterOptions = newFilterOptions;
    this.filterOptions$.next(this.filterOptions);
    this.updateFilterSaved(false);
  }

  public getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  public async updateFilterSaved(isSaved: boolean) {
    this.filterSaved = isSaved;
    this.filterSaved$.next(isSaved);
  }

  public getFilterSavedStatus() {
    return this.filterSaved$.asObservable();
  }

  public async updateFilterLoaded(isLoaded: boolean) {
    this.filterLoaded = isLoaded;
    this.filterLoaded$.next(isLoaded);
  }

  public getFilterLoadedStatus() {
    return this.filterLoaded$.asObservable();
  }

  public async updateFilterLoading(isLoading: boolean) {
    this.filtersLoading = isLoading;
    this.filtersLoading$.next(isLoading);
  }

  public getFilterLoading() {
    return this.filtersLoading$.asObservable();
  }

  public addSingleFilter(optionType: string, operation: string, value: string) {
    const input = value.toLowerCase();
    const newFilterOptions = Object.assign({}, this.filterOptions);
    let target: Array<string> = newFilterOptions[`${optionType}To${operation.charAt(0).toUpperCase() + operation.slice(1)}`];
    let rejected = false, topicGroup: string;

    if (!target.includes(input)) {
      let oppositeTarget: Array<string> = newFilterOptions[`${optionType}To${operation === 'include' ? 'Exclude' : 'Include'}`];

      if (optionType === 'topics') {
        topicGroup = this.findTopicsGroup(input).toLowerCase();
        let oppositeTopics: Array<string> = this.topicsUserOption[operation === 'include' ? 'exclude' : 'include'][topicGroup];

        if (input === topicGroup) {
          target = target.filter(val => this.findTopicsGroup(val).toLowerCase() !== input);
          oppositeTarget = oppositeTarget.filter(val => this.findTopicsGroup(val).toLowerCase() !== input);
          this.topicsUserOption[operation][topicGroup] = new Array();
          oppositeTopics = new Array();
        } else if (target.includes(topicGroup)) {
          target = target.filter(val => val !== topicGroup);
          this.topicsUserOption[operation][topicGroup] = new Array();
        } else if (oppositeTarget.includes(topicGroup)) {
          oppositeTarget = oppositeTarget.filter(val => val !== topicGroup);
          oppositeTopics = new Array();
        }
        this.topicsUserOption[operation === 'include' ? 'exclude' : 'include'][topicGroup] = oppositeTopics.filter(val => val !== input);
        this.topicsUserOption[operation][topicGroup].push(input);
      }

      oppositeTarget = oppositeTarget.filter(val => val !== input);
      target.push(input);
      newFilterOptions[`${optionType}To${operation.charAt(0).toUpperCase() + operation.slice(1)}`] = target;
      newFilterOptions[`${optionType}To${operation === 'include' ? 'Exclude' : 'Include'}`] = oppositeTarget;
    } else {
      rejected = true;
      this.presentToast(`You are already filtering ${value.toLowerCase()}.`, 'danger');
    }

    if (!rejected) {
      this.updateFilterLoading(true);
      this.filterOptions = newFilterOptions;
      this.filterOptions$.next(this.filterOptions);
      this.updateFilterSaved(false);
    }
  }

  public async addToTopicOptionsWrapper(included: Array<string>, excluded: Array<string>, group: string) {
    if (!this.isArrEq(this.filterOptions.topicsToInclude, included)) {
      const res = await this.addToTopicOptions('include', included, group);
      this.filterOptions.topicsToInclude = res.target;
      this.filterOptions.topicsToExclude = res.oppositeTarget;
    }

    if (!this.isArrEq(this.filterOptions.topicsToExclude, excluded)) {
      const res = await this.addToTopicOptions('exclude', excluded, group);
      this.filterOptions.topicsToExclude = res.target;
      this.filterOptions.topicsToInclude = res.oppositeTarget;
    }

    this.filterOptions$.next(this.filterOptions);
    this.updateFilterSaved(false);
  }

  public async addToTopicOptions(operation, values, group) {
    const input = values.map(val => val.toLowerCase());

    let target: Array<string> = operation === 'include' ? [...this.filterOptions.topicsToInclude] : [...this.filterOptions.topicsToExclude];
    let oppositeTarget: Array<string> =
    operation === 'include' ? [...this.filterOptions.topicsToExclude] : [...this.filterOptions.topicsToInclude];

    let topics: Array<string> = this.topicsUserOption[operation][group];
    let oppositeTopics: Array<string> = this.topicsUserOption[operation === 'include' ? 'exclude' : 'include'][group];

    if (input.includes(group.toLowerCase())) {
      target = target.filter(val => this.findTopicsGroup(val).toLowerCase() !== group.toLowerCase());
      oppositeTarget = oppositeTarget.filter(val => this.findTopicsGroup(val).toLowerCase() !== group.toLowerCase());
      topics = new Array();
      oppositeTopics = new Array();

      target.push(group.toLowerCase());
      topics.push(group.toLowerCase());

      this.topicsUserOption[operation][group] = topics;
      this.topicsUserOption[operation === 'include' ? 'exclude' : 'include'][group] = oppositeTopics;
      return {target, oppositeTarget};
    }

    if (input.length) {
      target = target.filter(topic => group.toLowerCase() !== this.findTopicsGroup(topic).toLowerCase());

      input.forEach(val => {
        if (!target.includes(val)) {
          target.push(val.toLowerCase());
          oppositeTarget = oppositeTarget.filter(topic => topic !== val);
          oppositeTopics = oppositeTopics.filter(topic => topic !== val);
        }
      });

      topics = input;
    } else {
      target = target.filter((topic) => group !== this.findTopicsGroup(topic).toLowerCase());
      topics = new Array();
    }

    this.topicsUserOption[operation][group] = topics;
    this.topicsUserOption[operation === 'include' ? 'exclude' : 'include'][group] = oppositeTopics;

    return {target, oppositeTarget};
  }

  public findTopicsGroup(value: string): string {
    let group;
    Object.keys(TopicGroups).forEach((groupKey) => {
      if (group) {
        return;
      }

      if (groupKey.toLowerCase() === value.toLowerCase()) {
        group = groupKey;
      }

      const index = TopicGroups[groupKey].findIndex((option: any) => option.value === value.toLowerCase());

      if (index !== -1) {
        group = groupKey;
      }
    });

    return group;
  }

  public marshalRequest(filterOptions, topicFilters): UpdateConfigInput {
    return {
      id: filterOptions.id,
      keywordsToInclude: filterOptions.keywordsToInclude,
      keywordsToExclude: filterOptions.keywordsToExclude,
      toneUpperRange: filterOptions.toneUpperRange,
      toneLowerRange: filterOptions.toneLowerRange,
      sourcesToInclude: filterOptions.sourcesToInclude,
      sourcesToExclude: filterOptions.sourcesToExclude,
      locationsToInclude: filterOptions.locationsToInclude,
      locationsToExclude: filterOptions.locationsToExclude,
      topicsToInclude: JSON.stringify(topicFilters.include),
      topicsToExclude: JSON.stringify(topicFilters.exclude),
      biasToInclude: filterOptions.biasToInclude,
      biasToExclude: filterOptions.biasToExclude
    };
  }

  public async saveFilters(local?: boolean): Promise<boolean> {
    let result: boolean;

    try {
      const reqBody: UpdateConfigInput = this.marshalRequest(this.filterOptions, this.topicsUserOption);
      if (local) {
        await this.storage.set('neutrify_filters', JSON.stringify(reqBody));
      } else {
        await this.neutrifyAPI.UpdateConfig(reqBody);
      }

      this.updateFilterSaved(true);
      result = true;
    } catch (error) {
      console.log('Could not save filters. Service returned this error: ', error);
      this.updateFilterSaved(false);
      result = false;
    }
    return result;
  }

  public async loadFilters(username, local?: boolean) {
    let result: boolean;

    try {
      let loadedFilter;

      if (local) {
        loadedFilter = JSON.parse(await this.storage.get('neutrify_filters'));
      } else {
        loadedFilter = (await this.neutrifyAPI.ConfigByOwner(username, null, null , 1)).items[0];
      }

      await this.updateFilterOptions(loadedFilter);
      this.updateFilterSaved(true);
      this.updateFilterLoaded(true);
      result = true;
    } catch (error) {
      this.updateFilterSaved(false);
      this.updateFilterLoaded(false);
      result = false;
      console.log('Could not load filters. Service returned this error: ', error);
    }

    return result;
  }

  public blankFilterObj(id?: string) {
    return {
      id: this.filterOptions && this.filterOptions.id ? this.filterOptions.id : id,
      keywordsToInclude: [],
      keywordsToExclude: [],
      savedArticleIds: [],
      sourcesToInclude: [],
      sourcesToExclude: [],
      toneUpperRange: 1,
      toneLowerRange: -1,
      topicsToInclude: JSON.stringify(this.blankTopicObj()),
      topicsToExclude: JSON.stringify(this.blankTopicObj()),
      locationsToInclude: [],
      locationsToExclude: [],
      biasToInclude: [],
      biasToExclude: []
    };
  }

  public blankTopicObj() {
    return {
      arts: [],
      games: [],
      society: [],
      business: [],
      health: [],
      recreation: [],
      science: [],
      sports: [],
      computers: [],
      home: [],
      shopping: []
    };
  }

  public getQueryFilters(): ModelArticleFilterInput {
    const ops = this.filterOptions;
    const filterInput: ModelArticleFilterInput = {
      tone: {
        between: [
          ops.toneLowerRange, ops.toneUpperRange
        ]
      }
    };

    if (ops.sourcesToInclude.length > 0 || ops.sourcesToExclude.length > 0 || ops.topicsToInclude.length > 0 ||
        ops.topicsToExclude.length > 0 || ops.keywordsToInclude.length > 0 || ops.keywordsToExclude.length > 0 ||
        ops.locationsToInclude.length > 0 || ops.locationsToExclude.length > 0 || ops.biasToInclude.length > 0 ||
        ops.biasToExclude.length > 0) {
      filterInput.and = [];

      if (ops.sourcesToInclude.length > 0) {
        const sourceFilter: Array<ModelArticleFilterInput> = [];
        sourceFilter.push(...this.buildWordFilter(ops.sourcesToInclude, 'sourceTitle', 'eq', true));
        filterInput.and.push({or: sourceFilter});
      }

      if (ops.locationsToInclude.length > 0) {
        const locationFilter: Array<ModelArticleFilterInput> = [];
        locationFilter.push(...this.buildWordFilter(ops.locationsToInclude, 'sourceCountry', 'eq', true));
        filterInput.and.push({or: locationFilter});
      }

      if (ops.keywordsToInclude.length > 0) {
        const keywordFilter: Array<ModelArticleFilterInput> = [];
        keywordFilter.push(...this.buildWordFilter(ops.keywordsToInclude, 'keywords', 'contains', true));
        filterInput.and.push({or: keywordFilter});
      }

      if (ops.biasToInclude.length > 0) {
        const biasFilter: Array<ModelArticleFilterInput> = [];
        biasFilter.push(...this.buildWordFilter(ops.biasToInclude, 'biasRating', 'eq'));
        filterInput.and.push({or: biasFilter});
      }

      if (typeof ops.topicsToInclude === 'string') {
        ops.topicsToInclude = this.mergeTopics(JSON.parse(ops.topicsToInclude));
      }

      if (ops.topicsToInclude.length > 0) {
        const topicsFilter: Array<ModelArticleFilterInput> = [];
        topicsFilter.push(...this.buildWordFilter(ops.topicsToInclude, 'topics', 'contains', true));
        filterInput.and.push({or: topicsFilter});
      }

      if (ops.sourcesToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.sourcesToExclude, 'sourceTitle', 'ne', true));
      }

      if (ops.keywordsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToExclude, 'keywords', 'notContains', true));
      }

      if (ops.biasToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.biasToExclude, 'biasRating', 'ne'));
      }

      if (ops.locationsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.locationsToExclude, 'sourceCountry', 'ne', true));
      }

      if (typeof ops.topicsToExclude === 'string') {
        ops.topicsToExclude = this.mergeTopics(JSON.parse(ops.topicsToExclude));
      }

      if (ops.topicsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToExclude, 'topics', 'notContains', true));
      }
    }

    return filterInput;
  }

  public async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }

  private isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1).toLowerCase() === JSON.stringify(arr2).toLowerCase();
  }

  private buildWordFilter(wordList, key, operation, lowercase?: boolean): any {
    return wordList.map((word: string) => {
      const res: unknown = {};

      res[key] = {};
      if (lowercase) {
        res[key][operation] = word.trim().toLowerCase();
      } else {
        res[key][operation] = word.trim();
      }
      return res;
    });
  }


}
