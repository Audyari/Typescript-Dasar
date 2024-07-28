describe("20. Function Interface", () => {
  it("20. Function Interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1, value2) => value1 + value2;

    console.log(add(1, 2));

    expect(add(1, 2)).toBe(3);
  });
});
