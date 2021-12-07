import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicmultipieComponent } from './graphicmultipie.component';
import { ChartsModule  } from 'ng2-charts';


@NgModule({
  declarations: [GraphicmultipieComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[GraphicmultipieComponent]
})
export class GraphicmultipieModule { }
