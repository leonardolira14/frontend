import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsimpleComponent } from './dropdownsimple.component';

import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [DropdownsimpleComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    DropdownsimpleComponent
  ]
})
export class DropdownsimpleModule { }
