export interface CurrencyResponse {
    amount: number;
    base: string;
    date: string;
    rates: {
        [key: string]: number;
    };
}
