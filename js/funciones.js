//Herencia

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

    MayordeEdadl() {
        if (this.edad >= 18) return true; 
        else return false; 
    }
}

let Genaro = new Persona('Genaro', 21, 'Mexicano'); 

class Mexicano extends Persona {
    constructor(nombre, edad, estado) {
        super(nombre, edad); 
        this.nacionalidad = 'Mexicano'; 
        this.estado = estado; 
    }
}

let Jesus = new Mexicano('Jesus', 15, 'Hidalgo'); 

document.write(`Mi nombre es ${Genaro.nombre} tengo ${Genaro.edad} años, soy ${Genaro.nacionalidad} <br>`); 

document.write(`Mi nombre es ${Jesus.nombre} tengo ${Jesus.edad} años, soy ${Jesus.nacionalidad} y vivo en ${Jesus.estado} <br>`); 
