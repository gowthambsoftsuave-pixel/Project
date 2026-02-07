import { Component, Input } from '@angular/core';
import { JobSearchResponse } from '../../../../shared/models/job.model';

@Component({
    selector: 'app-job-results-list',
    templateUrl: './job-results-list.component.html',
    styleUrls: ['./job-results-list.component.scss'],
    standalone: false
})
export class JobResultsListComponent {
    @Input() jobs: JobSearchResponse | null = null;

    constructor() { }
}
