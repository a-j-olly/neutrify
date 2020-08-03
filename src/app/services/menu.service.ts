import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private showMenu = true;
  public showMenu$ = new Subject<boolean>();

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenu$.next(this.showMenu);
  }

  closeMenu() {
    this.showMenu = false;
    this.showMenu$.next(this.showMenu);
  }

  openMenu() {
    this.showMenu = true;
    this.showMenu$.next(this.showMenu);
  }

  getMenuStatus(): Observable<boolean> {
    return this.showMenu$.asObservable();
  }

  constructor() { }
}
