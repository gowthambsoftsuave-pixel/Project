import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
            const { keyword, country, minSalary, jobType, remoteOnly } = this.searchForm.value;
            // Note: Adzuna API has specific params, adding remote filtering if supported or handled later
            this.jobApi.searchJobs(keyword, country, 1).subscribe({
                next: (response) => this.searchResults.emit(response),
                error: (err) => console.error('Search error:', err)
            });
        }
    }
}
