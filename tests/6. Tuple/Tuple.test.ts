describe("Tuple", () => {
  it("Tuple", () => {
    const person: readonly [string, string, number] = ["Audyari", "wiyono", 41];

    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = "Audyari W"; // error!
    // person[1] = "Wiyono S"; // error!
    // person[2] = 30; // error!
  });
});
