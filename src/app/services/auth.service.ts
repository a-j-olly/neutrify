import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn: boolean;
  user: any;
  greeting: string;
  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
        .subscribe(authState => {
          console.log('new auth state: ', authState.state);
          this.signedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.user = null;
          } else {
              this.user = authState.user;
              this.greeting = 'Welcome back ' + this.user.username;
          }
    });
  }
}
