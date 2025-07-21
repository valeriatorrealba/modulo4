// Paso 1: Crear 2 o 3 productos
const producto1 = "Polera";
const producto2 = "Pantalón";
const producto3 = "Zapatillas";

let precio1 = 5000;
let precio2 = 10000;
let precio3 = 20000;

// Paso 2: seleccion y cantidad de producto
let seleccion = prompt("Elige un producto: 1 = Polera, 2 = Pantalón, 3 = Zapatillas");
let cantidad = prompt("¿Cuántas unidades quieres?");
cantidad = parseInt(cantidad);

let valorNeto = 0;

if (seleccion == "1") {
    valorNeto = precio1 * cantidad;
} else if (seleccion == "2") {
    valorNeto = precio2 * cantidad;
} else if (seleccion == "3") {
    valorNeto = precio3 * cantidad;
} else {
    console.log("Opción no válida");
}

// Paso 3: calcular con if- else: valor neto, IVA, despacho y total final.
if (valorNeto > 0) {
    let iva = valorNeto * 0.19;
    let despacho = 0;

    if (valorNeto > 20000) {
        despacho = 0;
    } else {
        despacho = 3000;
    }

    let total = valorNeto + iva + despacho;

    console.log("Valor Neto: $" + valorNeto);
    console.log("IVA (19%): $" + iva);
    console.log("Despacho: $" + despacho);
    console.log("TOTAL FINAL: $" + total);
}
