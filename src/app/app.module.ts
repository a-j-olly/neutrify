import { IonicStorageModule } from '@ionic/storage';
import { APIService } from './services/neutrify-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ThemeDetection } from "@ionic-native/theme-detection/ngx";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyService, AmplifyAngularModule, AmplifyIonicModule } from 'aws-amplify-angular';
import { Keychain } from '@ionic-native/keychain/ngx';
import { HomePage } from './home/home.page';
import { CtaComponent } from './home/cta/cta.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { SupportComponent } from './home/support/support.component';
import { TermsConditionsComponent } from './home/terms-conditions/terms-conditions.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CtaComponent,
    PrivacyPolicyComponent,
    SupportComponent,
    TermsConditionsComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  providers: [
    APIService,
    StatusBar,
    AmplifyService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    ThemeDetection,
    Keychain
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
