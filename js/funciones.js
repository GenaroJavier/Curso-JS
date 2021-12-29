/*Arrays Asociativos (Objetos)*/

let persona = {
    nombre: 'Genaro', 
    apP: 'Perez', 
    apM: 'Lopez', 
    fecNac: '12/03/00', 
    curp: 'PELG000312HDFRPNA7'
}

document.write(`<b>Descripción:</b><br>
Mi nombre completo es: <b class="especial">${persona.nombre} ${persona.apP} ${persona.apM}</b>,<br>
naci el <b>${persona.fecNac}</b>,<br>
y mi curp es: <b>${persona.curp}</b>. 
`)