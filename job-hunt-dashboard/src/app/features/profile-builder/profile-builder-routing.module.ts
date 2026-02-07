import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBuilderPageComponent } from './pages/profile-builder-page/profile-builder-page.component';

const routes: Routes = [
    { path: '', component: ProfileBuilderPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileBuilderRoutingModule { }
