import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routingTable } from './routes';
import { CountryService } from './Services/countries-data.service';

import { AppComponent } from './app.component';
import { MaterialModule } from './Material/material.module';
import {
  NavbarComponent,
  SearchComponent,
  SelectorComponent,
  CardOverviewComponent,
  CountryDetailsComponent,
  CountriesContainerComponent,
} from './Components';

@NgModule({
  declarations: [
    AppComponent,
    CardOverviewComponent,
    CountryDetailsComponent,
    CountriesContainerComponent,
    SearchComponent,
    NavbarComponent,
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routingTable),
    MaterialModule,
    FormsModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
