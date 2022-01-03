let primero = false; 

const VerificarEntrada = (hraEntrada) => {
    let edad = parseInt(prompt('Introduce tu edad'));
    
    if (edad >= 18) {
        if (primero == false && hraEntrada >= 2) {
            alert('Bienvenido tu entrada es gratis'); 
            primero = true; 
        } else {
            alert('Bienvenido por favor pasa a pagar tu entrada'); 
        }
    }
    else {
        alert('Acceso denegado, necesitas ser mayor de edad')
    }
}

VerificarEntrada(1)
VerificarEntrada(3)
VerificarEntrada(0.2)
VerificarEntrada(1)
VerificarEntrada(0.3)
VerificarEntrada(3)
