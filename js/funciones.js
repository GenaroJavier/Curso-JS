/**
 * 
 * Historia de cofla. 
 */

const contenedor = document.querySelector('.contenedor');

const CrearLlave = (nombre, modelo, precio) => {
    img = '<img class="llave" src="llave.png" alt="">';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h4>Modelo: ${modelo}</h4>`; 
    precio = `<p>Precio: $${precio}</p>`;

    return [img, nombre, modelo, precio]; 
}

let documentFragment = document.createDocumentFragment();

for (let index = 0; index < 20; index++) {
    modeloRandom = Math.round(Math.random()*1000);
    precioRandom = Math.round(Math.random()*10*30);
    let llave = CrearLlave(`llave ${index+1}`, modeloRandom, precioRandom); 

    let div = document.createElement("DIV");
    div.classList.add(`flex-item`);
    div.classList.add(`flex-item-${index}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]; 
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
