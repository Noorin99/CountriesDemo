import { Component } from '@angular/core';
import { CountryService } from '../../Services/countries-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  model = {
    search: ' ',
  };

  displayValue: string = '';
  filteredData: any = [];
  queryName: string = '';

  constructor(private countryService: CountryService, private router: Router) {}

  onSubmit(event: any) {
    this.router.navigate([`search/${event.search}`]);
  }
}
