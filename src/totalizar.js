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

    obtenerTasaDescuento(precioNeto) {
      if (precioNeto >= 30000) return 0.15;
      if (precioNeto >= 10000) return 0.10;
      if (precioNeto >= 7000) return 0.07;
      if (precioNeto >= 3000) return 0.05;
      if (precioNeto >= 1000) return 0.03;
      return 0;
    }

    impuestos_categoria = {
      Alimentos: 0.00,
      Bebidas: 0.07,
      Escritorio: 0.00,
      Muebles: 0.03,
      Electrónicos: 0.04,
      Vestimenta: 0.02,
      Varios: 0.00
    };

    descuentos_categoria = {
      Alimentos: 0.02,
      Bebidas: 0.00,
      Escritorio: 0.015,
      Muebles: 0.00,
      Electrónicos: 0.01,
      Vestimenta: 0.00,
      Varios: 0.00
    };

    calcularPrecioNeto(cantidad, precio) {
      if (cantidad <= 0) {
        return "La cantidad es invalida";
      }
      if (precio <= 0) {
        return "El precio es invalido";
      }
      const precioNeto = cantidad * precio;
      return "Precio neto (" + cantidad + "*$" + precio + "): $" + precioNeto;
    } 

    calcularImpuesto(estado = "CA", cantidad, precio) {
      if (cantidad <= 0) {
        return "La cantidad es invalida";
      }
      if (!this.tasas_impuesto[estado]) {
        return "El estado no es valido";
      }
      if (precio <= 0) {
        return "El precio es invalido";
      }
      const precioNeto = cantidad * precio;
      const tasa = this.tasas_impuesto[estado] || 0;
      const porcentaje = (tasa * 100).toFixed(2);
      const impuesto = precioNeto * tasa;
      return "Impuesto para " + estado + "(%" + porcentaje + "): $" + impuesto;
    }

    calcularDescuento(cantidad, precio) {
      if (cantidad <= 0) {
        return "La cantidad es invalida";
      }
      if (precio <= 0) {
        return "El precio es invalido";
      }
      const precioNeto = cantidad * precio;
      const tasa = this.obtenerTasaDescuento(precioNeto);
      const porcentaje = tasa * 100;
      const descuento = precioNeto * tasa;
      return "Descuento (" + porcentaje + "%): " + descuento;
    }

    calcularImpuestoCategoria(categoria = "Varios", cantidad, precio) {
      const precioNeto = cantidad * precio;
      const tasa = this.impuestos_categoria[categoria] || 0;
      const porcentaje = (tasa * 100).toFixed(2);
      const impuesto = precioNeto * tasa;
      return "Impuesto para " + categoria + "(%" + porcentaje + "): $" + impuesto;
    }

    calcularDescuentoCategoria(categoria = "Varios", cantidad, precio) {
      const precioNeto = cantidad * precio;
      const tasa = this.descuentos_categoria[categoria] || 0;
      const porcentajeTexto = (tasa * 100).toFixed(2);
      const descuento = precioNeto * tasa;
      return "Descuento para " + categoria + "(%" + porcentajeTexto + "): $" + descuento;
    }

    calcularPrecioTotal(estado = "CA", cantidad, precio, categoria = "Varios") {
      if (cantidad <= 0) {
        return "La cantidad es invalida";
      }  
      if (!this.tasas_impuesto[estado]) {
        return "El estado no es valido";
      }
      if (precio <= 0) {
        return "El precio es invalido";
      }
      const precioNeto = cantidad * precio;

      const tasaImpuesto = this.tasas_impuesto[estado] || 0;
      const impuesto = precioNeto * tasaImpuesto;

      const tasaDescuento = this.obtenerTasaDescuento(precioNeto);
      const descuento = precioNeto * tasaDescuento;
      const precioTotal = precioNeto + impuesto - descuento

      return "Precio total (descuento e impuesto): $" + precioTotal;
    }

    cancelarCompra() {
      return "Compra cancelada";
    }

    confirmarCompra() {
      return "Compra confirmada";
    }

    obtenerCategoria(categoria = "Varios") {
      return categoria;
    }
}

export default Totalizador;