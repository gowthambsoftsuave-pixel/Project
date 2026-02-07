import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusFilter',
    standalone: false
})
export class StatusFilterPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return null;
    }
}
