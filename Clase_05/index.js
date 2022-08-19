"use strict"
/* control de ciclos
 instrucciones break y continue */

var contador = 0;
var cuenta = 0;


for(contador=0;contador<=20;contador++){
    if(contador==5){
        break; // rompe el ciclo
    }
    if(contador%2==0){
        continue; // toma un atajo al siguiente paso
    }
    cuenta++;
    debugger;
}
console.log("hay "+ cuenta + " numeros impares");