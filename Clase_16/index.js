"use strict"

// Ventanas emergentes o cuadros de dialogo en javascript --> ventana para ingreso de datos (parte 2)

// prompt --> metodo similar al scanf de lenguaje C
// promt ---> si se selecciona cancelar --> regresa un valor null
// parametros del prompt: primer mensaje, texto por default en la casilla para completar el dato

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended", function () {
    let email = prompt("Escribe tu correo para ver mas videos",  "data@info.com");
   
    if (email == null || email == "") {
         console.log("Sin datos");
     } else {
         console.log(email);
     }
 });