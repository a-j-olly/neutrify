import { AddFilterPopoverComponent } from './article/add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './article/image-modal/image-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsFeedWrapperPage } from './news-feed-wrapper.page';
import { ArticleComponent } from './article/article.component';
import { SkeletonFeedComponent } from './skeleton-feed/skeleton-feed.component';
import { NewsFeedComponent } from './news-feed.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedWrapperPage
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
    NewsFeedWrapperPage,
    ArticleComponent,
    ImageModalComponent,
    AddFilterPopoverComponent,
    SkeletonFeedComponent,
    NewsFeedComponent
  ]
})
export class NewsFeedWrapperPageModule {}