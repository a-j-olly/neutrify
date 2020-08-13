import { GoogleAnalyticsService } from './google-analytics.service';
import { MenuController } from '@ionic/angular';
import { FilterService } from './filter.service';
import { APIService, ConfigByOwnerQuery, CreateConfigInput } from './neutrify-api.service';
import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth } from 'aws-amplify';
import { retryWhen, delayWhen, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { Storage } from '@ionic/storage';
const uuid = require('uuid/v4');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn = false;
  hasLoadedFilters = false;
  state: string;
  user: any;
  userEmail: string;
  signUpEmail: string;
  resetPasswordEmail: string;
  userId: string;
  configId: string;

  constructor(
      private amplifyService: AmplifyService,
      private neutrifyAPI: APIService,
      private filterService: FilterService,
      private menu: MenuController,
      private ga: GoogleAnalyticsService,
      private storage: Storage
    ) {
      this.amplifyService.authStateChange$.pipe(
        retryWhen(errors => errors.pipe(
          delayWhen(() => timer(5000)),
          tap(() => console.log('An error has occured with amplify\'s auth service, the error is as follows: ', errors))
        ))
      ).subscribe(async authState => {
        const state = authState.state;
        this.state = authState.state;
        this.signedIn = this.state === 'signedIn';

        if (!authState.user) {
          this.user = await Auth.currentCredentials();
        } else {
          this.user = authState.user;
          if (this.signedIn) {
            this.userEmail = this.user.attributes.email;
          }
        }

        try {
          if (state !== 'signedOut' && state !== 'signIn' && state !== 'resetPassword' && state !== 'confirmSignUp' && state !== 'signUp') {
            await this.handleInitialLoad();
            this.hasLoadedFilters = true;
          } else {
            this.hasLoadedFilters = false;
          }
        } catch (err) {
          this.hasLoadedFilters = false;
          console.log('Could not load your filters. Service returned this error: ', err);
          alert('Could not load your filters. Please check your network conntection.');
        }
      });
  }

  async handleInitialLoad() {
    let loadedFilters;

    if (this.signedIn) {
      const config = (await this.getConfig(this.user.username)).items[0];            
      if (config !== null && config !== undefined) {
        this.userId = this.userId ? this.userId : config.user.id;
        loadedFilters = config;
        this.ga.eventEmitter('login', 'engagement', 'Login');
      } else {
        loadedFilters = await this.createConfig(this.user);
      }
    } else {
      const localfilters = await this.storage.get('neutrify_filters');
      if (localfilters !== null && localfilters !== undefined) {
        loadedFilters = JSON.parse(localfilters);
      } else {
        const newFilters = this.filterService.blankFilterObj(uuid());
        this.storage.set('neutrify_filters', JSON.stringify(newFilters));
        loadedFilters = newFilters;
      }
    }

    if (loadedFilters !== null && loadedFilters !== undefined) {
      this.configId = this.configId ? this.configId : loadedFilters.id;

      const filters = {
        id: loadedFilters.id,
        keywordsToInclude: loadedFilters.keywordsToInclude,
        keywordsToExclude: loadedFilters.keywordsToExclude,
        toneUpperRange: loadedFilters.toneUpperRange,
        toneLowerRange: loadedFilters.toneLowerRange,
        topicsToInclude: loadedFilters.topicsToInclude,
        topicsToExclude: loadedFilters.topicsToExclude,
        sourcesToInclude: loadedFilters.sourcesToInclude,
        sourcesToExclude: loadedFilters.sourcesToExclude,
        locationsToInclude: loadedFilters.locationsToInclude,
        locationsToExclude: loadedFilters.locationsToExclude
      };

      this.menu.enable(true, 'filterMenu');
      this.menu.enable(true, 'mainMenu');
      this.menu.swipeGesture(true, 'filterMenu');
      this.menu.swipeGesture(true, 'mainMenu');

      await this.filterService.updateFilterOptions(filters);
      await this.filterService.updateFilterSaved(true);
    } else {
      throw new Error('Loaded filters object was null or undefined.');
    }
  }

  setState(state: string, user?: any) {
    this.amplifyService.setAuthState({ state, user: user ? user : this.user });
  }

  async signIn(email: string, password: string): Promise<string> {
    try {
      const user = await Auth.signIn(email, password);
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

  async createConfig(user) {
    this.userId = uuid();
    this.configId = uuid();

    const createUserPromise = this.neutrifyAPI.CreateUser({
      email: user.attributes.email,
      id: this.userId,
      userConfigId: this.configId
    });

    let newConfig: CreateConfigInput;
    const localfilters = await this.storage.get('neutrify_filters');

    if (localfilters !== null && localfilters !== undefined) {
      newConfig = JSON.parse(localfilters);
      this.configId = newConfig.id;
    } else {
      newConfig = this.filterService.blankFilterObj(this.configId);
    }

    newConfig['configUserId'] = this.userId;

    const createConfigPromise = this.neutrifyAPI.CreateConfig(newConfig);
    const creationRes = await Promise.all([createUserPromise, createConfigPromise]);

    return creationRes[1];
  }

  async signOut(): Promise<boolean> {
    try {
      await Auth.signOut();
      this.user = null;
      this.userEmail = null;
      this.userId = null;
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

  async isAuthenticated(): Promise<boolean> {
    let creds;

    try {
      creds = await Auth.currentAuthenticatedUser().then(user => user);
    } catch (e) {
      return false;
    }

    return creds ? true : false;
  }

  async isAuthenticatedOrGuest(): Promise<boolean> {
    return this.state === 'guest' || await this.isAuthenticated();
  }

  async deleteAccount(): Promise<boolean> {
    let res = false;
    await Auth.currentAuthenticatedUser().then(async (user: CognitoUser) => {
      try {
        await this.neutrifyAPI.DeleteConfig({ id: this.configId });
        await this.neutrifyAPI.DeleteUser({ id: this.userId });
        res = true;
      } catch (e) {
        console.log('Could not remove your data from our database. Service returned this error: ', e);
        res = false;
        return res;
      }

      const signedOut = await this.signOut();

      if (signedOut) {
        await user.deleteUser(async (err) => {
          if (err) {
            console.log('Could not delete user account. Service returned this error: ', err);
            res = false;
          } else {
            res = true
          }
        });
      } else {
        console.log('Could not delete user account. Could not sign out from account.');
        res = false;
      }
    });

    return res;
  }

  async getConfig(username): Promise<ConfigByOwnerQuery> {
    let config: ConfigByOwnerQuery;

    try {
      config = await this.neutrifyAPI.ConfigByOwner(username, null, null, 1);
    } catch (error) {
      console.log('An error occured when trying to load filter options: ', error);

      if (error.errors && error.errors.length === 1) {
        const errMes = error.errors[0];
        if (errMes.message === 'Network Error') {
          for (let i = 0; i < 3; i++) {
            await setTimeout(() => {
              console.log('Retry attempt no: ', i + 1);
            }, 3000 * i + 1);

            try {
              config = (await this.neutrifyAPI.ConfigByOwner(username, null, null, 1));
              console.log('Successfully retried to get filters.');
              break;
            } catch (e) {}

            if (i === 2) {
              window.alert('Couldn\'t recover from network difficulties. Please check your connection.');
            }
          }
        }
      }
    }

    return config;
  }
}
