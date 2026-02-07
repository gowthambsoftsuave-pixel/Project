import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'job-search', loadChildren: () => import('./features/job-search/job-search.module').then(m => m.JobSearchModule) },
    { path: 'application-tracker', loadChildren: () => import('./features/application-tracker/application-tracker.module').then(m => m.ApplicationTrackerModule) },
    { path: 'profile-builder', loadChildren: () => import('./features/profile-builder/profile-builder.module').then(m => m.ProfileBuilderModule) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
