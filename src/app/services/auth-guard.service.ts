import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;

        if (url === '' || url === '/home') {
            if (this.authService.signedIn) {
                this.router.navigate(['/app']);
                return false;
            } else {
                return true;
            }
        }

        if (url === '/app') {
            if (this.authService.signedIn) {
                return true;
            } else {
                this.router.navigate(['/home']);
                return false;
            }
        }
    }

}
