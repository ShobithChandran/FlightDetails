import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightTimingComponent } from './flight-timing/flight-timing.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NgonchangeExpFlightDetailsComponent } from './ngonchange-exp-flight-details/ngonchange-exp-flight-details.component';
import { NgonchangeExpFlightSearchComponent } from './ngonchange-exp-flight-search/ngonchange-exp-flight-search.component';
import { NgonchangeExpChildComponent } from './ngonchange-exp-child/ngonchange-exp-child.component';
import { NgonchangeExpParentComponent } from './ngonchange-exp-parent/ngonchange-exp-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightTimingComponent,
    FlightSearchComponent,
    NgonchangeExpFlightDetailsComponent,
    NgonchangeExpFlightSearchComponent,
    NgonchangeExpChildComponent,
    NgonchangeExpParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
