import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicbubleComponent } from './graphicbuble.component';
import { ChartsModule  } from 'ng2-charts';


@NgModule({
  declarations: [GraphicbubleComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    GraphicbubleComponent
  ]
})
export class GraphicbubleModule { }
