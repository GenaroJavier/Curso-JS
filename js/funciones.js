/**
 * Obtención y modificación de childs
 */

const contenedor = document.querySelector(".contenedor"); 

/**
 * Estas funciones nos permiten obtener el primer y ultimo elemento
 * de un archivo. 
 * 
 * Nota: Hay que tener cuidado con esto, ya que no nos devolvera el
 * resultado esperado por los espacios que tenemos en el html. 
 * 
 * ej: <div class="contenedor"><h2>Un h2 común</h2>
 */

const firs_child = contenedor.firstChild;
const last_child = contenedor.lastChild;

// console.log(firs_child);

/**
 * Para solucionar esos problemas es necesario utilizar la siguiente 
 * funcion
 */

const firs_child_2 = contenedor.firstElementChild;
const firs_child_3 = contenedor.lastElementChild; 

// console.log(firs_child_2); 

/**
 * Esta funciona me devuelve todos los hijos del contenedor
 * pero, es importante tener en consideración que No, nos devuelve un array
 * si no que nos devuelve un nodeList. 
 * 
 * Aunque nos devuelve espacios como en las primeras funciones. 
 * (Se puede recorrer con un foreach)
 */
const hijos = contenedor.childNodes; 

// console.log(hijos);

/**
 * Nos devuelve todas las etiquetas del contenedor al igual que la funcion
 * anterior no devuelve un array, si no que retorna un HTMLColletion. 
 * 
 * Para recorrerlo se usa un for. 
 */

const hijos_2 = contenedor.children; 

for (hijo of hijos_2) {
    console.log(hijo); 
}