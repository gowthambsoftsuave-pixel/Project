import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { JobSearchResponse } from '../../shared/models/job.model';

@Injectable({
    providedIn: 'root'
})
export class JobApiService {
    private readonly baseUrl = environment.adzuna.baseUrl;
    private readonly appId = environment.adzuna.appId;
    private readonly appKey = environment.adzuna.appKey;

    constructor(private http: HttpClient) { }

    searchJobs(query: string, country: string, page: number = 1): Observable<JobSearchResponse> {
        const url = `${this.baseUrl}/${country.toLowerCase()}/search/${page}?what=${encodeURIComponent(query)}&app_id=${this.appId}&app_key=${this.appKey}`;

        return this.http.get<JobSearchResponse>(url).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
