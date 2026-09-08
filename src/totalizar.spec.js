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

  it("deberia devolver mensaje de error si el precio es negativo o cero", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularPrecioNeto(5, -3)).toEqual("El precio es invalido");
  });

  it("deberia devolver mensaje de confirmacion al cancelar la compra", () => {
    let totalizador = new Totalizador();
    expect(totalizador.cancelarCompra()).toEqual("Compra cancelada");
  });

  it("deberia devolver mensaje de confirmacion al confirmar la compra", () => {
    let totalizador = new Totalizador();
    expect(totalizador.confirmarCompra()).toEqual("Compra confirmada");
  });

  it("deberia usar California (CA) como estado por defecto al calcular el impuesto", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularImpuesto(undefined, 20, 3)).toEqual("Impuesto para CA(%8.25): $4.95");
  });

  it("deberia usar 'Varios' como categoria por defecto de la lista desplegable", () => {
    let totalizador = new Totalizador();
    expect(totalizador.obtenerCategoria()).toEqual("Varios");
  });

  it("deberia devolver el impuesto adicional aplicado según la categoría de producto", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularImpuestoCategoria("Bebidas", 20, 3)).toEqual("Impuesto para Bebidas(%7.00): $4.2");
  });

  it("deberia devolver el descuento adicional aplicado según la categoría de producto", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuentoCategoria("Alimentos", 20, 3)).toEqual("Descuento para Alimentos(%2.00): $1.2");
  });

  it("deberia calcular el costo de envio para cada peso", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularCostoEnvio(15, 3)).toEqual("Costo de envio: $10.5");
  });

  it("deberia devolver mensaje de error si el peso es negativo", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularCostoEnvio(-15, 3)).toEqual("El peso es invalido");
  });

  it("deberia devolver el descuento aplicado al costo de envío según el tipo de cliente.", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuentoEnvioCliente("Recurrente", 41, 10)).toEqual("Descuento envio cliente Recurrente(%0.50): $0.3");
  });

  it("deberia aplicar 0% de descuento para cliente Normal (por defecto)", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuentoEnvioCliente(undefined, 41, 10)).toEqual("Descuento envio cliente Normal(%0.00): $0");
  });

  it("deberia aplicar un descuento fijo de $100 cuando sea cliente Recurrente y de $200 cuando sea cliente Especial", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuentoFijoCliente("Recurrente", "Alimentos", 100, 40)).toEqual("Descuento fijo cliente: $100");
  });
  it("deberia aplicar un descuento fijo de $100 cuando sea cliente Recurrente y de $200 cuando sea cliente Especial", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularDescuentoFijoCliente("Especial", "Electrónicos", 100, 80)).toEqual("Descuento fijo cliente: $200");
  });

  it("deberia devolver un mensaje de error si falta la cantidad", () => {
    let totalizador = new Totalizador();
    expect(totalizador.calcularPrecioTotal("CA", undefined, 10, "Varios", 0, "Normal")).toEqual("La cantidad es un campo obligatorio");
  });
});