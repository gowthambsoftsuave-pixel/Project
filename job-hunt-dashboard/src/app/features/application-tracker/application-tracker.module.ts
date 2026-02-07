import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTrackerRoutingModule } from './application-tracker-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationTrackerPageComponent } from './pages/application-tracker-page/application-tracker-page.component';

@NgModule({
    declarations: [
        ApplicationFormComponent,
        ApplicationListComponent,
        ApplicationTrackerPageComponent
    ],
    imports: [
        CommonModule,
        ApplicationTrackerRoutingModule,
        SharedModule
    ]
})
export class ApplicationTrackerModule { }
