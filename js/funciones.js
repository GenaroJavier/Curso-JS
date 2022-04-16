/**
 * Metodos de para definir, eliminar y obtener atributos.
 */

const rangoEdad = document.querySelector(".RangoEdad"); 

const cambiar = () => {
    //asigna un atributo
    rangoEdad.setAttribute('type', 'text'); 
}

const leer = () => {
    //Obtiene un atributo
    document.write(rangoEdad.getAttribute('type')); 
}

const eliminar = () => {
    //Elimina un atributo
    rangoEdad.removeAttribute('class'); 
}