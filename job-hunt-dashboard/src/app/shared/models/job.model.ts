export interface AdzunaJob {
    id: string;
    title: string;
    description: string;
    company: {
        display_name: string;
    };
    location: {
        display_name: string;
        area: string[];
    };
    salary_min?: number;
    salary_max?: number;
    contract_type?: string;
    created: string;
    redirect_url: string;
}

export interface JobSearchResponse {
    count: number;
    results: AdzunaJob[];
}
