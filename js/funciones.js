/**
 * Clases, classList y metodos de classList 
 */


const titulo = document.querySelector(".tittle"); 

//Añade una clase 
titulo.classList.add('tittle-red'); 

//Remueve una clase  
//titulo.classList.remove('tittle'); 

//Te deveulve el valor de la clase que especifiques
document.write(titulo.classList.item(0));


//Verifica si la clase especificada esta en el objeto, devolviendo true o false.
document.write('<br>' + titulo.classList.contains('tittle'));
document.write('<br>' + titulo.classList.contains('tit'));


/**
 * Lo que hace este metodo es similar al de arriba pero por ejemplo
    * en el caso de que si exista la clase, la elimina
    * al contrario si no existe la clase la agrega
    * 
    * Podemos especificar un valor booleano ejemplo: 
        * titulo.classList.toggle('titulo-principal', true); 
    * de esta forma estamos "Forzando" a que se ejecute una accion, por ejemplo
    * si le ponemos true y la clase no existe la va a agregar, si existe ahi la va a dejer
    * de otro modo si le ponemos false, clase existe, la elimina si no existe asi la va a dejar.
 */

//No existe
titulo.classList.toggle('titulo-principal'); 
//Existe
titulo.classList.toggle('tittle-red'); 

//Remplaza una clase por otra
titulo.classList.replace('titulo-principal','tittle-principal'); 