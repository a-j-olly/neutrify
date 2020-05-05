import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    backClicked = false;

    constructor(
        private router: Router,
        public authService: AuthService,
        ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;

        if (url === '' || url.startsWith('/home')) {
            if (this.authService.signedIn) {
                this.router.navigateByUrl('/app');
                return false;
            } else {
                return true;
            }
        } else if (url.startsWith('/app')) {
            if (this.authService.signedIn) {
                return true;
            } else {
                this.router.navigateByUrl('/auth/sign-in');
                return false;
            }
        }
    }
}
