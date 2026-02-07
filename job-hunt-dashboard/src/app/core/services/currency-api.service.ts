import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrencyResponse } from '../../shared/models/currency-rate.model';

@Injectable({
    providedIn: 'root'
})
export class CurrencyApiService {
    private readonly baseUrl = environment.currencyApi.baseUrl;

    constructor(private http: HttpClient) { }

    convert(from: string, to: string, amount: number): Observable<CurrencyResponse> {
        const url = `${this.baseUrl}/latest?amount=${amount}&from=${from}&to=${to}`;
        return this.http.get<CurrencyResponse>(url);
    }

    getLatestRates(base: string): Observable<CurrencyResponse> {
        const url = `${this.baseUrl}/latest?from=${base}`;
        return this.http.get<CurrencyResponse>(url);
    }
}
