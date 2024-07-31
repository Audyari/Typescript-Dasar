describe("For Loop", () => {
  it("For Loop", () => {
    const names: string[] = ["AUDYARI", "WIYONO", "PROGRAM"];

    // for i

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    // for of

    for (let name of names) {
      console.info(name);
    }

    // for in

    for (let key in names) {
      console.info(names[key]);
    }
  });
});
