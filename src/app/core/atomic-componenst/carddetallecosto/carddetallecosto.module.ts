import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarddetallecostoComponent } from './carddetallecosto.component';

import { MaterialModule } from '../../material/material.module'

@NgModule({
  declarations: [CarddetallecostoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],exports:[
    CarddetallecostoComponent
  ]
})
export class CarddetallecostoModule { }
