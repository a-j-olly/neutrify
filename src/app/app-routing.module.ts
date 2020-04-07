import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuardService]},
  { path: 'app', loadChildren: () => import('./news-feed/news-feed.module')
  .then(m => m.NewsFeedPageModule), canActivate: [AuthGuardService] },
  { path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule) },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
