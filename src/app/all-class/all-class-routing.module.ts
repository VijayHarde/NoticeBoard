import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClassComponent } from './all-class.component';

const routes: Routes = [{ path: '', component: AllClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllClassRoutingModule { }
