describe("Undefined", () => {
  it("Undefined", () => {
    function greet(name?: string) {
      if (name) {
        console.info(`Hello, ${name}!`);
      } else {
        console.info("Hello! undefined");
      }
    }

    greet("Audyari");
    const name: string | undefined = undefined;
    greet(name);
  });
});
