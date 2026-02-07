import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryApiService } from '../../../../core/services/country-api.service';
import { Country } from '../../../../shared/models/country.model';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss'],
    standalone: false
})
export class ProfileFormComponent implements OnInit {
    @Output() profileUpdate = new EventEmitter<any>();

    profileForm: FormGroup;
    countries$: Observable<Country[]>;
    levels = ['Junior', 'Mid', 'Senior'];

    constructor(
        private fb: FormBuilder,
        private countryApi: CountryApiService
    ) {
        this.profileForm = this.fb.group({
            fullName: ['', Validators.required],
            experienceLevel: ['', Validators.required],
            preferredCountries: this.fb.array([]),
            skills: this.fb.array([]),
            expectedSalary: [null, Validators.min(0)]
        });
        this.countries$ = this.countryApi.getAllCountries();
    }

    ngOnInit(): void {
        this.addCountry();
        this.addSkill();
    }

    get preferredCountries(): FormArray {
        return this.profileForm.get('preferredCountries') as FormArray;
    }

    get skills(): FormArray {
        return this.profileForm.get('skills') as FormArray;
    }

    addCountry(): void {
        this.preferredCountries.push(this.fb.control('', Validators.required));
    }

    removeCountry(index: number): void {
        this.preferredCountries.removeAt(index);
    }

    addSkill(): void {
        this.skills.push(this.fb.control('', Validators.required));
    }

    removeSkill(index: number): void {
        this.skills.removeAt(index);
    }

    onSubmit(): void {
        if (this.profileForm.valid) {
            console.log('Profile Data:', this.profileForm.value);
            this.profileUpdate.emit(this.profileForm.value);
        }
    }
}
