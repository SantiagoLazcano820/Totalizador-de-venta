function calcularPrecioNeto(cantidad, precio) {
  const precioNeto = cantidad * precio;
  return "Precio neto (20*$3): $" + precioNeto;
} 

export default calcularPrecioNeto;