import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFilterPipe } from './pipes/status-filter/status-filter.pipe';
import { SalaryRangePipe } from './pipes/salary-range/salary-range.pipe';
import { DaysAgoPipe } from './pipes/days-ago/days-ago.pipe';
import { ListFormatPipe } from './pipes/list-format/list-format.pipe';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
    declarations: [
        StatusFilterPipe,
        SalaryRangePipe,
        DaysAgoPipe,
        ListFormatPipe,
        StatCardComponent,
        JobCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        StatusFilterPipe,
        SalaryRangePipe,
        DaysAgoPipe,
        ListFormatPipe,
        StatCardComponent,
        JobCardComponent
    ]
})
export class SharedModule { }
