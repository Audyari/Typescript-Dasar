// Anonymous Function

describe('Anonymous Function', () => {
    it('Anonymous Function', () => {
        
        function  sayHello(name: string, filter: (name: string) => string) {
            return `Hello, ${filter(name)}!`;
        }


        expect(sayHello('Audyari Wiyono', name => name.toUpperCase())).toBe('Hello, AUDYARI WIYONO!');
        console.info(sayHello('Audyari Wiyono', name => name.toUpperCase()));
        

    }); 


})
