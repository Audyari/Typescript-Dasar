describe("Tipe Data Array", () => {
  it("Array of String", () => {
    const nama: string[] = ["Audyari", "Wiyono", "Asep"];
    expect(nama).toEqual(["Audyari", "Wiyono", "Asep"]);
    expect(typeof nama).toBe("object");

    const nilai: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(nilai).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.info(nama);
    console.info(nilai);
  });
});
