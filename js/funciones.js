//Historia de cogla 5.1

let materias = {
    //%asistenas, calificacion, evidenciasEntregadas de 5
    esp: [73, 10, 3], 
    mat: [76, 7, 5], 
    his: [83, 9, 5], 
    geo: [93, 8, 2], 
    fce: [69, 9, 1], 
    alg: [72, 9, 3], 
    cal: [62, 5, 2], 
    inf: [92, 10, 3], 
    art: [85, 7, 5], 
    dep: [69, 10, 5]
}

let promedio=0, cont=0; 

for (let materia in materias) {
    cont++;
    promedio += materias[materia][1]; 
}

//Para poder llenar la tabla
function Resultados(materia, asistencias, evidencias, estatus) {
    this.materia = materia;
    this.asistencias = asistencias+'%';
    this.evidencias = evidencias;   
    this.estatus = estatus;   
}

let mat = []; 

for (let materia in materias) {
    if(materias[materia][0]<70 || materias[materia][2]<3){
        mat.push(materia = new Resultados(materia, materias[materia][0], materias[materia][2], "REPROBADO")); 
    } else 
        mat.push(materia = new Resultados(materia, materias[materia][0], materias[materia][2], "APROBADO")); 
}

console.group(); 
console.table(mat);
console.log(`Tu promedio final es: ${promedio/mat.length}`); 
console.groupEnd(); 