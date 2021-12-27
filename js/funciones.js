/*Condicionales "if"*/

nombre = prompt('Ingresa tu nombre porfavor')
edad = parseInt(prompt('Ingresa tu edad por favor'));

if (edad > 18 && edad < 22) {
    document.write(`Felicidades ${nombre}, eres mayor de edad en México`)
}

else if (edad >= 22) {
    document.write(`Felicidades ${nombre}, eres mayor de edad en EU`);
}

else if (edad < 19){
    document.write(`Lo sentimos ${nombre}, no eres mayor de edad`);
}

/*
    Se recomienda que al momento de realizar comparaciones se use
    1 if (para la condicion principal)
    else if (los que se necesiten)
    else (por ultimo un else como final por si todas las comparaciones anteriores no se cumplieron)
*/