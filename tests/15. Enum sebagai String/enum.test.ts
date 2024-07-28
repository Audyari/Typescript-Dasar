import { Customer, CustomerType } from "../../src/15. Enum sebagai String/Enum";

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
