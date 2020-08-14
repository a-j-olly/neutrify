import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { NewsFeedWrapperPage } from './news-feed/news-feed-wrapper.page';
import { HomePage } from './home/home.page';
import { CtaComponent } from './home/cta/cta.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './home/terms-conditions/terms-conditions.component';
import { SupportComponent } from './home/support/support.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage, children: [
      { path: '', redirectTo: '/home/welcome', pathMatch: 'full' },
      { path: 'welcome', component: CtaComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'support', component: SupportComponent } 
  ], canActivate: [AuthGuardService] },
  { path: 'app', children: [
    { path: '', component: NewsFeedWrapperPage },
    { path: 'help', loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule) },
  ], canActivate: [AuthGuardService] },
  { path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule), canActivate: [AuthGuardService] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
