"use strict"

// Generacion de arreglos en JS con from()

// from()

var platillosHTML = Array.from(document.querySelectorAll(".platillos p"));

// document.querySelectorAll --> accede a la clase platillos y accede cada uno de esos elementos
// Array.from() --> convierte la clase platillos en un arreglo formal 


var platillos = platillosHTML.map(platillo=>platillo.textContent);

// platillosHTML.map(platillo=>platillo.textContent); ---> mapeo de los contenidos de la clase platillos

console.log(platillos);


