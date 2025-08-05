/*************************************************
    M4AE5 - ABP6 Ejercicio Práctico
**************************************************/
// Utilizar un objeto Cine con propiedades como nombre, salas y capacidad Por Sala.
function Sala(id, capacidad) {
    this.id = id;
    this.capacidad = capacidad;
    this.asientosDisponibles = [];
    this.asientosReservados = [];

    //Crear un objeto Sala que tenga un identificador, una lista de asientos disponibles y una lista de asientos reservados.
    const filas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const totalFilas = filas.length;
    const asientosPorFila = Math.floor(capacidad / totalFilas);

    let totalAsientos = 0;
    for (let f = 0; f < totalFilas; f++) {
        for (let i = 1; i <= asientosPorFila && totalAsientos < capacidad; i++) {
            const asiento = filas[f] + i;
            this.asientosDisponibles.push(asiento);
            totalAsientos++;
        }
    }

    //Implementar métodos en los objetos para:
    //Reservar un asiento (reservarAsiento(asiento)).
    this.reservarAsiento = function(asiento) {
        const index = this.asientosDisponibles.indexOf(asiento);
        if (index !== -1) {
            this.asientosDisponibles.splice(index, 1);
            this.asientosReservados.push(asiento);
            console.log(`Asiento ${asiento} reservado con éxito.`);
        } else {
            console.log(`El asiento ${asiento} ya está reservado o no existe.`);
        }
    };

    //Cancelar una reserva (cancelarReserva(asiento)).
    this.cancelarReserva = function(asiento) {
        const index = this.asientosReservados.indexOf(asiento);
        if (index !== -1) {
            this.asientosReservados.splice(index, 1);
            this.asientosDisponibles.push(asiento);
            console.log(`Reserva del asiento ${asiento} cancelada.`);
        } else {
            console.log(`El asiento ${asiento} no está reservado.`);
        }
    };

    //Mostrar los asientos disponibles (mostrarDisponibles()).
    this.mostrarDisponibles = function() {
        console.log(`Asientos disponibles en ${this.id}: ${this.asientosDisponibles.join(', ')}`);
    };
}

const Cine = {
    nombre: "Gestión de Reservas en un Cine",
    capacidadPorSala: 112,
    salas: [],

    agregarSala: function(id) {
        const sala = new Sala(id, this.capacidadPorSala);
        this.salas.push(sala);
    }
};

Cine.agregarSala("Sala 1");
const sala1 = Cine.salas[0];
const contenedor = document.getElementById("sala-cine");

sala1.asientosDisponibles.concat(sala1.asientosReservados).forEach(asiento => {
    const btn = document.createElement("button");
    btn.classList.add("asiento");
    btn.textContent = asiento;

    if (sala1.asientosReservados.includes(asiento)) {
        btn.classList.add("reservado");
    }

    btn.addEventListener("click", () => {
        if (sala1.asientosReservados.includes(asiento)) {
            sala1.cancelarReserva(asiento);
            btn.classList.remove("reservado");
        } else {
            sala1.reservarAsiento(asiento);
            btn.classList.add("reservado");
        }
    });

    contenedor.appendChild(btn);
});

// Simular el flujo de reservas con datos de prueba
sala1.reservarAsiento("A1");
sala1.reservarAsiento("B2");
sala1.cancelarReserva("A1");
sala1.mostrarDisponibles();

/*************************************************
    M4AE4 - ABP5 Ejercicio Práctico
**************************************************/
// Problema 1:
/*function sumatoria(n) {
    if (n < 1 || n >= 100) {
        return "El número debe ser mayor o igual a 1 y menor que 100";
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    return suma;
}

let numero = parseInt(prompt("Ingresa un número menor que 100:"));
let resultado = sumatoria(numero);
console.log("La sumatoria desde 1 hasta " + numero + " es:", resultado);*/

// Problema 2:
/*function esPrimo(n) {
    if (n <= 1) {
        console.log(n + " no es primo");
        return;
    }

    let esPrimo = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
        esPrimo = false;
        break;
        }
    }

    if (esPrimo) {
        console.log(n + " es primo");
    } else {
        console.log(n + " no es primo");
    }
}

let numero = parseInt(prompt("Ingresa un número:"));
esPrimo(numero);*/

// Problema 3:
/*function cuentaRegresiva(n) {
    if (n < 1 || n >= 100) {
        console.log("El número debe ser mayor o igual a 1 y menor que 100");
        return;
    }

    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

let numero = parseInt(prompt("Ingresa un número menor que 100:"));
cuentaRegresiva(numero);*/

//Problema 4:
/*function sumaPares(n) {
    if (n <= 10 || n >= 1000) {
        console.log("El número debe ser mayor que 10 y menor que 1000");
        return;
    }

    let suma = 0;

    for (let i = 2; i <= n; i += 2) {
        suma += i;
    }

    console.log("La sumatoria de los pares desde 1 hasta " + n + " es:", suma);
}

let numero = parseInt(prompt("Ingresa un número mayor que 10 y menor que 1000:"));
sumaPares(numero);*/

//Problema 5:
/*function tablaMultiplicar(n) {
    console.log("Tabla de multiplicar del " + n + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
tablaMultiplicar(numero);*/

//Problema 6:
/*let arreglo = [34, 7, 23, 32, 5, 62, 12, 78, 3, 15];
console.log("Arreglo original:", arreglo);

arreglo.sort(function(a, b) {
    return a - b;
});

console.log("Arreglo ordenado:", arreglo);*/

/*************************************************
    M4AE3 - ABP4 Ejercicio Práctico
**************************************************/
// Problema 1:

/*let n = parseInt(prompt("Ingresa un número:"));
let arreglo = [];

let valor = 1;

for (let i = 0; i < n; i++) {
    arreglo.push(valor);
    valor *= 2;
}

console.log(arreglo);*/

// Problema 2:

/*let arreglo = [4, 15, 7, 22, 9, 18, 2, 30, 11, 5];
let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}

console.log("El mayor número es:", mayor);*/

// Problema 3:

/*const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

if (numero >= 1 && numero <= 7) {
    let dia = dias[numero - 1];
    console.log("El día correspondiente es:", dia);
    } else {
    console.log("Número inválido. Debe estar entre 1 y 7.");
}*/

// Problema 3:

/*let arreglo = [12, 45, 7, 89, 23, 56, 90, 3, 14, 67,100];

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
    }*/

// Problema 4:

/*let arreglo = [34, 7, 23, 32, 5, 62, 12, 78, 3, 15];

console.log("Arreglo original:", arreglo);

arreglo.sort(function(a, b) {
    return a - b;
});

console.log("Arreglo ordenado:", arreglo);*/

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
