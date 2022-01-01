/*For in*/

let alumnos = ['Genaro', 'Javier', 'Pepe', 'Dalto']


/*Nos devuelve la posicion de los elementos*/
for (let alumno in alumnos) {
    document.write(`${alumno} <br>`); 
}

/*Nos devuelve los elementos del array*/
for (let alumno in alumnos) {
    document.write(`${alumnos[alumno]} <br>`); 
}

for (let alumno of alumnos) {
    if (alumno == 'Genaro') {
        continue;
    }
    document.write(`${alumno} <br>`); 
}

