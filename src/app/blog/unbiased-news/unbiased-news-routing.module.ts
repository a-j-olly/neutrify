import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnbiasedNewsPage } from './unbiased-news.page';

const routes: Routes = [
  {
    path: '',
    component: UnbiasedNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnbiasedNewsPageRoutingModule {}
