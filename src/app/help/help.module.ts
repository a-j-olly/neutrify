import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPageRoutingModule } from './help-routing.module';

import { HelpPage } from './help.page';
import { FiltersComponent } from './filters/filters.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HelpPageRoutingModule,
  ],
  declarations: [
    HelpPage,
    FeedComponent,
    FiltersComponent
  ]
})
export class HelpPageModule {}
