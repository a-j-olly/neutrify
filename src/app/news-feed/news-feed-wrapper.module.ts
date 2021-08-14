import { DialogBoxComponent } from './feed/dialog-box/dialog-box.component';
import { AdMob } from '@admob-plus/ionic';
import { ArticleWrapperComponent } from './feed/article-wrapper/article-wrapper.component';
import { LayoutTogglerComponent } from './layout-toggler/layout-toggler.component';
import { StandardHeaderComponent } from './feed/standard-header/standard-header.component';
import { StandardFooterComponent } from './feed/standard-footer/standard-footer.component';
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
    SearchBarComponent,
    StandardHeaderComponent,
    StandardFooterComponent,
    LayoutTogglerComponent,
    DialogBoxComponent,
    ArticleWrapperComponent
  ],
  providers: [
    NewsFeedService,
    AdMob
  ]
})
export class NewsFeedWrapperPageModule {}
