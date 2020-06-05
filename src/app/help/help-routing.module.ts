import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';
import { FeedComponent } from './feed/feed.component';
import { FiltersComponent } from './filters/filters.component';

const routes: Routes = [
  {
    path: '',
    component: HelpPage,
    children: [
      { path: '', redirectTo: '/app/help/feed', pathMatch: 'full' },
      { path: 'feed', component: FeedComponent },
      { path: 'filters', component: FiltersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
