import { Seller } from "../../src/19. Readonly Properties/Readonly Properties";

describe("Readonly Properties", () => {
  it("Readonly Properties", () => {
    const seller: Seller = {
      id: 1,
      name: "Audyari Wiyono",
      nib: "1234567890",
      npwp: "1234567890",
    };
    console.info(seller);
    // seller.nib = "0987654321"; // error
    console.info(seller);
  });
});
