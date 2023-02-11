import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
  { path: 'create-notice', loadChildren: () => import('./create-notice/create-notice.module').then(m => m.CreateNoticeModule) },
  { path: 'all-class', loadChildren: () => import('./all-class/all-class.module').then(m => m.AllClassModule) },
  { path: 'all-notice', loadChildren: () => import('./all-notice/all-notice.module').then(m => m.AllNoticeModule) },
  { path: 'student-home', loadChildren: () => import('./student-home/student-home.module').then(m => m.StudentHomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
