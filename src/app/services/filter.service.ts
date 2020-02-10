import { ModelArticleFilterInput, ModelStringKeyConditionInput, GetConfigQuery, UpdateConfigInput } from './neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

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
      ...optionObj.sport,
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
        const orFilter: Array<ModelArticleFilterInput> = [];

        if (ops.sourcesToInclude) {
          orFilter.push(...this.buildWordFilter(ops.sourcesToInclude, 'sourceTitle', 'eq'));
        }

        if (ops.locationsToInclude) {
          orFilter.push(...this.buildWordFilter(ops.locationsToInclude, 'sourceCountry', 'eq'));
        }

        filterInput.and.push({or: orFilter});
      }

      if (ops.keywordsToInclude) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToInclude, 'keywords', 'contains'));
      }

      if (ops.topicsToInclude) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToInclude, 'topics', 'contains'));
      }

      if (ops.sourcesToExclude) {
        filterInput.and.push(...this.buildWordFilter(ops.sourcesToExclude, 'sourceTitle', 'ne'));
      }

      if (ops.keywordsToExclude) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToExclude, 'keywords', 'notContains'));
      }

      if (ops.locationsToExclude) {
        filterInput.and.push(...this.buildWordFilter(ops.locationsToExclude, 'sourceCountry', 'ne'));
      }

      if (ops.topicsToExclude) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToExclude, 'topics', 'notContains'));
      }
    }

    return filterInput;
  }

  buildWordFilter(wordList, key, operation): any {
    return wordList.map((word: string) => {
      const res: object = {};

      res[key] = {};
      res[key][operation] = word.toLowerCase();
      return res;
    });
  }
}
