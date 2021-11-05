import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardproductshomeComponent } from './cardproductshome.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    CardproductshomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardproductshomeComponent
  ]
})
export class CardproductshomeModule { }
