
describe("Function", () => {

    it("Function", () => {
        function sayHello(name: string): string {
            return `Hello, ${name}!`;
        }
        
        expect(sayHello("Audyari Wiyono")).toBe("Hello, Audyari Wiyono!"
        );

        function printHello(name: string): void {
            console.info(`Hello, ${name}!`);

        }

        printHello("Audyari Wiyono");

        expect(printHello("Audyari Wiyono")).toBe(undefined);

        
    });

});


