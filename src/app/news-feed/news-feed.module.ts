import { AddFilterPopoverComponent } from './article/add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './article/image-modal/image-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsFeedPage } from './news-feed.page';
import { ArticleComponent } from './article/article.component';
import { SkeletonFeedComponent } from './skeleton-feed/skeleton-feed.component';

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
  ],
  declarations: [
    NewsFeedPage,
    ArticleComponent,
    ImageModalComponent,
    AddFilterPopoverComponent,
    SkeletonFeedComponent
  ]
})
export class NewsFeedPageModule {}
