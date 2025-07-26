/*************************************************
    M4AE3 - ABP4 Ejercicio Práctico
**************************************************/
// Problema 1:

let n = parseInt(prompt("Ingresa un número:"));
let arreglo = [];

let valor = 1;

for (let i = 0; i < n; i++) {
    arreglo.push(valor);
    valor *= 2;
}

console.log(arreglo);

// Problema 2:

let arreglo = [4, 15, 7, 22, 9, 18, 2, 30, 11, 5];
let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}

console.log("El mayor número es:", mayor);

// Problema 3:

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

if (numero >= 1 && numero <= 7) {
    let dia = dias[numero - 1];
    console.log("El día correspondiente es:", dia);
    } else {
    console.log("Número inválido. Debe estar entre 1 y 7.");
}

// Problema 3:

let arreglo = [12, 45, 7, 89, 23, 56, 90, 3, 14, 67,100];

let numeroBuscado = parseInt(prompt("Ingresa el número que deseas buscar:"));
let encontrado = false;

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === numeroBuscado) {
        encontrado = true;
    }
    }

    if (encontrado) {
    console.log("El número sí está en el arreglo.");
    } else {
    console.log("El número no se encuentra en el arreglo.");
    }

// Problema 4:

let arreglo = [34, 7, 23, 32, 5, 62, 12, 78, 3, 15];

console.log("Arreglo original:", arreglo);

arreglo.sort(function(a, b) {
    return a - b;
});

console.log("Arreglo ordenado:", arreglo);

/*************************************************
    ABPRO AE2 Ejercicio Práctico
**************************************************/
/*const producto1 = "Polera";
const producto2 = "Pantalón";
const producto3 = "Zapatillas";

let precio1 = 5000;
let precio2 = 10000;
let precio3 = 20000;

let totalNeto = 0;
let continuar = true;

while (continuar) {
    let seleccion = prompt("Elige un producto:\n1 = Polera ($5000)\n2 = Pantalón ($10000)\n3 = Zapatillas ($20000)\n0 = Terminar compra");

    if (seleccion === "0") {
        continuar = false;
        break;
    }

    let cantidad = parseInt(prompt("¿Cuántas unidades quieres?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
        continue;
    }

    if (seleccion === "1") {
        totalNeto += precio1 * cantidad;
    } else if (seleccion === "2") {
        totalNeto += precio2 * cantidad;
    } else if (seleccion === "3") {
        totalNeto += precio3 * cantidad;
    } else {
        console.log("Opción no válida.");
    }
}

if (totalNeto > 0) {
    let iva = totalNeto * 0.19;
    let despacho = totalNeto > 50000 ? 0 : 3000;
    let totalFinal = totalNeto + iva + despacho;

    console.log(`Resumen de tu compra: 
- Valor Neto: $${totalNeto}
- IVA (19%): $${iva}
- Despacho: $${despacho}
- TOTAL FINAL: $${totalFinal}`);
} else {
    console.log("No se realizó ninguna compra.");
}*/

/*************************************************
    ABP2 AE2 Ejercicio Práctico
**************************************************/
// Problema 1:
/*let valorIngresado = prompt("Ingresa un número");
let valor = parseFloat(valorIngresado);
let mensaje = "";

if (valor > 1 && valor <= 100) {
    if ((valor > 5 && valor < 15) || valor === 70 || valor === 55) {
        mensaje = "El número ingresado tiene opciones de ganar";
    } else {
        mensaje = "El número ingresado no es favorable";
    }
} else {
    mensaje = "El número ingresado no está dentro del rango permitido (mayor a 1 y menor o igual a 100)";
}

document.getElementById("resultado").textContent = mensaje;*/

// Problema 2:
/*let yearUsuario = prompt("Ingresa un año:");
let year = parseInt(yearUsuario);
let mensaje = "";

if (isNaN(year) || year < 0) {
    mensaje = "El valor ingresado no es válido. Debe ser un número mayor o igual a 0.";
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        mensaje = `${year} es un año bisiesto.`;
    } else {
        mensaje = `${year} no es un año bisiesto.`;
    }
}

document.getElementById("resultado").textContent = mensaje;*/

// Problema 3:
/*let jugadorA = prompt("Cuántos juegos ganó el Jugador A");
let valor1 = parseInt(jugadorA);

let jugadorB = prompt("Cuántos juegos ganó el Jugador B");
let valor2 = parseInt(jugadorB);

let mensaje = "";

if ((valor1 >= 0 && valor1 <= 7) && (valor2 >= 0 && valor2 <= 7)) {
    if ((valor1 === 7 && (valor2 === 5 || valor2 === 6)) || (valor1 === 6 && valor2 <= 4)) {
        mensaje = `Jugador A ganó el set con marcador ${valor1} - ${valor2}`;
    } else if ((valor2 === 7 && (valor1 === 5 || valor1 === 6)) || (valor2 === 6 && valor1 <= 4)) {
        mensaje = `Jugador B ganó el set con marcador ${valor1} - ${valor2}`;
    } else if ((valor1 < 6 && valor2 < 6) || (Math.abs(valor1 - valor2) < 2 && valor1 >= 5 && valor2 >= 5)) {
        mensaje = `El set aún no termina. Marcador actual: ${valor1} - ${valor2}`;
    } else {
        mensaje = "Resultado inválido";
    }
} else {
    mensaje = "Los valores ingresados están fuera del rango permitido (0 a 7)";
}

document.getElementById("resultado").textContent = mensaje;*/

/*************************************************
    ABP AE2 Ejercicio Práctico
**************************************************/
// Problema 1:

/*let valor = prompt("Ingresa un monto");
let monto = parseFloat(valor);

const cambioDolar = 745;

if (!isNaN(monto)) {
    let resultadoPesoChileno = monto * cambioDolar;
    console.log("Equivalente en pesos chilenos: " + resultadoPesoChileno);
} else {
    console.log("Por favor, ingresa un monto válido.");
}*/

// Problema 2
/*let edadTexto = prompt("Ingresa tu edad");
let edad = parseFloat(edadTexto);

let cedulaTexto = prompt("¿Tienes cédula vigente? (si/no)").toLowerCase();
let cedulaVigente = (cedulaTexto === "si");

let ahorroTexto = prompt("Ingresa tu ahorro en UF");
let ahorroUF = parseFloat(ahorroTexto);

let vulnerableTexto = prompt("¿Perteneces al 70% más vulnerable? (si/no)").toLowerCase();
let vulnerable70 = (vulnerableTexto === "si");

if (edad > 18 && cedulaVigente && ahorroUF >= 4 && vulnerable70) {
    console.log("Puede optar al beneficio");

    let ufSolicitadas = parseFloat(prompt("¿Cuántas UF deseas usar en total?"));
    let mesesNecesarios = ufSolicitadas / 4.2;

    if (ufSolicitadas <= 170 && mesesNecesarios <= 96) {
        console.log("Puedes usar el subsidio en ese periodo.");
    } else {
        console.log("No puedes solicitar esa cantidad de UF o tiempo excedido.");
    }

} else {
    console.log("No califica para el subsidio.");
}
*/

/*************************************************
    ABPRO AE1 Ejercicio Práctico
**************************************************/
/*
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
*/
// Paso 3: calcular con if- else: valor neto, IVA, despacho y total final.
/*if (valorNeto > 0) {
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
*/
