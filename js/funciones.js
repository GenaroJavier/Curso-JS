/*Operadores de lógicos*/

let num1 = 10; 
let num2 = 21; 
let num3 = 32; 
let num4 = 10;

resultado =  (num3 > num1) || !((num1 > num2) && (num1 >= num4)); 
/*Devuelve true*/

document.write(resultado)


/*
    && obliga a que las dos partes de la condicion se cumplan. 
    || Con que una parte de la condicion se cumpla devuelve true. 
    ! Cambia el valor de la condicion, si se devuelve true lo cambia a false. 
*/