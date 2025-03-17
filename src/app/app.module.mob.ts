import { TutorialComponent } from './tutorial/tutorial.component';
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
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ThemeDetection } from '@ionic-native/theme-detection/ngx';
import { Keychain } from '@ionic-native/keychain/ngx';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    APIService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    ScreenOrientation,
    ThemeDetection,
    Keychain
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
