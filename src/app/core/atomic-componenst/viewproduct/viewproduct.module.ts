import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewproductComponent } from './viewproduct.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ViewproductComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ViewproductComponent
  ]
})
export class ViewproductModule { }
