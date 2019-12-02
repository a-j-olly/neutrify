import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  customerId: string;
  customerEmail: string;

  constructor() { }
}
