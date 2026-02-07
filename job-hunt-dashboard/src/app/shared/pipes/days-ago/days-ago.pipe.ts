import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'daysAgo',
    standalone: false
})
export class DaysAgoPipe implements PipeTransform {
    transform(value: string | Date | undefined): string {
        if (!value) return '';

        const date = value instanceof Date ? value : new Date(value);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInDays === 0) return 'Posted Today';
        if (diffInDays === 1) return 'Posted Yesterday';
        return `Posted ${diffInDays} days ago`;
    }
}
