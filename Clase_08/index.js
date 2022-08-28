"use strict"

const boton = document.querySelector('.boton'); // asociacion HTML a Js

boton.addEventListener("click",function(){
    console.log("el boton se ha pulsado")
}) // (addEventListener) metodo que escuchara los "eventos" de la pagina web --> en este caso al hacer un "click" en el boton

boton.addEventListener("mouseover",function(){
    console.log("el mouse esta sobre el boton")
})

boton.addEventListener("mouseout",function(){
    console.log("el mouse esta afuera boton")
})