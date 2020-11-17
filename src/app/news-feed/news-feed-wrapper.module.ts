import { NewsFeedService } from 'src/app/services/news-feed.service';
import { AddFilterPopoverComponent } from './feed/article/add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './feed/article/image-modal/image-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsFeedWrapperPage } from './news-feed-wrapper.page';
import { ArticleComponent } from './feed/article/article.component';
import { SkeletonFeedComponent } from './skeleton-feed/skeleton-feed.component';
import { NewsFeedComponent } from './feed/news-feed.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

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
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    NewsFeedWrapperPage,
    ArticleComponent,
    ImageModalComponent,
    AddFilterPopoverComponent,
    SkeletonFeedComponent,
    NewsFeedComponent,
    SearchBarComponent
  ],
  providers: [NewsFeedService]
})
export class NewsFeedWrapperPageModule {}
