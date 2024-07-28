describe("Menggunakan Union Type", () => {
  it("Menggunakan Union Type", () => {
    const consoleSpy = jest.spyOn(console, "log");

    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        console.log(`Hello ${value}`);
      } else if (typeof value === "number") {
        console.log(`Hello ${value}`);
      } else if (typeof value === "boolean") {
        console.log(`Hello ${value}`);
      }
    }

    process("Audyari Wiyono");
    expect(consoleSpy).toHaveBeenCalledWith("Hello Audyari Wiyono");

    process(41);
    expect(consoleSpy).toHaveBeenCalledWith("Hello 41");

    process(true);
    expect(consoleSpy).toHaveBeenCalledWith("Hello true");

    consoleSpy.mockRestore();
  });
});
