import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnbiasedNewsPage } from './unbiased-news.page';
import { BlogArticleComponent } from '../blog-article/blog-article.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UnbiasedNewsPage
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
    UnbiasedNewsPage,
    BlogArticleComponent,
    BlogHeaderComponent
  ]
})
export class UnbiasedNewsPageModule {}
