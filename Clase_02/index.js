"use strict"
var nombre = "Francisco"; // var --> variables globales
console.log(nombre);
const pi = 3.1416; // Variable cte

function saludo (){
    var nombre = "Lucas"; // dentro de la funcion vale "Lucas" pero fuera de ella vale "Francisco"
    console.log(nombre);
    let edad = 21; // Contenedor let --> usar variables locales/de bloque
    console.log(edad);
}

