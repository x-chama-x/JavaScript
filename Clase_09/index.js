"use strict"

// Eventos en javascript --> Eventos del teclado
// keydown --> momento en el que se oprime una tecla
// keypress --> momento en que la tecla se mantiene oprimida
// keyup --> moneto en que se deja de presionar la tecla

// Se utilizan con el objeto window

window.addEventListener("keydown",function (){
    console.log("pulsando tecla");
    console.log(String.fromCharCode(event.keycode)); // event.keycode --> valor que muestra la tecla que se está presionando
}) // event.keycode esta en desuso y no se puede usar...

window.addEventListener("keypress",function(){ 
    console.log("pulsando pulsada");
})

window.addEventListener("keypress",function(){ 
    console.log("pulsando liberada");
})