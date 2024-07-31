describe("Ternary Operator.test", () => {
  it("Ternary Operator", () => {
    const examValue = 90;
    const result = examValue > 80 ? "Good" : "Try Again";

    expect(result).toBe("Good");

    console.info(result);
  });
});
