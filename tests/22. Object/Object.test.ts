describe("Object", () => {
  it("Object", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Audyari Wiyono",
      address: "Jl. Raya Ciledug",
    };

    expect(dictionary["name"]).toBe("Audyari Wiyono");
    expect(dictionary["address"]).toBe("Jl. Raya Ciledug");
  });
});
