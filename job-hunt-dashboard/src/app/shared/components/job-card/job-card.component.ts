import { Component, Input } from '@angular/core';
import { AdzunaJob } from '../../models/job.model';

@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss'],
    standalone: false
})
export class JobCardComponent {
    @Input() job!: AdzunaJob;

    getRelativeDate(dateString: string): string {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return 'Today';
        if (days === 1) return 'Yesterday';
        return `${days}d ago`;
    }
}
