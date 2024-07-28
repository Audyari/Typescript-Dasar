describe("Tipe Data Any", () => {
  it("Tipe Data Any", () => {
    const person: any = {
      name: "Audyari Wiyono",
      age: 41,
      city: "Pondok Gede",
    };

    person.name = "Audyari";
    person.age = 30;
    person.makan = "ayam";

    console.info(person);
  });
});
