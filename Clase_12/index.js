"use strict"

// Eventos en javascript --> Temporizadores o timers
// 2 tipos de temporizadores
// setInterval --> ejecucion infinita de un elemento cada un determinado tiempo
// setTimeout --> ejecuta una accion despues del tiempo indicado y se ejecutará una sola ves

/* var temporizador = setInterval(function(){
    setColor()
},2000); */

setTimeout(function(){
    setColor()
},3000);



function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green":"blue";
}

function stopChangeColor(){ // funcion que detendra el temporizador
    clearInterval(temporizador); // limpia el intervalo existente
}