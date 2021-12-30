/*For*/

/*Esto es un for basico*/
for (let i = 0; i<=10; i++) {
    /*Lo que el continue nos permite, en pocas palabras
    es saltar la iteracion del for, para este ejemplo 
    realize un for basico que va desde 0 a 10, por cada
    iteracion este la imprime en el documento de html.

    Por cada iteracion nosotros comparamos, si el contador del for
    vale 8, cuando esta condicion se cumpla, se especifica el continue
    por ende esta iteracion se omite y pasa a la siguiente, como 
    resultado tenemos que el numero 8 no se imprime en nuestro for.
    */
    if(i == 8) {
        continue; 
    }
    document.write(`${i}<br>`);
}