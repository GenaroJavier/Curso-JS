/**
 * Métodos de childs 
 */

const contenedor = document.querySelector('.contenedor');

const tit_ant = document.querySelector('.titulo_antiguo');

const tit_nue = document.createElement('h2'); 

const parrafo = document.querySelector('.parrafo');

tit_nue.innerHTML = 'Titulo nuevo'; 

//Remplaza un elemento por otro
contenedor.replaceChild(tit_nue, tit_ant); 

//Elimina un elemento del contenedor
contenedor.removeChild(parrafo); 

//La funcion hasChildNodes verifica si un contenedor tiene hijos

tit_nue.hasChildNodes() ? document.write('El contenedor tiene hijos') : document.write('El contenedor NO tiene hijos')

