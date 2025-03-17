import { AuthService } from './mock-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    backClicked = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    public async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const url: string = state.url;

        if (url.startsWith('/app')) {
            if (await this.authService.isAuthenticatedOrGuest()) {
                return true;
            } else {
                this.authService.setState('guest');
                return true;
            }
        } else if (url.startsWith('/auth')) {
            if (await this.authService.isAuthenticated()) {
                this.router.navigateByUrl('/app');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}
