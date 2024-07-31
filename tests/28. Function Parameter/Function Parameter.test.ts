

describe('Function Parameter', () => {
    it('Function Parameter', () => {
        function sum(... values: number[]): number {
            return values.reduce((a, b) => a + b, 0);
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        console.info(sum(1, 2, 3, 4, 5));
    });

    function sayHello(message: string = 'Guest'): string {
        return `Hello, ${message}!`;
    }


    expect(sayHello('Audyari Wiyono')).toBe('Hello, Audyari Wiyono!');
    console.info(sayHello('Audyari Wiyono'));

    expect(sayHello()).toBe('Hello, Guest!');

    console.info(sayHello('Audyari Wiyono'));
    console.info(sayHello());


    it('should return sayHello', () => {
       function sayHello(firstName: string, lastName? : string): string {
           if (lastName != null) {
               return `Hello, ${firstName} ${lastName}!`;
           } else {
               return `Hello, ${firstName}!`;
           }
       }
       
       expect(sayHello('Audyari Wiyono')).toBe('Hello, Audyari Wiyono!');
       console.info(sayHello('Audyari Wiyono'));

       expect(sayHello('Audyari Wiyono', 'Wiyono')).toBe('Hello, Audyari Wiyono Wiyono!');
       console.info(sayHello('Audyari Wiyono', 'Wiyono'));
       
    });

  

   


});

