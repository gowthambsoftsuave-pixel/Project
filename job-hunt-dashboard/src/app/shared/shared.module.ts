import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFilterPipe } from './pipes/status-filter/status-filter.pipe';
import { SalaryRangePipe } from './pipes/salary-range/salary-range.pipe';

@NgModule({
    declarations: [
        StatusFilterPipe,
        SalaryRangePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        StatusFilterPipe,
        SalaryRangePipe
    ]
})
export class SharedModule { }
