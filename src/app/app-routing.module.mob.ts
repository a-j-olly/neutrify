import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', children: [
    { path: '', loadChildren: () => import('./news-feed/news-feed-wrapper.module').then( m => m.NewsFeedWrapperPageModule) }
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
