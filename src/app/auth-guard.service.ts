import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    backClicked = false;

    constructor(private router: Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.router.url === '/home') {
            if (next.routeConfig.path === 'under-construction') {
                if (this.backClicked) {
                    this.backClicked = false;
                    return false;
                } else {
                    return true;
                }
            }
        }

        this.router.navigate(['/']);
        return false;
    }

}
