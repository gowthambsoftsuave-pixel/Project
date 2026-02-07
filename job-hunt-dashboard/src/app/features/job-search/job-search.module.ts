import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSearchRoutingModule } from './job-search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { JobSearchFormComponent } from './components/job-search-form/job-search-form.component';
import { JobResultsListComponent } from './components/job-results-list/job-results-list.component';
import { JobSearchPageComponent } from './pages/job-search-page/job-search-page.component';

@NgModule({
    declarations: [
        JobSearchFormComponent,
        JobResultsListComponent,
        JobSearchPageComponent
    ],
    imports: [
        CommonModule,
        JobSearchRoutingModule,
        SharedModule
    ]
})
export class JobSearchModule { }
