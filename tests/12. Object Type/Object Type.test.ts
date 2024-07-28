describe("Object Type", function () {
  it("Object Type", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Audyari Wiyono"
    };

    console.info(person);

    person.id = "2";
    person.name = "Wiyono";
    console.info(person);
  });
});
