import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { MaterialModule } from '../../core/material/material.module';
import { DropdownModule } from '../../core/atomic-componenst/dropdown/dropdown.module';
import { GraphicbubleModule } from '../../core/atomic-componenst/graphicbuble/graphicbuble.module';
import { CardproductshomeModule } from '../../core/atomic-componenst/cards/cardproductshome/cardproductshome.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DatauserComponent } from './user/datauser/datauser.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownsimpleModule } from '../../core/atomic-componenst/dropdownsimple/dropdownsimple.module';
import { TableModule } from '../../core/atomic-componenst/table/table.module';
import { ViewproductModule } from '../../core/atomic-componenst/viewproduct/viewproduct.module';
import { CardalertviewComponent } from './components/cardalertview/cardalertview.component';
import { CardalertModule } from '../../core/atomic-componenst/cardalert/cardalert.module';
import { ButtonsgropuModule } from '../../core/atomic-componenst/buttonsgropu/buttonsgropu.module';
import { DetallecostoComponent } from './components/detallecosto/detallecosto.component';
import { GraphicsbarsModule } from '../../core/atomic-componenst/graphicsbars/graphicsbars.module';
import { CarddetallecostoModule } from '../../core/atomic-componenst/carddetallecosto/carddetallecosto.module';
import { HomeComponentprincipal } from '../../pages/dashboard/home/home.component';
import { GraphiccircModule } from '../../core/atomic-componenst/graphiccirc/graphiccirc.module';
import { GraphiclineModule } from '../../core/atomic-componenst/graphicline/graphicline.module';
import { GraphicmultipieModule } from '../../core/atomic-componenst/graphicmultipie/graphicmultipie.module'
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [HomeComponentprincipal, ListproductsComponent, NotificationsComponent, DatauserComponent, HomeComponent, CardalertviewComponent, DetallecostoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule,
    DropdownModule,
    CardproductshomeModule,
    GraphicbubleModule,
    DropdownsimpleModule,
    TableModule,
    ViewproductModule,
    CardalertModule,
    ButtonsgropuModule,
    GraphicsbarsModule,
    CarddetallecostoModule,
    GraphiccircModule,
    GraphiclineModule,
    GraphicmultipieModule
  ],
  exports: [
    ListproductsComponent
  ]
})
export class DashboardModule { }
