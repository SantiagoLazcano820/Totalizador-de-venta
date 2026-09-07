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

  it("deberia devolver el impuesto correctamente al elegir un estado de la lista desplegable", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularImpuesto("UT", 20, 3)).toEqual("Impuesto para UT(%6.65): $3.99");
  });

  it("deberia devolver mensaje de error si la cantidad es negativa o cero", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularPrecioNeto(-5, 3)).toEqual("La cantidad es invalida");
  });

  it("deberia devolver mensaje de error si el estado no es valido", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularImpuesto("NY", 20, 3)).toEqual("El estado no es valido");
  });
});