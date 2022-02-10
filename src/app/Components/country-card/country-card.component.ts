import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: 'country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CardOverviewComponent {
  @Input() countryData: any;
}
