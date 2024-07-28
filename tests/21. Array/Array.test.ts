describe("Array", () => {
  it("Array", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Audyari", "Wiyono", "Asep"];

    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
  });
});
