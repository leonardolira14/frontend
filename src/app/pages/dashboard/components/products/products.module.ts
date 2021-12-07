import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ContentComponent } from './content/content.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { EmpaqueComponent } from './empaque/empaque.component';
import { GeneralesComponent } from './generales/generales.component';
import { MaterialModule } from '../../../../core/material/material.module';
import { SharedModule } from '../../../../core/shared/shared.module';
import { PrincipalComponent } from './principal/principal.component';
import { RevisarComponent } from './revisar/revisar.component'
import { ViewproductModule } from '../../../../core/atomic-componenst/viewproduct/viewproduct.module';
import { ButtonsgropuModule } from '../../../../core/atomic-componenst/buttonsgropu/buttonsgropu.module';
import { GraphiccakeModule } from '../../../../core/atomic-componenst/graphiccake/graphiccake.module';
@NgModule({
  declarations: [ContentComponent, DescripcionComponent, EmpaqueComponent, GeneralesComponent, PrincipalComponent, RevisarComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    ViewproductModule,
    ButtonsgropuModule,
    GraphiccakeModule,
  ]
})
export class ProductsModule { }
