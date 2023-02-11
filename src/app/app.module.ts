import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import {ToastModule} from 'primeng/toast';
import { PrimengModule } from './primeng.module';
import { MaterialModule } from './material.module';
import { HeaderModule } from './header/header.module';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AllClassComponent } from './all-class/all-class.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddNoticeComponent,
    AddClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    PrimengModule,
    MaterialModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
