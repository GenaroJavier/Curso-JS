/**
 * Creación de elementos
 */

const contenedor = document.querySelector(".contenedor"); 

//Crea un elemento 
const item = document.createElement("LI");

//Creas un nodo de tipo texto
const texto_del_item = document.createTextNode("Esto es un item de la lista");

//(appendChild) Es un metodo que se aplica al padre pero se toma como parametro al hijo
item.appendChild(texto_del_item);
contenedor.appendChild(item);

console.log(item); 

/**
 * Tambien se puede hacer de la siguiente forma
 * (este metodo es poco practico)
 */
 const item2 = document.createElement("LI");
 item2.innerHTML = "Esto es un 2 elemento"; 
 contenedor.appendChild(item2);

 /**
  * Con esta funcion podemos ahorranos todos esos recursos 
  * desperdiciados al momento de crear elementos con el dom 
  */

 const fragmento = document.createDocumentFragment("LI");

 for (let x = 0; x<10; x++) {
    const item3 = document.createElement("LI");
    item3.innerHTML = "Item de la lista: " + (parseInt(x)+1); 
    fragmento.appendChild(item3);
 }

 contenedor.appendChild(fragmento);
