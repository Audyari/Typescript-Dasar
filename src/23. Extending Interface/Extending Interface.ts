
export interface Employee {
    id: number;
    name: string;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployee: number;
}

const Employee: Employee = {
    id: 1,
    name: "Audyari Wiyono",
    division: "IT",
};

const Manager: Manager = {
    id: 2,
    name: "Wiyono",
    division: "IT",
    numberOfEmployee: 10,
}
