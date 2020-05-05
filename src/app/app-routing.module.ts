import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage, canActivate: [AuthGuardService]},
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
