import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSearchPageComponent } from './pages/job-search-page/job-search-page.component';

const routes: Routes = [
    { path: '', component: JobSearchPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobSearchRoutingModule { }
