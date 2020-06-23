import { ModelArticleFilterInput, UpdateConfigInput, APIService } from './neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as TopicGroups from '../model/topic-options';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterSaved: boolean = true;
  filterSaved$ = new Subject<boolean>();

  filterLoaded: boolean = true;
  filterLoaded$ = new Subject<boolean>();

  filterOptions: any;
  filterOptions$ = new Subject<object>();

  topicsUserOption: any = {};

  constructor(private neutrifyAPI: APIService) { }

  buildFilterOptions(userOptions) {

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
      locationsToExclude: userOptions.locationsUserOption.exclude
    });
  }

  mergeTopics(optionObj): Array<string> {
    return [
      ...optionObj.arts,
      ...optionObj.games,
      ...optionObj.regional,
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

  async updateFilterOptions(inputFilterOptions) {
    let newFilterOptions = Object.assign({}, inputFilterOptions);

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
          this.topicsUserOption.include[topicGroup.toLowerCase()].push(value);
        }
      });

      newFilterOptions.topicsToExclude.forEach(value => {
        const topicGroup = this.findTopicsGroup(value);
        if (!this.topicsUserOption.exclude[topicGroup.toLowerCase()].includes(value)) {
          this.topicsUserOption.exclude[topicGroup.toLowerCase()].push(value);
        }
      });
    }
    

    this.filterOptions = newFilterOptions;
    this.filterOptions$.next(this.filterOptions);
  }

  getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  async updateFilterSaved(isSaved: boolean) {
    this.filterSaved$.next(isSaved);
  }

  getFilterSavedStatus() {
    return this.filterSaved$.asObservable();
  }

  async updateFilterLoaded(isSaved: boolean) {
    this.filterSaved$.next(isSaved);
  }

  getFilterLoadedStatus() {
    return this.filterSaved$.asObservable();
  }

  addToFilterOptions(optionType, operation, value) {
    if (optionType === 'topics') {

      if (operation === 'include') {
        this.filterOptions.topicsToInclude.push(value.toLowerCase());
      } else {
        this.filterOptions.topicsToExclude.push(value.toLowerCase());
      }

      const topicGroup = this.findTopicsGroup(value);
      if (!this.topicsUserOption[operation][topicGroup.toLowerCase()].includes(value)) {
        this.topicsUserOption[operation][topicGroup.toLowerCase()].push(value);
      }
    }

    if (operation === 'include') {
      if (optionType === 'keywords') {
        this.filterOptions.keywordsToInclude.push(value.toLowerCase());
      } else if (optionType === 'locations') {
        this.filterOptions.locationsToInclude.push(value.toLowerCase());
      } else if (optionType === 'sources') {
        this.filterOptions.sourcesToInclude.push(value.toLowerCase());
      }
    } else {
      if (optionType === 'keywords') {
        this.filterOptions.keywordsToExclude.push(value.toLowerCase());
      } else if (optionType === 'locations') {
        this.filterOptions.locationsToExclude.push(value.toLowerCase());
      }  else if (optionType === 'sources') {
        this.filterOptions.sourcesToExclude.push(value.toLowerCase());
      }
    }
    
    this.updateFilterSaved(false);
    this.filterOptions$.next(this.filterOptions);
  }

  findTopicsGroup(value: string) {
    let group;
    Object.keys(TopicGroups).forEach((groupKey) => {
      if (group) {
        return;
      }

      if (groupKey.toLowerCase() === value.toLowerCase()) {
        group = groupKey;
      }

      const index = TopicGroups[groupKey].findIndex((option: any) => {
        return option.value === value.toLowerCase();
      });

      if (index !== -1) {
        group = groupKey;
      }
    });

    return group;
  }

  marshalRequest(): UpdateConfigInput {
    const req = this.filterOptions;
    req.topicsToInclude = JSON.stringify(this.topicsUserOption.include);
    req.topicsToExclude = JSON.stringify(this.topicsUserOption.exclude);

    return req;
  }

  async saveFilters(): Promise<boolean> {
    let result: boolean;

    try {
      const reqBody: UpdateConfigInput = this.marshalRequest();
      await this.neutrifyAPI.UpdateConfig(reqBody);
      this.updateFilterSaved(true);
      result = true;
    } catch (e) {
      console.log('Could not save filters. Service returned this error: ', e);
      this.updateFilterSaved(false);
      result = false;
    }
    return result;
  }

  async loadFilters(username) {
    let result: boolean;

    try {
      const loadedConfig = await this.neutrifyAPI.ConfigByOwner(username, null, null , 1);
      await this.updateFilterOptions(loadedConfig.items[0]);
      this.updateFilterLoaded(true);
      result = true;
    } catch (error) {
      this.updateFilterLoaded(false);
      result = false;
      console.log('Could not load filters. Service returned this error: ', error);
    }

    return result;
  }

  blankFilterObj() {
    return {
      id: this.filterOptions.id,
      keywordsToInclude: [],
      keywordsToExclude: [],
      savedArticleIds: [],
      sourcesToInclude: [],
      sourcesToExclude: [],
      toneUpperRange: 1,
      toneLowerRange: -1,
      topicsToInclude: JSON.stringify({
        arts: [],
        games: [],
        news: [],
        regional: [],
        society: [],
        business: [],
        health: [],
        recreation: [],
        science: [],
        sports: [],
        computers: [],
        home: [],
        shopping: [],
      }),
      topicsToExclude: JSON.stringify({
        arts: [],
        games: [],
        news: [],
        regional: [],
        society: [],
        business: [],
        health: [],
        recreation: [],
        science: [],
        sports: [],
        computers: [],
        home: [],
        shopping: [],
      }),
      locationsToInclude: [],
      locationsToExclude: []
    };
  }

  getQueryFilters(): ModelArticleFilterInput {
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
        ops.locationsToInclude.length > 0 || ops.locationsToExclude.length > 0) {
      filterInput.and = [];

      if (ops.sourcesToInclude.length > 0 || ops.locationsToInclude.length > 0) {
        if (ops.sourcesToInclude.length > 0) {
          const sourceFilter: Array<ModelArticleFilterInput> = [];
          sourceFilter.push(...this.buildWordFilter(ops.sourcesToInclude, 'sourceTitle', 'eq'));
          filterInput.and.push({or: sourceFilter});
        }

        if (ops.locationsToInclude.length > 0) {
          const locationFilter: Array<ModelArticleFilterInput> = [];
          locationFilter.push(...this.buildWordFilter(ops.locationsToInclude, 'sourceCountry', 'eq'));
          filterInput.and.push({or: locationFilter});
        }
      }

      if (ops.keywordsToInclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToInclude, 'keywords', 'contains'));
      }

      if (typeof ops.topicsToInclude === 'string') {
        ops.topicsToInclude = this.mergeTopics(JSON.parse(ops.topicsToInclude));
      }

      if (ops.topicsToInclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToInclude, 'topics', 'contains'));
      }

      if (ops.sourcesToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.sourcesToExclude, 'sourceTitle', 'ne'));
      }

      if (ops.keywordsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToExclude, 'keywords', 'notContains'));
      }

      if (ops.locationsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.locationsToExclude, 'sourceCountry', 'ne'));
      }

      if (typeof ops.topicsToExclude === 'string') {
        ops.topicsToExclude = this.mergeTopics(JSON.parse(ops.topicsToExclude));
      }

      if (ops.topicsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToExclude, 'topics', 'notContains'));
      }
    }

    return filterInput;
  }

  buildWordFilter(wordList, key, operation): any {
    return wordList.map((word: string) => {
      const res: object = {};

      res[key] = {};
      res[key][operation] = word.trim().toLowerCase();
      return res;
    });
  }
}
