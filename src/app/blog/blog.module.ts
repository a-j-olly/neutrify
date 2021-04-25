import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnbiasedNewsPage } from './unbiased-news/unbiased-news.page';
import { MediaBiasPage } from './media-bias/media-bias.page';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogPage } from './blog.page';


const routes: Routes = [
  {
    path: '',
    component: BlogPage,
    children: [
      {
        path: '',
        redirectTo: 'unbiased-news',
        pathMatch: 'full'
      },
      {
        path: 'unbiased-news',
        component: UnbiasedNewsPage,
        data: {
          title: 'Unbiased News - 5 Tips To Help You Become Better Informed'
        }
      },
      {
        path: 'media-bias',
        component: MediaBiasPage,
        data: {
          title: 'Media Bias - Discover The 10 Biases That Always Mislead You'
        }
      }
    ]
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
    BlogPage,
    UnbiasedNewsPage,
    MediaBiasPage,
    BlogHeaderComponent
  ]
})
export class BlogPageModule {}
