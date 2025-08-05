# Módulo 4

Fundamentos de programación en JavaScript.

### Instrucciones para Visualizar el Proyecto

1. Clonar el repositorio:
```bash
git clone git@github.com:valeriatorrealba/modulo4.git
```
2. Accede al local host desde tu navegador y abrir la consola del navegador.

``` bash
http://127.0.0.1:5500/index.html
```

Si usas Visual Studio Code, puedes instalar la extensión Live Server para visualizarlo rápidamente.

## 1. ABP AE1 Ejercicio Práctico

ABP AE1 Ejercicio Práctico: [ABP AE1 Ejercicio Práctico](https://github.com/valeriatorrealba/modulo4/blob/main/pdf/ABP-AE1.pdf)

## 2. ABPRO AE1 Ejercicio Práctico

Instrucciones: Crear carrito de compras( uso solo de variables locales y globales y condicionales if-else)

- Paso 1: Crear 2 o 3 productos
- Paso 2: seleccion y cantidad de producto
- Paso 3: calcular con if- else: valor neto, IVA, despacho y total final.

## 3. ABP AE2 Ejercicio Práctico

Problema 1:
Le han contratado para crear una función que recibe como parámetros el
monto total en dólares de la cuenta corriente de un cliente y devuelve su
equivalente en pesos chilenos, considere como tipo de cambio 745. 

Problema 2
El estado de Chile posee un beneficio denominado “Subsidio de arriendo
de vivienda”, el cual consiste en un aporte mensual de 4,2 Unidades de
Fomento (UF) por un máximo de 170 UF, el cual podrá ser utilizado de
manera consecutiva o fragmentada en un plazo de 8 años.

## 4. ABP2 AE2 Ejercicio Práctico

Problema 1:
En un conocido juego de azar con opciones pertenecientes al conjunto de
los números mayores a 1 y menores o iguales a 100, existen números que
tienen más probabilidad de ganar. Esto aplica cuando un número es menor
a 15 y mayor a 5, o bien si el número es el 70 o el 55. 

Problema 2:
Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no
divisible entre 100, o bien, si es divisible entre 400.

Problema 3:
Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no
conoce las reglas del deporte. En particular, no ha logrado aprender cómo
saber si un set ya terminó, y quién lo ganó.

## 5. ABPRO AE2 Ejercicio Práctico

Problema 1:
Enunciado del ejercicio (versión con bucle sin arreglos)

Carrito de compras con menú interactivo y bucle

Elabora un programa que permita simular un carrito de compras utilizando prompt(), en el que el usuario pueda seleccionar productos a través de un menú.

El menú debe repetirse hasta que el usuario indique que desea terminar la compra.

Restricciones:
- No se permite usar arreglos ni objetos.
- Debes usar bucles, condicionales if-else y variables globales/locales.

Pasos mínimos:
1.  Define 3 productos con nombre y precio.
2.  Muestra un menú que permita seleccionar un producto y cantidad.
3.  Suma el valor neto a una variable totalNeto por cada producto agregado.
4.  Al finalizar, calcula:
    - IVA (19%)
    - Despacho (gratis si el total supera los $50.000, $3000 en caso contrario)
    - Total final
5.  Muestra un resumen de la compra por console.log(). ( Template-literal)

## 6. M4AE3 - ABP4 Ejercicio Práctico (versión sin funciones)

- Cree una función que dado un número n cree un arreglo de largo
n, donde en cada posición del arreglo este el doble del anterior
nota, el primer elemento del arreglo es 1

- Cree una función que dado un arreglo de números de largo 10
permita obtener el mayor número contenido en el arreglo

- Dado un arreglo de strings que contiene los días de la semana,
cree una función que le permita obtener un día en particular si se
recibe su número correspondiente.
Ej: 1 = Lunes , 7 = Domingo.

- Cree una función que le permita buscar un elemento contenido en
el arreglo. Nota: el arreglo solo contendrá números, y tendrá un
largo máximo de 100.

- Cree un programa que dado un arreglo de números desordenados
los ordene ascendentemente.

## 7. M4AE5 - ABP6 Ejercicio Práctico

Requerimientos Funcionales
1. Utilizar un objeto Cine con propiedades como nombre, salas y
capacidadPorSala.
2. Crear un objeto Sala que tenga un identificador, una lista de asientos
disponibles y una lista de asientos reservados.
3. Implementar métodos en los objetos para:
o Reservar un asiento (reservarAsiento(asiento)).
o Cancelar una reserva (cancelarReserva(asiento)).
o Mostrar los asientos disponibles (mostrarDisponibles()).
4. Simular el flujo de reservas con datos de prueba.
