import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { JobApiService } from '../../../../core/services/job-api.service';
import { CountryApiService } from '../../../../core/services/country-api.service';
import { CurrencyApiService } from '../../../../core/services/currency-api.service';

@Component({
    selector: 'app-api-test-page',
    templateUrl: './api-test-page.component.html',
    styleUrls: ['./api-test-page.component.scss'],
    standalone: false
})
export class ApiTestPageComponent implements OnInit {
    jobs$: Observable<any> | undefined;
    countries$: Observable<any> | undefined;
    currency$: Observable<any> | undefined;

    constructor(
        private jobApi: JobApiService,
        private countryApi: CountryApiService,
        private currencyApi: CurrencyApiService
    ) { }

    ngOnInit(): void {
        this.jobs$ = this.jobApi.searchJobs('angular', 'in', 1).pipe(
            catchError(err => {
                console.error('Job API Error:', err);
                return of({ error: 'Failed to load jobs' });
            })
        );

        this.countries$ = this.countryApi.getAllCountries().pipe(
            catchError(err => {
                console.error('Country API Error:', err);
                return of({ error: 'Failed to load countries' });
            })
        );

        this.currency$ = this.currencyApi.convert('USD', 'INR', 100).pipe(
            catchError(err => {
                console.error('Currency API Error:', err);
                return of({ error: 'Failed to load currency data' });
            })
        );
    }
}
