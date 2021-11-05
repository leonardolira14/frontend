import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { MaterialModule } from '../../core/material/material.module';
import {  DropdownModule} from '../../core/atomic-componenst/dropdown/dropdown.module';
import { CardproductshomeModule } from '../../core/atomic-componenst/cards/cardproductshome/cardproductshome.module';

@NgModule({
  declarations: [ListproductsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule,
    DropdownModule,
    CardproductshomeModule
  ],
  exports:[
    ListproductsComponent
  ]
})
export class DashboardModule { }
