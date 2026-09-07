class Totalizador {
    constructor() {

    }

    tasas_impuesto = {
      UT: 0.0665,
      NV: 0.08,
      TX: 0.0625,
      AL: 0.04,
      CA: 0.0825
    }

    calcularPrecioNeto(cantidad, precio) {
      const precioNeto = cantidad * precio;
      return "Precio neto (" + cantidad + "*$" + precio + "): $" + precioNeto;
    } 

    calcularImpuesto(estado = "", cantidad, precio) {
      const precioNeto = cantidad * precio;
      const tasa = this.tasas_impuesto[estado] || 0;
      const porcentajeTexto = (tasa * 100).toFixed(2);
      const impuesto = precioNeto * tasa;
      return "Impuesto para " + estado + "(%" + porcentajeTexto + "): $" + impuesto;
    }
}

export default Totalizador;