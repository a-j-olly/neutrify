import { Injectable } from '@angular/core';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventAction: string,
    eventCategory: string = null,
    eventLabel: string = null,
    eventValue: number = null ) {
      gtag('event', eventAction, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_value: eventValue
          });
  }
}
