//Atributos input 

const nombre = document.getElementById('nombre');

const imprimir = () => {
    //Obtienes el valor del input
    document.write(nombre.value);
}

const cambiarTipo = () => {
    //Cambias el tipo de input 
    nombre.type = "number"; 
}

const seleccionarArchivo = () => {
    //Cambias el tipo de input 
    nombre.type = "file"; 
    //Especificas el tipo de archivo que debe ser introducido
    nombre.accept = "image/gif"
}

    //Verifica que la longitud de una entrada de un form sea la minima especificada  
    nombre.minLength = 5; 
    nombre.placeholder = "Ingresa tu nombre";
    //Solo basta con especificar algo entre las comillas para decir que requerido este campo, si no se especifica no aparece la notificación 
    nombre.required = 'true'; 



//No hace falta utilizar el setAttribute 