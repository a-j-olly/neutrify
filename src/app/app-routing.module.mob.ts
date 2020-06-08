import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'app', children: [
    { path: '', loadChildren: () => import('./news-feed/news-feed.module').then(m => m.NewsFeedPageModule) },
    { path: 'help', loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule) },
    { path: 'quick-start', loadChildren: () => import('./quick-start/quick-start.module').then( m => m.QuickStartPageModule) },
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
