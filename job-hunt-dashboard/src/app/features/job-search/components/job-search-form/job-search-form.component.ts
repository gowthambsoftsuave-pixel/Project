import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { CountryApiService } from '../../../../core/services/country-api.service';
import { JobApiService } from '../../../../core/services/job-api.service';
import { Country } from '../../../../shared/models/country.model';
import { JobSearchResponse } from '../../../../shared/models/job.model';

@Component({
    selector: 'app-job-search-form',
    templateUrl: './job-search-form.component.html',
    styleUrls: ['./job-search-form.component.scss'],
    standalone: false
})
export class JobSearchFormComponent implements OnInit {
    @Output() searchResults = new EventEmitter<JobSearchResponse>();

    searchForm: FormGroup;
    countries$: Observable<Country[]>;
    jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
    isLoading = false;

    constructor(
        private fb: FormBuilder,
        private countryApi: CountryApiService,
        private jobApi: JobApiService
    ) {
        this.searchForm = this.fb.group({
            keyword: ['', [Validators.required, Validators.minLength(2)]],
            country: ['', Validators.required],
            minSalary: [null, [Validators.min(0)]],
            jobType: [''],
            remoteOnly: [false]
        });
        this.countries$ = this.countryApi.getAllCountries();
    }

    ngOnInit(): void { }

    onSubmit(): void {
        if (this.searchForm.valid) {
            this.isLoading = true;
            const { keyword, country, minSalary, jobType, remoteOnly } = this.searchForm.value;

            this.jobApi.searchJobs(keyword, country, 1, { minSalary, jobType, remoteOnly })
                .pipe(finalize(() => this.isLoading = false))
                .subscribe({
                    next: (response) => this.searchResults.emit(response),
                    error: (err) => {
                        console.error('Search error:', err);
                        // Optionally emit an empty response or error to the parent to stop loading
                        this.searchResults.emit({ count: 0, results: [] });
                    }
                });
        }
    }
}
