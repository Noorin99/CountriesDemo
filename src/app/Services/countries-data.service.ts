import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../Interface/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountriesData(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.BASE_URL}/all`);
  }

  getCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.BASE_URL}/name/${name}`);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.BASE_URL}/region/${region}`);
  }

  getBorderd( border: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${environment.BORDER_URL}/${border}`)
  }
}
