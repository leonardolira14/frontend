import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { RouterModule}  from  '@angular/router'

import { MaterialModule } from '../../core/material/material.module'
@NgModule({
  declarations: [HeadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeadComponent
  ]
})
export class SharedModule { }
