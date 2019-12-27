import { ModelArticleFilterInput, ModelStringKeyConditionInput } from './neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterOptions: any;
  filterOptions$ = new Subject<object>();

  constructor() { }

  buildFilterOptions(userOptions): object {

    return {
      toneUpperRange: userOptions.toneUserOption.value.upper,
      toneLowerRange: userOptions.toneUserOption.value.lower,
      qualityUpperRange: userOptions.qualityUserOption.value.upper,
      qualityLowerRange: userOptions.qualityUserOption.value.lower,
      sourcesToInclude: userOptions.sourcesUserOption.include,
      sourcesToExclude: userOptions.sourcesUserOption.exclude,
      topicsToInclude: userOptions.topicsUserOption.include,
      topicsToExclude: userOptions.topicsUserOption.exclude,
      keywordsToInclude: userOptions.keywordsUserOption.include,
      keywordsToExclude: userOptions.keywordsUserOption.exclude
    };
  }

  updateFilterOptions(newFilterOptions) {
    this.filterOptions = newFilterOptions;
    this.filterOptions$.next(this.filterOptions);
  }

  getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  getQueryFilters(): ModelArticleFilterInput {
    const newDate = new Date();
    const dateLimit = new Date(newDate);
    const ops = this.filterOptions;
    dateLimit.setDate(dateLimit.getDate() - 3);

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
        ops.topicsToExclude.length > 0 || ops.keywordsToInclude.length > 0 || ops.keywordsToExclude.length > 0) {
      filterInput.and = [];

      if (ops.sourcesToInclude.length > 0) {
        const orFilter: Array<ModelArticleFilterInput> = [];

        if (ops.sourcesToInclude) {
          orFilter.push(...this.buildWordFilter(ops.sourcesToInclude, 'sourceTitle', 'eq'));
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


  setDateRange(): ModelStringKeyConditionInput {
    const newDate = new Date();
    const dateLimit = new Date(newDate);
    dateLimit.setDate(dateLimit.getDate() - 3);

    return {
      between: [
        dateLimit.toISOString(), newDate.toISOString()
      ]
    };
  }
}
