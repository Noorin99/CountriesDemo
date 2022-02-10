import { Component } from '@angular/core';
import { CountryService } from '../../Services/countries-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-container',
  templateUrl: 'countries-container.component.html',
  styleUrls: ['./countries-container.component.css'],
})
export class CountriesContainerComponent {
  countries$: any;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((response) => {
      let name = response.get('name');
      let region = response.get('region');
      if (name) {
        this.countries$ = this.countryService.getCountry(name);
      } else if (region) {
        this.countries$ = this.countryService.getCountriesByRegion(region);
      } else {
        this.countries$ = this.countryService.getCountriesData();
      }
    });
  }
}
