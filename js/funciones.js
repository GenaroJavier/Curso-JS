/*while*/

let cont = 0, ast = 1; 
const tronquito = `| | |`
for (let vuelta = 0; vuelta < 7; vuelta++) {
    for (let j = 1; j <= ast; j++) {
        document.write(' * ');
    }
    document.write(`<br>`)
    ast+=2;
}

for (let tronco = 0; tronco <= 2; tronco++){
    document.write(`<p class='texto'>${tronquito}<p>`);
}