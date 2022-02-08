import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardOverviewExample } from './country-card/country-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, CardOverviewExample],
  imports: [BrowserModule, HttpClientModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
