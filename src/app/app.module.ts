import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.routeModule';
import { myModules } from './app.routeModule';
import {myCustomPipe} from './app.pipe';



@NgModule({
  declarations: [
    AppComponent,myModules,myCustomPipe],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
