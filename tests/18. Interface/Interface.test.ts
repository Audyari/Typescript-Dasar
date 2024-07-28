import { Seller } from "../../src/18. Interface/Interface";

describe("Interface", () => {
  it("Interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Audyari Wiyono",
      address: "Jl. Raya Ciledug",
    };
    console.info(seller);
  });
});
