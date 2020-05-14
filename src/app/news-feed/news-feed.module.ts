import { AddFilterPopoverComponent } from './article-list/article/add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './article-list/article/image-modal/image-modal.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdMob } from '@admob-plus/ionic';
import { IonicModule } from '@ionic/angular';
import { AdsenseModule } from 'ng2-adsense';

import { NewsFeedPage } from './news-feed.page';
import { ArticleComponent } from './article-list/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-1312649730148564',
      adSlot: 7499925030,
    }),
  ],
  declarations: [
    NewsFeedPage,
    ArticleListComponent,
    ArticleComponent,
    ImageModalComponent,
    AddFilterPopoverComponent
  ],
  providers: [
    AdMob,
  ]
})
export class NewsFeedPageModule {}
