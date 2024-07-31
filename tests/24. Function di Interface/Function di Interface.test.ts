

describe("Function di Interface", () => {
    it("Function di Interface", () => {
        const person: Person = {
            name: "Audyari Wiyono",
            sayHello: (name) => {
                return `Hello ${name}`;
            }
        }    
        console.info(person.sayHello("Wiyono"));
    });
});
