/*Historia de Cofla*/
let preRoberto = parseInt(prompt('Ingresar presupuesto de Roberto')); 
let prePedro = parseInt(prompt('Ingresar presupuesto de Pedro')); 
let preCofla = parseInt(prompt('Ingresar presupuesto de Cofla')); 

if (preCofla < 0.6) {
    alert('El presupuesto es insuficiente para cualquier producto');
}
else if (preCofla >= 0.6 && preCofla < 1){
    alert('Tu helado ideal es el de agua');
}

else if (preCofla >= 1 && preCofla < 1.6){
    alert('Tu helado ideal es el de crema');
}

else if (preCofla >= 1.6 && preCofla < 1.7){
    alert('Tu helado ideal es el de heladovich');
}

else if (preCofla >= 1.7 && preCofla < 1.8){
    alert('Tu helado ideal es el de helardo');
}

else if (preCofla >= 1.8 && preCofla < 2.9){
    alert('Tu helado ideal es el de confites');
}

else if (preCofla >= 2.9){
    alert('Tu helado ideal es el de Pote de 1/4 kg');
}