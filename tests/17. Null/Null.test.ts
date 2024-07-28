describe("Null", () => {
  it("Null", () => {
    function greet(name: string | null) {
      if (name) {
        console.info(`Hello, ${name}!`);
      } else {
        console.info("Hello! null");
      }
    }

    greet("Audyari");
    greet(null);
  });
});
