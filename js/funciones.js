/*Historia de cofla 4.1*/
//Calculadora 2.0

var num1, resultado, operacion;

const uno = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+1;
}

const dos = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+2;
}

const tres = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+3;
}

const cuatro = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+4;
}

const cinco = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+5;
}

const seis = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+6;
}

const siete = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+7;
}

const ocho = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+8;
}

const nueve = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+9;
}

const cero = () => {
    let dato = document.getElementById('screen').value;
    document.getElementById('screen').value = dato+0;
}

const punto = () => {
    let dato = document.getElementById('screen').value;
    let punto = false;
    for (let letra of dato) {
        if (letra == '.') {
            punto = true;
            alert('Solo puedes usar un punto decimal')
            break;
        }
    }
    if (punto == false) document.getElementById('screen').value = dato+'.';
}

const borrar = () =>{
    document.getElementById('screen').value = '';
}

const pedirnumero = () => {
    return (document.getElementById('screen').value);
}

const dividir = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 1;
}

const residuo = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 2;
}

const multiplicacion = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 3;
}

const resta = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 4;
}

const suma = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 5;
}

const potencia = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    operacion = 6;
}

const RaizCuadrada = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    document.getElementById('screen').value = (Math.sqrt(num1));
}

const RaizCubica = () => {
    num1 = parseFloat(pedirnumero());
    borrar();
    document.getElementById('screen').value = (Math.cbrt(num1));
}

const imprimir = () => {
    let num2 = parseFloat(pedirnumero());

    switch (operacion) {
        case 1:
            document.getElementById('screen').value = (num1/num2);
            break;
        case 2:
            document.getElementById('screen').value = (num1%num2);
            break;
        case 3:
            document.getElementById('screen').value = (num1*num2);
            break;
        case 4:
            document.getElementById('screen').value = (num1-num2);
            break;
        case 5:
            document.getElementById('screen').value = (num1+num2);
            break;
        case 6:
            document.getElementById('screen').value = (num1**num2);
            break;
    }
}
