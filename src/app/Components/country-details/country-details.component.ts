import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../Services/countries-data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent {
  countryDetails: any;
  borders: any = [];

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

          country[0].borders.forEach((el) => {
            this.countryService.getBorderd(el).subscribe((country) => {
              this.borders.push(country);
              console.log(country);
            });
          });
        });
      }
    });
  }
}
