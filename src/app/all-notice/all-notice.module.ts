import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNoticeRoutingModule } from './all-notice-routing.module';
import { AllNoticeComponent } from './all-notice.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AllNoticeComponent
  ],
  imports: [
    CommonModule,
    AllNoticeRoutingModule,
    MaterialModule
  ]
})
export class AllNoticeModule { }
