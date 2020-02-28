import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  createAccountComplete = false;
  setupBillingComplete = false;
  confirmDetailsComplete = false;

  constructor() { }
}
