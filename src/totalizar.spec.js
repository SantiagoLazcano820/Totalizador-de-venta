//import sumar from "./sumador.js";

describe("PrecioNeto", () => {
  it("deberia devolver el precio neto de la compra", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual("Precio neto (20*$3): $60");
  });
});

function calcularPrecioNeto(cantidad, precio) {
  const precioNeto = cantidad * precio;
  return "Precio neto (20*$3): $" + precioNeto;
} 