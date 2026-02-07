import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBuilderRoutingModule } from './profile-builder-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { SkillsSelectorComponent } from './components/skills-selector/skills-selector.component';
import { ProfileBuilderPageComponent } from './pages/profile-builder-page/profile-builder-page.component';

@NgModule({
    declarations: [
        ProfileFormComponent,
        SkillsSelectorComponent,
        ProfileBuilderPageComponent
    ],
    imports: [
        CommonModule,
        ProfileBuilderRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ProfileBuilderModule { }
