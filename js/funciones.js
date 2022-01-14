let nombres = ['Genaro', 'Javier', 'Pedro', 'Maria', 'Abelardo', 'Ana'];
let numeros = [221, 12, 3, 11, 32, 213, 43, 31, 5]

//elimina la ultima posicion del arreglo. 
    nombres.pop(); 

//elimina la primera posicion del arreglo. 
    nombres.shift(); 

//Agregamos un elemento al final del arreglo.
    nombres.push('Juancito')

//Invierte el arreglo
    nombres.reverse(); 

//Agrega uno o mas elementos al inicio del array
    nombres.unshift('Julio', 'Jaime', 'Ricardo');

//Ordena los elementos del array, es un metodo inestable, por que pasa los valores a strings, asi que es mas recomendable usar unicamente con strings.
    nombres.sort(); 

//Este metodo nos permite insertar o eliminar valores en medio del array. ejemplo 
// array.splice(donde empiezo a eliminar o insertar,cuantos elimino, que inserto, que inserto, que inserto); 
    
    nombres.splice(2, 3, 'Zoro', 'Chopper', 'Nami')

//Une todos los elementos de una matriz (u objeto similar) en una cadena y la devulve. OJO: devuelve un string, por eso dice UNE 
    let nuevoArreglo = nombres.join('<br> Elemento:'); 
    document.write('Elemento: ' + nuevoArreglo);

//Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta el fin (fin no incluido)
    let nombreSelec = nombres.slice(1, 3); 

    document.write(nombreSelec); 

    for (let nombre of nombres) {
        //document.write(nombre + '<br>'); 
    }

//Filter, funciona como el foreach pero con la opcion de verificar si se cumple una condicion. 
    let resultado = nombres.filter((nombre) => nombre.length > 6); 
    document.write(resultado); 

//Es un metodo que nos permite recorrer un arreglo de forma mas facil
    nombres.forEach(nombre => document.write(`${nombre}, `)); 

//Con -1 nos referimos al final del array
//Los metodos de Strings que vimos anteiormente tambien nos sirven en arrays. 