import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private showMenu = true;
  public showMenu$ = new Subject<boolean>();

  public currentRoute: string = '';
  private currentRoute$ = new Subject<string>();

  public toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenu$.next(this.showMenu);
  }

  public closeMenu() {
    this.showMenu = false;
    this.showMenu$.next(this.showMenu);
  }

  public openMenu() {
    this.showMenu = true;
    this.showMenu$.next(this.showMenu);
  }

  public updateCurrentRoute(newRoute: string) {
    this.currentRoute = newRoute;
    this.currentRoute$.next(this.currentRoute);
  }

  public getMenuStatus(): Observable<boolean> {
    return this.showMenu$.asObservable();
  }

  public getCurrentRoute(): Observable<string> {
    return this.currentRoute$.asObservable();
  }

  constructor() { }
}
