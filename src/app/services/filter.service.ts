import { ModelArticleFilterInput, UpdateConfigInput } from './neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as TopicGroups from '../model/topic-options';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterOptions: any;
  filterOptions$ = new Subject<object>();

  topicsUserOption: any = {};

  constructor() { }

  buildFilterOptions(userOptions) {

    return {
      id: this.filterOptions.id,
      toneUpperRange: userOptions.toneUserOption.value.upper,
      toneLowerRange: userOptions.toneUserOption.value.lower,
      qualityUpperRange: userOptions.qualityUserOption.value.upper,
      qualityLowerRange: userOptions.qualityUserOption.value.lower,
      sourcesToInclude: userOptions.sourcesUserOption.include,
      sourcesToExclude: userOptions.sourcesUserOption.exclude,
      topicsToInclude: this.mergeTopics(userOptions.topicsUserOption.include),
      topicsToExclude: this.mergeTopics(userOptions.topicsUserOption.exclude),
      keywordsToInclude: userOptions.keywordsUserOption.include,
      keywordsToExclude: userOptions.keywordsUserOption.exclude,
      locationsToInclude: userOptions.locationsUserOption.include,
      locationsToExclude: userOptions.locationsUserOption.exclude
    };
  }

  mergeTopics(optionObj): Array<string> {
    return [
      ...optionObj.arts,
      ...optionObj.games,
      ...optionObj.news,
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

  updateFilterOptions(newFilterOptions) {
    this.filterOptions = newFilterOptions;

    if (typeof newFilterOptions.topicsToInclude === 'string' || typeof newFilterOptions.topicsToExclude === 'string') {
      const parsedInclude = JSON.parse(newFilterOptions.topicsToInclude);
      const parsedExclude = JSON.parse(newFilterOptions.topicsToExclude);
      this.topicsUserOption.include = parsedInclude;
      this.topicsUserOption.exclude = parsedExclude;
      this.filterOptions.topicsToInclude = this.mergeTopics(parsedInclude);
      this.filterOptions.topicsToExclude = this.mergeTopics(parsedExclude);
    }

    this.filterOptions$.next(this.filterOptions);
  }

  getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  addToFilterOptions(optionType, operation, value) {
    if (optionType === 'topics') {
      console.log('addToFilterOptions topics user option', this.topicsUserOption);
      console.log('addToFilterOptions filter options', this.filterOptions);

      if (operation === 'include') {
        this.filterOptions.topicsToInclude.push(value.toLowerCase());
      } else {
        this.filterOptions.topicsToExclude.push(value.toLowerCase());
      }

      const topicGroup = this.findTopicsGroup(value);
      console.log('group: ', topicGroup);
      this.topicsUserOption[operation][topicGroup.toLowerCase()].push(value);
    } else if (optionType === 'keywords') {
      if (operation === 'include') {
        this.filterOptions.keywordsToInclude.push(value.toLowerCase());
      } else {
        this.filterOptions.keywordsToExclude.push(value.toLowerCase());
      }
    }
    this.filterOptions$.next(this.filterOptions);
  }

  findTopicsGroup(value: string) {
    console.log('find topics group params: ', value);
    let group;
    console.log('topic groups: ', TopicGroups);
    Object.keys(TopicGroups).forEach((groupKey) => {
      console.log('group key: ', groupKey);
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

  getQueryFilters(): ModelArticleFilterInput {
    const ops = this.filterOptions;

    const filterInput: ModelArticleFilterInput = {
      tone: {
        between: [
          ops.toneLowerRange, ops.toneUpperRange
        ]
      },
      quality: {
        between: [
          ops.qualityLowerRange, ops.qualityUpperRange
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

      if (ops.topicsToExclude.length > 0) {
        console.log('there are topics to exclude');
        filterInput.and.push(...this.buildWordFilter(ops.topicsToExclude, 'topics', 'notContains'));
      }
    }

    console.log('filter input', filterInput);

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
