"use strict"

// Ventanas emergentes o cuadros de dialogo en javascript --> ventana de confirmacion ---> devuelve true o false 

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended",function(){
let resultado = confirm("¿deseas ver el video nuevamente?")==true ? video.play() : window.location = "https://www.google.com.ar";
}) 