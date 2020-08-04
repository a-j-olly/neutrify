import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    backClicked = false;

    constructor(
        public authService: AuthService,
    ) {}
    
    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const url: string = state.url;
        const isAuthenticated = await this.authService.isAuthenticated();
        
        if (url.startsWith('/app')) {
            if (isAuthenticated) {
                return true;
            } else {
                this.authService.setState('guest');
                return true;
            }
        } else {
            return true;
        }
    }
}
