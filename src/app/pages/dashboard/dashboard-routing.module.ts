import { CardalertviewComponent } from './components/cardalertview/cardalertview.component';

import { DatauserComponent } from './user/datauser/datauser.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeComponentprincipal } from './home/home.component';
import { DetallecostoComponent } from './components/detallecosto/detallecosto.component';


const routes: Routes = [

  {
    path: 'detallecosto',
    component: DetallecostoComponent
  },
  {
    path: 'viewalerts',
    component: CardalertviewComponent
  },

  {
    path: 'user',
    component: DatauserComponent
  },
  {
    path: 'notification',
    component: NotificationsComponent
  },
  {
    path: 'list',
    component: ListproductsComponent
  },
  {
    path:'producto',
    component:HomeComponent
  },
  {
    path: 'home',
    component: HomeComponentprincipal
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
