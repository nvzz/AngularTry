import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {AppRoutingModule} from './app.routing.module';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], //se declaran los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
