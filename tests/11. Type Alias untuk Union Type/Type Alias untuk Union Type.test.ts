import {
  Category,
  Product,
} from "../../src/11. Type Alias untuk Union Type/11. Type Alias untuk Union Type";

describe("Alias", function () {
  it("Alias", function () {
    const category: Category = {
      id: 1,
      name: "Electronics",
    };

    const product: Product = {
      id: "2",
      name: "Laptop",
      price: 15000000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
