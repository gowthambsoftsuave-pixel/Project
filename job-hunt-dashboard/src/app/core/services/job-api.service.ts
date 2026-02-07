import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timeout } from 'rxjs';
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

    searchJobs(
        query: string,
        country: string,
        page: number = 1,
        filters: { jobType?: string; minSalary?: number; remoteOnly?: boolean } = {}
    ): Observable<JobSearchResponse> {
        let url = `${this.baseUrl}/${country.toLowerCase()}/search/${page}?what=${encodeURIComponent(query)}&app_id=${this.appId}&app_key=${this.appKey}`;

        if (filters.minSalary) {
            url += `&salary_min=${filters.minSalary}`;
        }

        if (filters.jobType) {
            const type = filters.jobType.toLowerCase();
            if (type === 'full-time') url += '&full_time=1';
            else if (type === 'part-time') url += '&part_time=1';
            else if (type === 'contract') url += '&contract=1';
            // Internship is not a direct param in Adzuna standard API search usually, 
            // but we can append it to the query or handle as per Adzuna docs if known.
            // For now, we'll map the primary ones.
        }

        return this.http.get<JobSearchResponse>(url).pipe(
            timeout(5000), // Timeout after 5 seconds
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
