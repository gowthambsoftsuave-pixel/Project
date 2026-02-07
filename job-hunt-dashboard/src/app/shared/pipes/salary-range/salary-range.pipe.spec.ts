import { SalaryRangePipe } from './salary-range.pipe';

describe('SalaryRangePipe', () => {
    it('create an instance', () => {
        const pipe = new SalaryRangePipe();
        expect(pipe).toBeTruthy();
    });
});
