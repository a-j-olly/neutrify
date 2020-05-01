import { GoogleAnalyticsService } from './google-analytics.service';
import { MenuController } from '@ionic/angular';
import { FilterService } from './filter.service';
import { APIService } from './neutrify-api.service';
import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import * as moment from 'moment';
const uuid = require('uuid/v4');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn = false;
  loaded = false;
  user: any;
  userEmail: string;
  signUpEmail: string;
  resetPasswordEmail: string;

  constructor(
      private amplifyService: AmplifyService,
      private neutrifyAPI: APIService,
      private filterService: FilterService,
      private menu: MenuController,
      private ga: GoogleAnalyticsService
    ) {
      this.amplifyService.authStateChange$
        .subscribe(async authState => {
          this.signedIn = authState.state === 'signedIn';

          if (!authState.user) {
            this.user = null;
          } else {
            this.user = authState.user;
            this.userEmail = this.user.attributes.email;
          }

          if (this.signedIn) {
            const config = await this.neutrifyAPI.ConfigByOwner(authState.user.username, null, null, 1);
            if (config.items.length !== 0) {
              await this.filterService.updateFilterOptions(config.items[0]);
              this.loaded = true;
            } else {
              this.loaded = false;
            }

            this.menu.enable(true, 'filterMenu');
            this.menu.enable(true, 'mainMenu');
            this.menu.swipeGesture(false, 'filterMenu');
            this.menu.swipeGesture(false, 'mainMenu');
            this.ga.eventEmitter('login', 'engagement', 'Login');
          } else {
            this.loaded = false;
          }

      });
  }

  setState(state: string, user?: any) {
    this.amplifyService.setAuthState({ state, user: user ? user : this.user });
  }

  async signIn(email: string, password: string): Promise<string> {
    try {
      const user = await Auth.signIn(email, password);
      const config = await this.neutrifyAPI.ConfigByOwner(user.username, null, null, 1);
      if (config.items.length === 0) {
        const now = moment();
        const userId = uuid();
        const configId = uuid();

        const createUserPromise = this.neutrifyAPI.CreateUser({
          email: user.attributes.email,
          freeTrial: true,
          freeTrialStartDate: now.format(),
          freeTrialEndDate: now.add(1, 'months').format(),
          id: userId,
          isPremium: false,
          userConfigId: configId
        });

        const createConfigPromise = this.neutrifyAPI.CreateConfig({
          configUserId: userId,
          id: configId,
          keywordsToInclude: [],
          keywordsToExclude: [],
          qualityUpperRange: 5,
          qualityLowerRange: 0,
          savedArticleIds: [],
          sourcesToInclude: [],
          sourcesToExclude: [],
          toneUpperRange: 1,
          toneLowerRange: -1,
          topicsToInclude: JSON.stringify({
            arts: [],
            games: [],
            news: [],
            regional: [],
            society: [],
            business: [],
            health: [],
            recreation: [],
            science: [],
            sports: [],
            computers: [],
            home: [],
            shopping: [],
          }),
          topicsToExclude: JSON.stringify({
            arts: [],
            games: [],
            news: [],
            regional: [],
            society: [],
            business: [],
            health: [],
            recreation: [],
            science: [],
            sports: [],
            computers: [],
            home: [],
            shopping: [],
          }),
          locationsToInclude: [],
          locationsToExclude: []
        });

        const creationRes = await Promise.all([createUserPromise, createConfigPromise]);
        if (!this.loaded) {
          await this.filterService.updateFilterOptions(creationRes[1]);
          this.loaded = true;
        }
      }

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
      const res = await Auth.signUp({ username: email, password, attributes: { email } });
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

  async resendSignUp(email?: string): Promise<boolean> {
    if (this.signUpEmail || email) {
      try {
        const res = await Auth.resendSignUp(email ? email : this.signUpEmail);

        if (res) {
          if (email && !this.signUpEmail) {
            this.signUpEmail = email;
          }

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

  async resetPassword(email: string): Promise<boolean> {
    try {
      const res = await Auth.forgotPassword(email);

      if (res) {
        this.resetPasswordEmail = email;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('Could not send forgotten password reset email. Service returned this error: ', e);
      return false;
    }
  }

  async resetPasswordSubmit(vefCode, password): Promise<boolean> {
    if (this.resetPasswordEmail) {
      try {
        await Auth.forgotPasswordSubmit(this.resetPasswordEmail, vefCode, password);
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
