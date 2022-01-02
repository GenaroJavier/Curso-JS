let numero1 = parseInt(prompt("Ingresa el numero 1"));
let numero2 = parseInt(prompt("Ingresa el numero 2"));
let nombre = prompt('Cual es tu nombre?');

//funcion flecha 
const sumar = (num1, num2) => {
    return (num1 + num2)
}

alert(`El resultado es: ${sumar(numero1, numero2)}`);

//funcion flecha con un parametro, cuando se utiliza un solo parametro
//no es necesario poner los parentesis. 

const saludar = nomb => {
    return `Hola ${nombre}`;
}

alert(saludar()); 
