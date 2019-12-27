import { APIService } from './services/neutrify-api.service';
import { RangeFilterComponent } from './menu/filter-menu/range-filter/range-filter.component';
import { WordFilterComponent } from './menu/filter-menu/word-filter/word-filter.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService  } from 'aws-amplify-angular';

@NgModule({
  declarations: [AppComponent, FilterMenuComponent, MainMenuComponent, WordFilterComponent, RangeFilterComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    AppRoutingModule],
  providers: [
    APIService,
    StatusBar,
    AmplifyService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
