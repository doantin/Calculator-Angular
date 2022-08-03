import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from '../app/components/calculator/calculator.component';
import { MayTinhComponent } from '../app/components/mayTinh/mayTinh.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MayTinhComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
