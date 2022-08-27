"use strict"

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton'); // se liga el boton creado en html y se guarda su referencia en la variable boton

/* --> USANDO UNA FUNCION ANONIMA TRADICIONAL

boton.addEventListener('click', function () { // advierte que se ha presionado el boton 
    //console.log("boton pulsado");
    //console.log(this); // me da por consola la eqtiqueta del boton --> <div class="boton"> Da click para obtener el contenido </div>
    console.log(this.innerHTML); // me da por consola el texto del boton --> Da click para obtener el contenido

})

*/

/* --> USANDO UNA FUNCION TIPO ARROW



*/

boton.addEventListener('click',() => {
    //console.log(this); // se tendrá acceso a toda la ventana (metodos (vinculados a un objeto),propiedades)
    // aplicar un redireccionamiento a otra pagina web. esto nos permite entre otras cosas, 
    // (con la propiedad de location localizada en la ventana) 
    this.location = "http://www.google.com"; // redireccionamiento a la pagina de google
});