import { Customer, CustomerType } from "../../src/14. Enum/Enum";

describe("Enum", () => {
  it("Enum", () => {
    const customer: Customer = {
      id: 1,
      name: "Audyari Wiyono",
      type: CustomerType.GUEST,
    };
    console.info(customer);
  });
});
