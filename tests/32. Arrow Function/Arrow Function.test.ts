// Arrow Function

describe('Arrow Function', () => {
    it('Arrow Function', () => {

        function  sayHello(name: string, filter: (name: string) => string) {
            return `Hello, ${filter(name)}!`;
        }
       
    expect(sayHello('Audyari Wiyono', name => name.toUpperCase())).toBe('Hello, AUDYARI WIYONO!');
    
    console.info(sayHello('Audyari Wiyono', name => name.toUpperCase()));

    });
})