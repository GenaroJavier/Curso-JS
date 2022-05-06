/**
 * 
 * screen, screenleft, screentop
 */

//devuelve una referencia al pbjeto asociado con la ventana
const pantalla = window.screen; 

// console.log(pantalla);

// console.log(pantalla.width);
// console.log(pantalla.height);


/**
 * Nos devuelve la distancia que hay desde el borde 
 * del navegador hasta el borde de mi pantalla. 
 */

const pantalla_monitorL = window.screenLeft; 
const pantalla_monitorT = window.screenTop; 

// console.log(pantalla_monitorL);
// console.log(pantalla_monitorT);

/**
 * scrollx scrolly 
 * devuelven el numero de pixeles que el documento
 * se desplaza horizontalmente y verticalmente.
 */

// const scrollY = window.scrollY;
// const scrollX = window.scrollX;

// console.log(scrollX);
// console.log(scrollY);

//tambien podemos poner scrollTo, que son casi lo mismo
//basicamente mueve el scroll a la posicion que nosotros 
//le especifiquemos 
window.scroll(200, 300);