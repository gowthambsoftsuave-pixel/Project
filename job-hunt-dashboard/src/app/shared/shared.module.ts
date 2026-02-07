import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFilterPipe } from './pipes/status-filter/status-filter.pipe';
import { SalaryRangePipe } from './pipes/salary-range/salary-range.pipe';
import { DaysAgoPipe } from './pipes/days-ago/days-ago.pipe';
import { ListFormatPipe } from './pipes/list-format/list-format.pipe';

@NgModule({
    declarations: [
        StatusFilterPipe,
        SalaryRangePipe,
        DaysAgoPipe,
        ListFormatPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        StatusFilterPipe,
        SalaryRangePipe,
        DaysAgoPipe,
        ListFormatPipe
    ]
})
export class SharedModule { }
