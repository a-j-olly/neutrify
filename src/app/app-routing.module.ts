import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { HomePage } from './home/home.page';
import { CtaComponent } from './home/cta/cta.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './home/terms-conditions/terms-conditions.component';
import { SupportComponent } from './home/support/support.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full', 
    data: {
      title: 'Neutrify: Filter Out The Hysteria' 
    }, 
  },
  { path: 'home', component: HomePage, children: [
    { 
      path: '', component: CtaComponent 
    },
    { 
      path: 'privacy-policy', component: PrivacyPolicyComponent, data: {
        title: 'Neutrify: Privacy Policy',
      }
    },
    { 
      path: 'terms-conditions', component: TermsConditionsComponent,
      data: {
        title: 'Neutrify: Terms and Conditions',
      }
    },
    { 
      path: 'support', component: SupportComponent, 
      data: {
        title: 'Neutrify: Customer Support',
      }
    } 
  ], data: {
      title: 'Neutrify: Filter Out The Hysteria',
    }, canActivate: [AuthGuardService] 
  },
  { 
    path: 'app', children: [
    { 
      path: '', loadChildren: () => import('./news-feed/news-feed-wrapper.module').then( m => m.NewsFeedWrapperPageModule)
    },
    { 
      path: 'help', loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule), 
      data: {
        title: 'Neutrify: Filter Out The Hysteria' 
      }, 
    },
  ], data: {
      title: 'Neutrify: Filter Out The Hysteria'
    }, canActivate: [AuthGuardService] 
  },
  { 
    path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule), canActivate: [AuthGuardService] 
  },
  { 
    path: 'unbiased-news', loadChildren: () => import('./blog/unbiased-news/unbiased-news.module').then( m => m.UnbiasedNewsPageModule),
    data: {
      title: 'Unbiased News - 5 Tips To Help You Become Better Informed'
    }
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
