import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'salaryRange',
    standalone: false
})
export class SalaryRangePipe implements PipeTransform {
    transform(min: number | null | undefined, max: number | null | undefined): string {
        if (!min && !max) return 'Salary not disclosed';

        const format = (num: number) => {
            if (num === null || num === undefined) return '';
            return num >= 1000 ? `${(num / 1000).toFixed(0)}k` : num.toString();
        };

        if (min !== null && min !== undefined && max !== null && max !== undefined) {
            if (min === max) return `$${format(min)}`;
            return `$${format(min)} - $${format(max)}`;
        }

        if (min !== null && min !== undefined) return `From $${format(min)}`;
        if (max !== null && max !== undefined) return `Up to $${format(max)}`;

        return 'Salary not disclosed';
    }
}
