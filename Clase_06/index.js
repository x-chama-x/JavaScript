"use strict"
/* 
ESTRUCTURA DE UNA FUNCION EN JAVASCRIPT 

function saludar(){
    var saludo = "hola mundo";
    console.log(saludo);
}
saludar() // Invocacion manual por software

*/
// Invocar por consola --> escribir --> saludar()
// si aparece undefine en consola es que la funcion no esta retornando nada 

/* SOLUCION APLICAR RETURN

function saludar(){
    var saludo = "hola mundo";
    return saludo;
}

*/

/*  PARAMETROS DE UNA FUNCION --> Ejemplo

function saludar(nombre,edad){
    console.log("hola",nombre);
    console.log("edad",edad);
}
saludar("Francisco",21);

*/

/*  PARAMETROS DE UNA FUNCION --> Ejemplo 2 (mejor forma)

function saludar(nombre,edad){
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Francisco",21);
console.log(mensaje);

*/

/* INICIALIZACION DE PARAMETROS

function contar(cantidad=20){ // cantidad empieza valiendo 20
    console.log("total: ",cantidad);
} 
contar(); // si se ingresa un valor, valdrá dicho valor en vez de 20

*/

/* PARAMETROS TIPO REST --> utilizar 3 puntos (...)
    function cocinar(...ingredientes){ // acepta cualquier cantidad de paramenteos
        console.log("ingredientes: ",ingredientes);
    }
    cocinar("pollo","pizza","empanadas","asado"); // en este caso se ingresan 4 parametros
*/

/* PARAMETROS TIPO SPREAD --> utilizar 3 puntos (...)
    function cocinar(ingrediente1,ingrediente2,ingrediente3){
        console.log("ingrediente1: ",ingrediente1);
        console.log("ingrediente2: ",ingrediente2);
        console.log("ingrediente3: ",ingrediente3);
    }
    var ingredientes = ["pollo","arroz"];
    cocinar(...ingredientes,"tomate"); // toma los datos del arreglo ingredientes y los usa de 
                                       // parametro en la funcion cocinar()

*/


/* FUNCIONES ANONIMAS --> no asignarle un nombre a dicha funcion y ejecutarlo sin asociarlo (igual lo ejecutas x consola xd)

var saludar = function(nombre){
    var mensaje = "hola"+ nombre;
    return mensaje;
}

*/

/* CALLBACKS

calcular(2,3,function(resultado){ // invocacion de la funcion calcular
    console.log("suma:",resultado) // recibe como parametros 2 (datoA), 3 (datoB), funcion sumarCB y funcion restarCB (func.anonimas)
},function(resultado){              
    console.log("resta:",resultado)

});

function calcular(datoA,datoB,sumarCB,restarCB){ // firma de la funcion calcular --> recibe como parametros d1,d2 
    var suma = datoA+datoB;                      // y las 2 funciones sumarCB y restarCB
    var resta = datoA-datoB;
    sumarCB(suma);
    restarCB(resta);
} 

*/

/* FUNCIONES ARROW | FAT ARROW | LAMBDA

var saludar = nombre => "hola "+ nombre; // estructura (declaracion)
console.log(saludar("Susana")); // invocacion

EJEMPLO 2

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

EJEMPLO 3

var calcular = (datoA,datoB) => datoA+datoB;
console.log(calcular(10,15));

EJEMPLO 4

var generar = (datoA,datoB) => {
    var datoC=5;
    return datoA+datoB+datoC;
};
console.log(generar(10,15));

EJEMPLO 4 --> sin parametros de entrada

var validar = () => {
    return "validacion correcta";
};
console.log(validar());

*/
