import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../Services/countries-data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: [],
})
export class CountryDetailsComponent {
  countryDetails: any;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((response) => {
      let name = response.get('name');
      if (name) {
        this.countryService.getCountry(name).subscribe((country) => {
          this.countryDetails = country;
        });
      }
    });
  }
}
