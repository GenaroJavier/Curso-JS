//Metodos estaticos
/*Podemos hacer uso de los metodos estaticos siempre y cuando no utilizemos las variables de la clase*/
class Persona {
    constructor(nombre, edad, nacionalidad,) {
        this.nombre = nombre; 
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }

    /*No podemos usar funciones flecha en clases*/

    imprimirPersona () {        
        document.write(`Mi nombre es: ${this.nombre} tengo ${this.edad} años y soy ${this.nacionalidad} <br>`);
    }

    static saludar () {
        //El confirm te permite realizar una pregunta y te devuelve true o false segun el usuario elija. 
        document.write(confirm('Te gusta las canciones de Kalimba')+'<br>'); 
    }
}
let Genaro = new Persona ('Genaro Javier', 21, 'Mexicano'); 
Persona.saludar(); 
document.write(Genaro.edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad')