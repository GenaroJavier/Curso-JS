/*For*/

for (let tabla = 1, j=1; tabla<=10; tabla++) {
    document.write(`<h2 class='subtitulo'>Tabla del ${tabla}<h2>`)
    for (let i=1; i<=10; i++) {
        document.write(`${j} X ${i} = ${i*j}<br>`)
    }
    j++;
}
