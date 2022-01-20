/*Metodos de consola*/

//Limpia la consola 
console.clear(); 

// Aparece un mensaje de error en la consola si la afirmacion es false, si la afirmacion es verdadera, no aparecera nada. 
console.assert(5>2); 

//Muestra un mensaje de error
console.error('Esto es un error'); 

//Emite un mensaje informativo a la consola web. En alguna navegadores incluye un icono.
console.info('Esto es un mensaje con Informacion importante'); 

//Muestra un mensaje en la consola web (o el interprete de Js)
console.log('Esto es un mensaje'); 

//Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto y un parametro adicional columns y nos muestra 
//un tabla en consola.

console.table([1, 2, 3, 4, 5, 6]);

//Imprime un mensaje de advertencia. 
console.warn('Cuidado esto es un mensaje de advertencia'); 

//Despliega una lista interactiva de las propiedad del objeto Js especificado. 
let persona = {
    nombre: 'Genaro', 
    ApP: 'Perez',
    ApM: 'Lopez'
};

console.dir(persona); 
