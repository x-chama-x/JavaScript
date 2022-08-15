"use strict"
// trabajar con numeros en javascritpt

var edad = 35; // tipo de dato numerico
var cantidad = "100"; // tipo de dato cadena de texto
var nuevaCantidad = Number(cantidad); // convertir tipo de dato (cadena de texto) a dato numerico
// funcion parseInt() --> convertir datos a numeros enteros
// funcion parseFloat() --> convertir datos enteros a numeros flotantes

// trabajar con cadenas de texto en javascritpt

var edad = 21;
var edadAtexto = String(edad) // convertir dato numerico a cadena de texto

// trabajar con datos booleanos en javascritpt

var activo = true;

var estado = Boolean(10>9); // funcion que retorna true o false dependiendo del argumento

// trabajar con fechas en javascritpt

var fecha = new Date(); //  genera la fecha actual en el momento 
// en consola --> new Date() --> metodo del objeto fecha

/* metodos para trabajar en consola
fecha.getDay() --> obtiene el dia de la semana (1,2,3,4,5,6,7)
fecha.getDate() --> obtiene el dia del mes (ej: 5 de enero, devuelve el 5)
fecha.getHours() --> obtiene la hora al momento de ejecutar la instruccion
fecha.setDate(5) --> (trabajar con el dia 5) regresa un valor numerico convertido en fecha
en criollo: regresa una fecha dentro del mes actual donde haya sido el dia 5.
*/

// trabajar con simbolos en javascritpt

var simbolo1 = Symbol(); // funcion que crea un simbolo
var simbolo2 = Symbol(); // simbolo1 es distinto a simbolo2
var ambiente = Symbol("dev");

// cada vez que se genera un simbolo, se crea un dato unico alrededor del programa

// Estructurando datos con JSON --> JavaScript Object Notation

var persona = {nombre:'Sergio',twitter:'yacafx'}; // variable con 2 propiedades --> lista

var personas = [ // variable con multiples datos --> arreglo de 3 elementos --> lista
    {nombre:'Hugo',twitter:'dcHugo'},
    {nombre:'Paco',twitter:'dcPaco'},
    {nombre:'Luis',twitter:'dcLuis'},
    persona // se puede asignar la variable persona dentro de personas, agregando un elemento más. Ahora serían 5 elementos (0,1,2,3,4)
]

// Utilizar datos en un servidor o almacenarlos localmente
// Convertir datos utilizando el objeto JSON

var personaJSON=JSON.stringify(persona); // metodo stringify --> convierte en cadena de texto el contenido del objeto persona 

// Recuperar informacion JSON de un objeto convertido a texto 

var nuevaPersona=JSON.parse(personaJSON); // metodo parse, hace lo contrario que stringify
