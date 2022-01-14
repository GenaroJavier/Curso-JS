//Objeto Math
let num = prompt('Ingrese un numero: '); 

document.write(`<h2>Raiz Cuadrada: </h2> ${Math.sqrt(num)}`);

document.write(`<h2>Raiz Cubica: </h2> ${Math.cbrt(num)}`);

document.write(`<h2>Raiz Maximo (2, 31, 34, 15, 652, 1234, 124): </h2> ${Math.max(2, 31, 34, 15, 652, 1234, 124)}`);

document.write(`<h2>Raiz Minimo (2, 31, 34, 15, 652, 1234, 124): </h2> ${Math.min(2, 31, 34, 15, 652, 1234, 124)}`);

document.write(`<h2>Random: </h2> ${ Math.round((Math.random() * (num - 1) + 1)) }`);


//Redondea hacia abajo
document.write(`<h2>Redondeo hacia abajo: </h2> ${ Math.floor(Math.sqrt(num)) }`);

//Redondea hacia un numero flotante mas preciso. 
document.write(`<h2>Redondeo mas preciso: </h2> ${ Math.fround(Math.sqrt(num)) }`);

//Redondea hacia el numero mas cercano puede ser arriba o abajo
document.write(`<h2>Redondeo hacia el numero mas cercano : </h2> ${ Math.round(Math.sqrt(num)) }`);

//elimina los decimales 
document.write(`<h2>Eliminar decimales: </h2> ${ Math.trunc(Math.sqrt(num)) }`);