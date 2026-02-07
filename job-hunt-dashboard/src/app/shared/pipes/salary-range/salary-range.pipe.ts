import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'salaryRange',
    standalone: false
})
export class SalaryRangePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return null;
    }
}
