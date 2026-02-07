export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    status: 'applied' | 'interviewing' | 'offered' | 'rejected' | 'closed';
    salaryRange: {
        min: number;
        max: number;
        currency: string;
    };
    postedDate: Date;
}
