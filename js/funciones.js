/**
 * Location 
 */

const pathName = () => {
    //Nos devuelve la ruta del pathname 
    alert(window.location.pathname);
}

const href = () => {
    //Devuelve el href de la pagina actual
    alert(window.location.href);
}

const hostName = () => {
    //Devuelve el hostname de la pagina
    alert(window.location.hostname);
}

const protocol = () => {
    //Devuelve el protocolo de la pagina
    alert(window.location.protocol);
}


const assign = () => {
    //carga un nuevo documento
    alert(window.location.assign('https://www.youtube.com'));
}