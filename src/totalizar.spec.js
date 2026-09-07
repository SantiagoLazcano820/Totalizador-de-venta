import Totalizador from "./totalizar.js";

describe("Totalizador", () => {
  it("deberia devolver el precio neto de la compra", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularPrecioNeto(20, 3)).toEqual("Precio neto (20*$3): $60");
  });

  it("deberia devolver el impuesto aplicado de la compra", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularImpuesto("TX", 20, 3)).toEqual("Impuesto para TX(%6.25): $3.75");
  });

  it("deberia devolver el descuento aplicado de la compra", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuento(20, 3)).toEqual("Descuento (0%): 0");
  });

  it("deberia devolver el precio total final", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularPrecioTotal("TX", 20, 3)).toEqual("Precio total (descuento e impuesto): $63.75");
  });
});