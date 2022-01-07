//Clases 
/*Cuando se trabaja con objetos, se recomienda usar 
en lugar de let. */

class persona {
    constructor(nombre, edad, nacionalidad,) {
        this.nombre = nombre; 
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }

    /*No podemos usar funciones flecha en clases*/

    imprimirPersona () {        
        document.write(`Mi nombre es: ${this.nombre} tengo ${this.edad} años y soy ${this.nacionalidad} <br>`);
    }
}

let Genaro = new persona('Genaro Javier', 21, 'Mexicano');
let Emy = new persona('Emy', 35, 'Estadunidense');
let Luffy = new persona('Monkey D Luffy', 19, 'East Blue')

Genaro.imprimirPersona();
console.log(Genaro); 
Emy.imprimirPersona();
console.log(Emy); 
Luffy.imprimirPersona();
console.log(Luffy); 

/*La diferencia entre un metodo y un funcion es que:
Un metodo debe estar dentro de una clase 
y la funcion no*/