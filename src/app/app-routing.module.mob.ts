import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { NewsFeedWrapperPage } from './news-feed/news-feed-wrapper.page';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', children: [
    { path: '', component: NewsFeedWrapperPage },
    { path: 'help', loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule) },
  ], canActivate: [AuthGuardService]},
  { path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule), canActivate: [AuthGuardService] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
