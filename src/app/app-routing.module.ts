import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloandingStrategyService } from './services/selective-preloanding-strategy.service';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      preload: false
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: {
      preload: false
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: SelectivePreloandingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
