"use strict"

const video = document.querySelector(".bostonVideo");

video.addEventListener("play",function (){
    console.log("el video ha iniciado")
}); // momento en el que se dio play al video

video.addEventListener("seeking",function (){
    console.log("se esta buscando en el video",this.currentTime); // this.currentTime --> tiempo al que modificó el cursor
}); // momento en el que se modifica la reproduccion del video moviendo el cursor 

video.addEventListener("ended",function (){
    console.log("el video ha finalizado")
}); // momento en el que se dio ha terminado

