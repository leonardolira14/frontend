import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';

import { MaterialModule } from '../../core/material/material.module'
@NgModule({
  declarations: [HeadComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeadComponent
  ]
})
export class SharedModule { }
