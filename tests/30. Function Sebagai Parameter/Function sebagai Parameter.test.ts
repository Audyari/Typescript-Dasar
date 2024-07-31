describe('Function Sebagai Parameter', () => {
    it('Function Sebagai Parameter', () => {
        function sayHello(name: string, callback: (name: string) => string) {
            return `Hello, ${callback(name)}!`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase();
        }

        const result = sayHello('Audyari Wiyono', toUpperCase);
        expect(result).toBe('Hello, AUDYARI WIYONO!');

        console.info(result);

    });
});