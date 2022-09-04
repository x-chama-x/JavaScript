"use strict"

// Arreglos multidimencionales en JS --> arreglos de arreglos

var platillos = ["ceviche", "tacos","pasta"]; 
var paises = ["Peru","Mexico","Italia"];

var menu = [platillos,paises]; // arreglo multidimencional

console.log(menu[0][0]); // acceder al elemento de un arreglo que esta dentro del arreglo multidimencional menu.
// en este caso se accede al elemento ceviche del arreglo platillos.