import {
  Category,
  Product,
} from "../../src/13. Optional Properties/Optional Properties";

describe("Optional Properties", function () {
  it("Optional Properties", function () {
    const category: Category = {
      id: 1,
      name: "Electronics",
      //   description: "Electronics",
    };

    const product: Product = {
      id: 2,
      name: "Laptop",
      price: 15000000,
      category: category,
      description: "Laptop",
    };

    console.info(category);
    console.info(product);
  });
});
