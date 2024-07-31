
import { Person } from "../../src/26. Type Assertions/Type Assertions";
describe('Type Assertions', () => {
    it('Type Assertions', () => {

        const person: Person = {
            name: "Audyari Wiyono",
            age: 41
        };

       const person2: Person = person as Person;

       console.info(person2);

    });
})