import Totalizador from "./totalizar.js";

const totalizar = new Totalizador();

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const cancelar = document.querySelector("#cancelar-button");
const confirmar = document.querySelector("#confirmar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseFloat(precio.value); 
  const est = estado.value;
  const cat = categoria.value;

  div.innerHTML = `
    <p>${totalizar.calcularPrecioNeto(cant, prec)}</p>
    <p>${totalizar.calcularDescuento(cant, prec)}</p>
    <p>${totalizar.calcularImpuesto(est, cant, prec)}</p>
    <p>${totalizar.calcularPrecioTotal(est, cant, prec, cat)}</p>
  `;
});

cancelar.addEventListener("click", () => {
  cantidad.value = "";
  precio.value = "";
  estado.value = "CA";
  categoria.value = "Varios";

  div.innerHTML = `<p>${totalizar.cancelarCompra()}</p>`;
});

confirmar.addEventListener("click", () => {
  div.innerHTML = `<p>${totalizar.confirmarCompra()}</p>`;
});