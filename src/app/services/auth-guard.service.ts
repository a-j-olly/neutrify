import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {
    // backClicked = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // if (this.router.url === '/app') {
            if (this.authService.signedIn) {
                console.log('signed in');
                return true;
            } else {
                console.log('not signed in');
                this.router.navigate(['/home']);
                return false;
            }
        // }
    }

}
