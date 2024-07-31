
import { Employee, Manager } from "../../src/23. Extending Interface/Extending Interface";


describe("Extending Interface.test", () => {
    it("Extending Interface", () => {
        
        const Employee: Employee = {
            id: 1,
            name: "Audyari Wiyono",
            division: "IT",
        }
        const Manager: Manager = {
            id: 2,
            name: "Wiyono",
            division: "IT",
            numberOfEmployee: 10,
        }

        console.info(Employee);
        console.info(Manager);
        Manager.numberOfEmployee = 20;

        console.info(Manager);

        

    });
})
