
describe('Function Overloading', () => {

    it('Function Overloading', () => {

        function callMe(name: string): string;
        function callMe(name: number): number;
        function callMe(name: any): any {
            if (typeof name === 'string') {
                return `Hello, ${name}!`;
            } else if (typeof name === 'number') {
                return name + 1;
            }
        }   

        expect(callMe('Audyari Wiyono')).toBe('Hello, Audyari Wiyono!');
        expect(callMe(1)).toBe(2);

        console.info(callMe(1));
        console.info(callMe('Audyari Wiyono'));
    });

})