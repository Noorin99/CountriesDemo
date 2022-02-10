import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../Services/countries-data.service';

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  region: string = '';

  constructor(private countryService: CountryService, private router: Router) {}
  ngOnInit(): void {}

  regions: Region[] = [
    { value: 'Africa', viewValue: 'Africa' },
    { value: 'Americas', viewValue: 'Americas' },
    { value: 'Asia', viewValue: 'Asia' },
    { value: 'Europe', viewValue: 'Europe' },
    { value: 'Oceania', viewValue: 'Oceania' },
  ];

  onClick(value: any) {
    this.region = value;
    this.router.navigate([`region/${this.region}`]);
  }
}
