import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardalertComponent } from './cardalert.component';
import { MaterialModule } from '../../material/material.module'


@NgModule({
  declarations: [CardalertComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardalertComponent
  ]
})
export class CardalertModule { }
