import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnbiasedNewsPageRoutingModule } from './unbiased-news-routing.module';

import { UnbiasedNewsPage } from './unbiased-news.page';
import { BlogArticleComponent } from '../blog-article/blog-article.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnbiasedNewsPageRoutingModule
  ],
  declarations: [
    UnbiasedNewsPage,
    BlogArticleComponent,
    BlogHeaderComponent
  ]
})
export class UnbiasedNewsPageModule {}
