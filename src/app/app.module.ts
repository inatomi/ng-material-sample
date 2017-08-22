import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { PositionTableComponent } from './position-table/position-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionTableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
