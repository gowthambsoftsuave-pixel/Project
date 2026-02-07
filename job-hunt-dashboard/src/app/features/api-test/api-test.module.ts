import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTestRoutingModule } from './api-test-routing.module';
import { ApiTestPageComponent } from './pages/api-test-page/api-test-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        ApiTestPageComponent
    ],
    imports: [
        CommonModule,
        ApiTestRoutingModule,
        SharedModule
    ]
})
export class ApiTestModule { }
