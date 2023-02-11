import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllClassRoutingModule } from './all-class-routing.module';
import { AllClassComponent } from './all-class.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AllClassComponent
  ],
  imports: [
    CommonModule,
    AllClassRoutingModule,
    MaterialModule
  ]
})
export class AllClassModule { }
