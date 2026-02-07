import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestPageComponent } from './pages/api-test-page/api-test-page.component';

const routes: Routes = [
    { path: '', component: ApiTestPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApiTestRoutingModule { }
