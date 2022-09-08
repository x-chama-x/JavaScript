"use strict"

// desestructuracion de arreglos en JS

var platillos = ["Pizza","Asado","Empanadas"];

//var platillo1 = platillos[0]; // forma sucia
//var platillo2 = platillos[1]; // forma sucia
//var platillo3 = platillos[2]; // forma sucia

/* Proceso de desestructuracion 1

var platillo1 = null;
var platillo2 = null;
var platillo3 = null;

[platillo1,platillo2,platillo3] = platillos; // toma el arreglo y asigna cada elemento en cada variable 
// teniendo en cuenta la posicion de cada elemento del arreglo.

console.log(platillo1,platillo2,platillo3);

*/

// Proceso de desestructuracion 2



var [platillo1,platillo2,platillo3] = platillos;

console.log(platillo1,platillo2,platillo3);
