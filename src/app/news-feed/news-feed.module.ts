import { AddFilterPopoverComponent } from './article-list/article/add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './article-list/article/image-modal/image-modal.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsFeedPage } from './news-feed.page';
import { ArticleComponent } from './article-list/article/article.component';
import { RatingComponent } from './article-list/article/rating/rating.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    NewsFeedPage,
    ArticleListComponent,
    ArticleComponent,
    RatingComponent,
    ImageModalComponent,
    AddFilterPopoverComponent
  ],
})
export class NewsFeedPageModule {}
