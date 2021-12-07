import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsbarsComponent } from './graphicsbars.component';
import { ChartsModule  } from 'ng2-charts';


@NgModule({
  declarations: [GraphicsbarsComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    GraphicsbarsComponent
  ]
})
export class GraphicsbarsModule { }
