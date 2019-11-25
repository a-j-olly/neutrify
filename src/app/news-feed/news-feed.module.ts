import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsFeedPage } from './news-feed.page';
import { ArticleComponent } from './article/article.component';
import { RatingComponent } from './article/rating/rating.component';

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
  declarations: [NewsFeedPage, ArticleComponent, RatingComponent]
})
export class NewsFeedPageModule {}
