import {CountriesContainerComponent} from './Components/countries-container/countries-container.component';
import {CountryDetailsComponent} from './Components/country-details/country-details.component';

export const routingTable = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesContainerComponent },
  { path: 'countries/:name', component: CountryDetailsComponent},
  { path: 'search/:name', component: CountriesContainerComponent},
  { path: 'region/:region', component: CountriesContainerComponent},
];
