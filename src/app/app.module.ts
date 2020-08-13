import { IonicStorageModule } from '@ionic/storage';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { CountryFilterComponent } from './menu/filter-menu/country-filter/country-filter.component';
import { TopicsFilterComponent } from './menu/filter-menu/topics-filter/topics-filter.component';
import { APIService } from './services/neutrify-api.service';
import { RangeFilterComponent } from './menu/filter-menu/range-filter/range-filter.component';
import { WordFilterComponent } from './menu/filter-menu/word-filter/word-filter.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { TopicOptionComponent } from './menu/filter-menu/topics-filter/topic-option/topic-option.component';
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
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ArticleComponent } from './news-feed/article/article.component';
import { ImageModalComponent } from './news-feed/article/image-modal/image-modal.component';
import { AddFilterPopoverComponent } from './news-feed/article/add-filter-popover/add-filter-popover.component';
import { SkeletonFeedComponent } from './news-feed/skeleton-feed/skeleton-feed.component';
import { NewsFeedWrapperPage } from './news-feed/news-feed-wrapper.page';
import { HomePage } from './home/home.page';
import { CtaComponent } from './home/cta/cta.component';
import { FooterComponent } from './home/footer/footer.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { SupportComponent } from './home/support/support.component';
import { TermsConditionsComponent } from './home/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterMenuComponent,
    MainMenuComponent,
    WordFilterComponent,
    RangeFilterComponent,
    TopicsFilterComponent,
    TopicOptionComponent,
    CountryFilterComponent,
    NewsFeedComponent,
    ArticleComponent,
    ImageModalComponent,
    AddFilterPopoverComponent,
    SkeletonFeedComponent,
    NewsFeedWrapperPage,
    HomePage,
    CtaComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    SupportComponent,
    TermsConditionsComponent
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
    GoogleAnalyticsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    ThemeDetection,
    Keychain
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
