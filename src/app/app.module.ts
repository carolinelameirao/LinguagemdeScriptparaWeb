import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraPadraoComponent } from './calculadora/components/calculadora-padrao/calculadora-padrao.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraPadraoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
