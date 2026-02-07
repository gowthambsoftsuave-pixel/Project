import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'listFormat',
    standalone: false
})
export class ListFormatPipe implements PipeTransform {
    transform(value: string[] | null | undefined): string {
        if (!value || !Array.isArray(value) || value.length === 0) return 'None';
        return value.join(', ');
    }
}
