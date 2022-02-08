import { Component } from '@angular/core';
import { CountryService } from './countries-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CountriesApp';
  countries: any;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountriesData().subscribe((response) => {
      this.countries = response;
    });
  }
}
