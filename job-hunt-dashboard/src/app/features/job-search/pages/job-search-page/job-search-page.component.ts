import { Component } from '@angular/core';
import { JobSearchResponse } from '../../../../shared/models/job.model';

@Component({
    selector: 'app-job-search-page',
    templateUrl: './job-search-page.component.html',
    styleUrls: ['./job-search-page.component.scss'],
    standalone: false
})
export class JobSearchPageComponent {
    jobs: JobSearchResponse | null = null;

    constructor() { }

    onSearchResults(results: JobSearchResponse): void {
        this.jobs = results;
    }
}
