import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationTrackerPageComponent } from './pages/application-tracker-page/application-tracker-page.component';

const routes: Routes = [
    { path: '', component: ApplicationTrackerPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationTrackerRoutingModule { }
