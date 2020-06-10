import { IonicStorageModule } from '@ionic/storage';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { CountryFilterComponent } from './menu/filter-menu/country-filter/country-filter.component';
import { TopicsFilterComponent } from './menu/filter-menu/topics-filter/topics-filter.component';
import { APIService } from './services/neutrify-api.service';
import { RangeFilterComponent } from './menu/filter-menu/range-filter/range-filter.component';
import { WordFilterComponent } from './menu/filter-menu/word-filter/word-filter.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyService, AmplifyAngularModule, AmplifyIonicModule } from 'aws-amplify-angular';
import { AdMob } from '@admob-plus/ionic';

@NgModule({
  declarations: [
    AppComponent,
    FilterMenuComponent,
    MainMenuComponent,
    WordFilterComponent,
    RangeFilterComponent,
    TopicsFilterComponent,
    CountryFilterComponent,
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
    AmplifyIonicModule,
  ],
  providers: [
    APIService,
    StatusBar,
    AmplifyService,
    SplashScreen,
    GoogleAnalyticsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AdMob,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
