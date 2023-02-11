import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoticeRoutingModule } from './create-notice-routing.module';
import { CreateNoticeComponent } from './create-notice.component';


@NgModule({
  declarations: [
    CreateNoticeComponent
  ],
  imports: [
    CommonModule,
    CreateNoticeRoutingModule
  ]
})
export class CreateNoticeModule { }
