import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private showMenu = false;
  public showMenu$ = new Subject<boolean>();

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenu$.next(this.showMenu);
  }

  getMenuStatus(): Observable<boolean> {
    return this.showMenu$.asObservable();
  }

  constructor() { }
}
