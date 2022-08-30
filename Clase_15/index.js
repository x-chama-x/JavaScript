"use strict"

// Ventanas emergentes o cuadros de dialogo en javascript --> ventana para ingreso de datos

// prompt --> metodo similar al scanf de lenguaje C
// promt ---> si se selecciona cancelar --> regresa un valor null
// parametros del prompt: primer mensaje, texto por default en la casilla para completar el dato

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended",function(){
    let email = prompt("escribe tu correo para ver más videos","data@info.com");  // la variable email guarda el dato que el usuario ingrese   
    console.log(email);                                                        
}) 