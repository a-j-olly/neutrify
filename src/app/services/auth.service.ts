import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn: boolean;
  user: any;
  greeting: string;
  signUpEmail: string;
  forgotPasswordEmail: string;

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
        .subscribe(authState => {
          this.signedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.user = null;
          } else {
              this.user = authState.user;
              this.greeting = 'Welcome back ' + this.user.username;
          }
    });
  }

  setState(state: string, user?: any) {
    this.amplifyService.setAuthState({ state, user: user ? user : this.user });
  }

  async signIn(email: string, password: string): Promise<string> {
    try {
      await Auth.signIn(email, password);
      return 'true';
    } catch (e) {
      if (e.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        return 'false';
      } else if (e.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
        return 'resetPassword';
      } else if (e.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
        return 'false';
      } else {
        console.log('There was an error signing in. Service returned this error: ', e);
        return 'false';
      }
    }
  }

  async signOut(): Promise<boolean> {
    try {
      await Auth.signOut();
      return true;
    } catch (e) {
      console.log('There was an error signing out. Service returned this error: ', e);
      return false;
    }
  }

  async signUp(email: string, password: string): Promise<boolean> {
    try {
      const res = await Auth.signUp({username: email, password, attributes: { email }});

      if (res) {
        this.signUpEmail = res.user.getUsername();
        return true;
      } else {
        return false;
      }

    } catch (e) {
      console.log('There was an error signing up. Service returned this error: ', e);
      return false;
    }
  }

  async confirmSignUp(vefCode: string): Promise<boolean> {
    if (this.signUpEmail) {
      try {
        const res = await Auth.confirmSignUp(this.signUpEmail, vefCode);

        if (res) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log('Could not verify the email address. Service returned this error: ', e);
        return false;
      }
    } else {
      console.log('The sign up email address cannot be found.');
      return false;
    }
  }

  async resendSignUp(): Promise<boolean> {
    if (this.signUpEmail) {
      try {
        const res = await Auth.resendSignUp(this.signUpEmail);

        if (res) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log('Could not resend verification email. Service returned this error: ', e);
        return false;
      }
    }
  }

  async forgotPassword(email: string): Promise<boolean> {
    try {
      const res = await Auth.forgotPassword(email);

      if (res) {
        this.forgotPasswordEmail = email;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('Could not send forgotten password reset email. Service returned this error: ', e);
      return false;
    }
  }

  async forgotPasswordSubmit(vefCode, password): Promise<boolean> {
    if (this.forgotPasswordEmail) {
      try {
        await Auth.forgotPasswordSubmit(this.forgotPasswordEmail, vefCode, password);
        return true;
      } catch (e) {
        console.log('Could not reset forgotten password. Service returned this error: ', e);
        return false;
      }
    } else {
      console.log('The forgotten password email address could not be found.');
      return false;
    }
  }
}
