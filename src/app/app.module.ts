import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe'

import { AppComponent } from './app.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
