import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphiccircComponent } from './graphiccirc.component';

import { ChartsModule  } from 'ng2-charts';

@NgModule({
  declarations: [GraphiccircComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    GraphiccircComponent
  ]
})
export class GraphiccircModule { }
