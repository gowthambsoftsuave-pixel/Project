export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    cca2: string;
    cca3: string;
    capital?: string[];
    region: string;
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
}
