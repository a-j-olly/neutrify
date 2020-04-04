import { Injectable } from '@angular/core';

declare let ga: () => {}; // Declare ga as a function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }
}
