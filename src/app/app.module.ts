import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FetchDataFromServerComponent } from './fetch-data-from-server/fetch-data-from-server.component';


@NgModule({
  declarations: [
    AppComponent,
    
    FetchDataFromServerComponent
  ],
  imports: [
    FormsModule,BrowserModule, HttpModule, RouterModule.forRoot([{
      path: "FetchData", component: FetchDataFromServerComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
