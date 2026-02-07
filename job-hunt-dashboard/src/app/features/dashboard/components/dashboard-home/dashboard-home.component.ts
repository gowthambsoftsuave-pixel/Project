import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../../../../core/services/job-api.service';
import { AdzunaJob } from '../../../../shared/models/job.model';
import { finalize, timeout, catchError, of } from 'rxjs';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.scss'],
    standalone: false
})
export class DashboardHomeComponent implements OnInit {
    featuredJobs: AdzunaJob[] = [];
    isLoading = true;
    errorMessage: string | null = null;
    isUsingFallback = false;

    private readonly MOCK_JOBS: AdzunaJob[] = [
        {
            id: 'mock-1',
            title: 'Senior Angular Developer',
            company: { display_name: 'TechFlow Solutions' },
            location: { display_name: 'London, UK', area: ['London'] },
            salary_min: 75000,
            salary_max: 95000,
            contract_type: 'Full-time',
            created: new Date().toISOString(),
            redirect_url: '#',
            description: 'Senior role'
        },
        {
            id: 'mock-2',
            title: 'Frontend Engineer (React/Angular)',
            company: { display_name: 'Creative Digital' },
            location: { display_name: 'Manchester, UK', area: ['Manchester'] },
            salary_min: 55000,
            salary_max: 70000,
            contract_type: 'Permanent',
            created: new Date(Date.now() - 86400000).toISOString(),
            redirect_url: '#',
            description: 'Mid-level role'
        },
        {
            id: 'mock-3',
            title: 'UI/UX Developer',
            company: { display_name: 'Visionary Agency' },
            location: { display_name: 'Bristol, UK', area: ['Bristol'] },
            salary_min: 45000,
            salary_max: 60000,
            contract_type: 'Full-time',
            created: new Date(Date.now() - 172800000).toISOString(),
            redirect_url: '#',
            description: 'Creative role'
        }
    ];

    constructor(private jobApi: JobApiService) { }

    ngOnInit(): void {
        this.fetchFeaturedJobs();
    }

    fetchFeaturedJobs(): void {
        this.isLoading = true;
        this.errorMessage = null;
        this.isUsingFallback = false;

        // Use a strict 3s timeout for the dashboard to ensure fast load
        this.jobApi.searchJobs('angular developer', 'gb', 1)
            .pipe(
                timeout(3000),
                finalize(() => this.isLoading = false),
                catchError((error) => {
                    console.warn('Dashboard API failed or timed out, using fallback data.', error);
                    this.isUsingFallback = true;
                    return of({ results: this.MOCK_JOBS, count: this.MOCK_JOBS.length });
                })
            )
            .subscribe({
                next: (response) => {
                    this.featuredJobs = response.results.slice(0, 4);
                    if (this.featuredJobs.length === 0 && !this.isUsingFallback) {
                        this.errorMessage = 'No jobs found matching your criteria.';
                    }
                }
            });
    }
}
