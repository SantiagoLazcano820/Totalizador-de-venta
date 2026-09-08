import Totalizador from "./totalizar.js";

const totalizar = new Totalizador();

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");
const tipoCliente = document.querySelector("#tipo-cliente");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const cancelar = document.querySelector("#cancelar-button");
const confirmar = document.querySelector("#confirmar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value); 
  const est = estado.value;
  const cat = categoria.value;
  const pe = Number.parseInt(peso.value);
  const tipoCli = tipoCliente.value;

  div.innerHTML = `
    <p>${totalizar.calcularPrecioNeto(cant, prec)}</p>
    <p>${totalizar.calcularDescuento(cant, prec)}</p>
    <p>${totalizar.calcularDescuentoCategoria(cat, cant, prec)}</p>
    <p>${totalizar.calcularImpuesto(est, cant, prec)}</p>
    <p>${totalizar.calcularImpuestoCategoria(cat, cant, prec)}</p>
    <p>${totalizar.calcularCostoEnvio(pe, cant)}</p>
    <p>${totalizar.calcularDescuentoEnvioCliente(tipoCli, pe, cant)}</p>
    <p>${totalizar.calcularDescuentoFijoCliente(tipoCli, cat, cant, prec)}</p>
    <p>${totalizar.calcularPrecioTotal(est, cant, prec, cat, pe, tipoCli)}</p>
  `;
});

cancelar.addEventListener("click", () => {
  cantidad.value = "";
  precio.value = "";
  estado.value = "CA";
  categoria.value = "Varios";
  peso.value = "";
  tipoCliente.value = "Normal";

  div.innerHTML = `<p>${totalizar.cancelarCompra()}</p>`;
});

confirmar.addEventListener("click", () => {
  div.innerHTML = `<p>${totalizar.confirmarCompra()}</p>`;
});