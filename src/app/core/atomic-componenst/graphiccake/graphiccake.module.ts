import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphiccakeComponent } from './graphiccake.component';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    GraphiccakeComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule
  ],
  exports:[
    GraphiccakeComponent,

  ]
})
export class GraphiccakeModule { }
