//Metodos cadenas 
let cadena = 'cadena de prueba'; 
let cadena2 = 'prueba'; 

//concatena dos strings
    alert(cadena.concat(cadena2)); 

//Si una cadena comienza con los caracteres de otro cadena, devuelve true, sino devuelve false, cabe menciaonar que este metodo es muy estricto.
    alert(cadena.startsWith(cadena2)); 

//Si una cadena termina con los caracteres de otro cadena, devuelve true, sino devuelve false, cabe menciaonar que este metodo es muy estricto.
    alert(cadena.endsWith(cadena2)); 

//Si una cadena puede encontrarse dentro de otra cadena, devulve true, si no devuelve false. 
    alert(cadena.includes(cadena2));

//Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
    alert(cadena.indexOf(cadena2)); 

//Devuelve el indice de la ultima posicion del  caracter de la cadena, si no existe, devuelve -1
    alert(cadena.lastIndexOf(cadena2)); 

//Rellenar cadena al principio con los caracteres deseados. 
    alert(cadena.padStart(22, '*'));


//Rellenar cadena al final con los caracteres deseados. 
    alert(cadena.padEnd(22, '*'));

//Repetir una cadena. 
    alert(cadena.repeat(3)); 

/*Divide la cadena de acuerdo a como le especifiquemos nosotros, por ejemplo
tenemos la oracion 'Hola-Genaro-Javier'
si nosotros especificamos que queremos que la oracion se divida en un arreglo y que en cada posicion 
del arreglo este la palabra antes del - , tambien podemos especificar el espacio como en el siguiente ejemplo.
*/
    let res = cadena.split(' '); 
    alert(res[0]); 
    alert(res[1]); 
    alert(res[2]); 

//Nos retorna un pedazo de la cadena, segun nosotros le especifiquemos. 
    alert(cadena.substring(0,3));

//Retorna la cadena en minusculas
    alert(cadena.toLowerCase());

//Retorna la cadena en mayusculas
    alert(cadena.toUpperCase());

//convierte un dato en sting. 
    let edad = 31; 
    alert(typeof(edad.toString())); 

//Elimina los espacios en blanco al principio o final de la oracion
    alert(cadena.trim());

//Elimina los espacios en blanco al principio del string;
    alert(cadena.trimStart());

//Elimina los espacios en blanco al final del string;
    alert(cadena.trimEnd());