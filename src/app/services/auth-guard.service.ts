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
        console.log('url', url);

        if (url === '' || url.startsWith('/home')) {
            if (this.authService.signedIn) {
                console.log('is signed in, navigating to app');
                this.router.navigate(['/app']);
                return false;
            } else {
                console.log('is NOT signed in, navigating to home');
                return true;
            }
        } else if (url.startsWith('/app')) {
            if (this.authService.signedIn) {
                console.log('is signed in, navigating to app');
                return true;
            } else {
                console.log('is NOT signed in, navigating to home');
                this.router.navigate(['/home']);
                return false;
            }
        }
    }
}
