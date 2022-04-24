/**
 * Propiedades de hermanos
 */

const contenedor = document.querySelector('.contenedor');

const tit_ant = document.querySelector('.titulo_antiguo');

const tit_nue = document.createElement('h2'); 

const parrafo = document.querySelector('.parrafo');

//Te muestra los elementos anteriores o siguientes de un elemento
console.log(tit_ant.nextElementSibling); 
console.log(tit_ant.previousElementSibling); 