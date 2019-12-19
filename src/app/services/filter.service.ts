import { ModelArticleFilterInput, ModelStringKeyConditionInput } from './neutrify.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterOptions: any;
  filterOptions$ = new Subject<object>();

  constructor() { }

  buildFilterOptions(toneUserOption, qualityUserOption, topicsUserOption, keywordsUserOption): object {
    return {
      toneUpperRange: toneUserOption.value.upper,
      toneLowerRange: toneUserOption.value.lower,
      qualityUpperRange: qualityUserOption.value.upper,
      qualityLowerRange: qualityUserOption.value.lower,
      topicsToInclude: topicsUserOption.include,
      topicsToExclude: topicsUserOption.exclude,
      keywordsToInclude: keywordsUserOption.include,
      keywordsToExclude: keywordsUserOption.exclude
    };
  }

  updateFilterOptions(newFilterOptions) {
    console.log('new filter options', newFilterOptions);
    this.filterOptions = newFilterOptions;
    this.filterOptions$.next(this.filterOptions);
  }

  getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  getQueryFilters(): ModelArticleFilterInput {
    const newDate = new Date();
    const dateLimit = new Date(newDate);
    dateLimit.setDate(dateLimit.getDate() - 3);
    console.log('(getQueryFilters) filter options', this.filterOptions);

    const filterInput: ModelArticleFilterInput = {
      articleTone: {
        between: [
          this.filterOptions.toneLowerRange, this.filterOptions.toneUpperRange
        ]
      },
      articleQuality: {
        between: [
          this.filterOptions.qualityLowerRange, this.filterOptions.qualityUpperRange
        ]
      }
    };
    console.log('filter input: ', filterInput);
    return filterInput;
  }

  // filterArticles(articleArray: Array<any>): Array<any> {
  //   const ops = this.filterOptions;
  //   const filteredArray = articleArray.filter((article) => {
  //     console.log('article in question: ', article);
  //     return this.checkRange(ops.toneUpperRange, ops.toneLowerRange, article.articleSentiment)
  //     && this.checkRange(ops.qualityUpperRange, ops.qualityLowerRange, article.articleQuality)
  //     && this.checkList(ops.topicsToInclude, ops.topicsToExclude, article.topics)
  //     && this.checkList(ops.keywordsToInclude, ops.keywordsToExclude, article.keywords);
  //   });
  //   console.log('result of filtering: ', filteredArray);

  //   return filteredArray;
  // }

  // checkList(include: Array<string>, exclude: Array<string>, targetList: Array<string>): boolean {
  //   if (!targetList || targetList.length === 0 && (include && include.length > 0 || exclude && exclude.length > 0)) {
  //     return false;
  //   }

  //   let isIncluded = true, isExcluded = true;

  //   if (include && include.length > 0) {
  //     include.forEach(inc => {
  //       if (targetList.findIndex(target => target.toLowerCase() === inc.toLowerCase()) === -1) {
  //         console.log(`Failed. Could not find ${inc} in ${targetList}`);
  //         isIncluded = isIncluded && false;
  //       } else {
  //         isIncluded = isIncluded && true;
  //       }
  //     });

  //     if (!isIncluded) {
  //       return false;
  //     }
  //   }

  //   if (exclude && exclude.length > 0) {
  //     exclude.forEach(exc => {
  //       if (targetList.findIndex(target => target.toLowerCase() === exc.toLowerCase()) !== -1) {
  //         console.log(`Failed. Found ${exc} in ${targetList}`);
  //         isExcluded = isExcluded && false;
  //       } else {
  //         isExcluded = isExcluded && true;
  //       }
  //     });

  //     if (!isExcluded) {
  //       return false;
  //     }
  //   }

  //   return isIncluded && isExcluded;
  // }

  // checkRange(max, min, target): boolean {
  //   console.log('Is <= than max? ', target <= max , ' Is >= than min? ', target >= min);
  //   return target <= max && target >= min;
  // }

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
