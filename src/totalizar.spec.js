import calcularPrecioNeto from "./totalizar.js";

describe("PrecioNeto", () => {
  it("deberia devolver el precio neto de la compra", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual("Precio neto (20*$3): $60");
  });
});
