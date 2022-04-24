/**
 * Propiedades de parents
 */

const contenedor = document.querySelector('.contenedor');

const tit_ant = document.querySelector('.titulo_antiguo');

const tit_nue = document.createElement('h2'); 

const parrafo = document.querySelector('.parrafo');

tit_nue.innerHTML = 'Titulo nuevo'; 

//Te retorna el elemento padre de un elemento. 
console.log(parrafo.parentElement);
console.log(tit_ant.parentElement);
console.log(contenedor.parentElement);
