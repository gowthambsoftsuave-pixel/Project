import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Country } from '../../shared/models/country.model';

@Injectable({
    providedIn: 'root'
})
export class CountryApiService {
    private readonly baseUrl = environment.countriesApi.baseUrl;

    constructor(private http: HttpClient) { }

    getAllCountries(): Observable<Country[]> {
        const url = `${this.baseUrl}/all?fields=name,cca2,cca3,capital,region,currencies,flags`;
        return this.http.get<Country[]>(url);
    }
}
