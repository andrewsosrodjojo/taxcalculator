import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { DxSelectBoxModule, DxButtonModule, DxRadioGroupModule, DxTextBoxModule, DxCalendarModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxSelectBoxModule, 
    DxButtonModule, 
    DxRadioGroupModule, 
    DxTextBoxModule,
    DxCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
