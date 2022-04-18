/**
 * Obtención y modificación de elementos. 
 */

const titulo = document.querySelector('.tittle'); 

//Devuelve el texto de cualquier nodo
let res1 = titulo.textContent; 
alert(res1); 

//Devuelve el contenido html de un elemento 
let res2 = titulo.innerHTML; 
alert(res2); 

//devuelve el codigo html completo del elemento
let res3 = titulo.outerHTML; 
alert(res3); 