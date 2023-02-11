import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentHomeRoutingModule } from './student-home-routing.module';
import { StudentHomeComponent } from './student-home.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    StudentHomeRoutingModule,
    MaterialModule
  ]
})
export class StudentHomeModule { }
