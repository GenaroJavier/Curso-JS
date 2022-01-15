/*Historia de cofla 4.2*/
class Materia {
    constructor(Profesor, nombre, alumnos) {
        this.Profesor = Profesor;
        this.nombre = nombre;
        this.alumnos = alumnos;
    }
}
class Profesor {
    constructor(Matricula, Nombre, Ap, Am, Titulo) {
        this.Materia = Matricula;
        this.Nombre = Nombre;
        this.Ap = Ap;
        this.Am = Am;
        this.Titulo = Titulo;
    }

    nombreCompleto() {
        return `${this.Nombre} ${this.Ap} ${this.Am}`;
    }
}

const prof1 = new Profesor('18011159', 'Genaro', 'Perez', 'Lopez', 'Ing. TICs'),
    prof2 = new Profesor('18011213', 'Oracio', 'Martinez', 'Gutierrez', 'Ing. Sistemas'),
    prof3 = new Profesor('11234121', 'Iris', 'Daniela', 'Angeles', 'Ing. Energias Renovables'),
    prof4 = new Profesor('12389121', 'Martha', 'Lopez', 'Rodriguez', 'Ing. Enfermeria'),
    prof5 = new Profesor('73198821', 'Javier', 'Cuadros', 'Francisco', 'Doc. Sistemas'),
    prof6 = new Profesor('65498476', 'Sheldon', 'Lee', 'Cooper', 'Doc. Fisica');

class Alumno {
    constructor(Matricula, Nombre, Ap, Am, Grupo) {
        this.Matricula = Matricula;
        this.Nombre = Nombre;
        this.Ap = Ap;
        this.Am = Am;
        this.Grupo = Grupo;
    }

    nombreCompleto() {
        return `${this.Nombre} ${this.Ap} ${this.Am}`;
    }
}

const alum1 = new Alumno('19181091', 'Cofla', 'Ramirez', 'Perez', '8 "B"'),
    alum2 = new Alumno('18011218', 'Miguel', 'Reyes', 'Marquez', '5 "A"'),
    alum3 = new Alumno('18910111', 'Fernando', 'Velasquez', 'Diaz', '8 "B"'),
    alum4 = new Alumno('18191901', 'Manuel', 'Angeles', 'Garcia', '7 "B"'),
    alum5 = new Alumno('18921111', 'Marcos', 'Mera', 'Mera', '8 "A"'),
    alum6 = new Alumno('18291921', 'Oliver', 'Camargo', 'Lopez', '5 "B"'),
    alum7 = new Alumno('11209348', 'Jesus', 'Perez', 'Lopez', '8 "B"'),
    alum8 = new Alumno('32098122', 'Jose', 'Perez', 'Garcia', '6 "B"'),
    alum9 = new Alumno('63872113', 'Sebastian', 'Perez', 'Garcia', '8 "A"'),
    alum10 = new Alumno('63729982', 'Mahetsi', 'Perez', 'Artega', '7 "A"');

const materia1 = new Materia(prof1, 'Español', [alum1, alum2, alum3, alum4, alum5]);
const materia2 = new Materia(prof3, 'Quimica', [alum1, alum2, alum3, alum4, alum5, alum6, alum7, alum8, alum9, alum10]);
const materia3 = new Materia(prof5, 'Programación', [alum1, alum2, alum3, alum4, alum5]);
const materia4 = new Materia(prof4, 'Cuidado de la salud', [alum9, alum2, alum3, alum4, alum5]);
const materia5 = new Materia(prof6, 'Física teorica', [alum1, alum2, alum3, alum4, alum5]);

let materiasEscuela = [materia1, materia2, materia3, materia4, materia5];

const numMateriasCofla = () => {
    let cont = 0;
    for (let mat of materiasEscuela) {
        mat.alumnos.filter(alumno => (alumno.Nombre == 'Cofla') ? cont++ : cont = cont);
    }
    document.write(`Cofla tomara: <b>${cont} materias </b><br>`);
}

const listarMateriasCofla = () => {
    document.write(`<br>Las materias que tomará son: <br>`);
    materiasEscuela.forEach(materia => {
        materia.alumnos.forEach(alumno => {
            if (alumno.Nombre == 'Cofla') {
                document.write(`<b>${materia.nombre}</b> impartida por el profesor: <b>${materia.Profesor.nombreCompleto()}</b><br>`);
            }
        });
    });
}

const infoMaterias = (materia) => {
    document.write(`<br>Información sobre la materia: <b>${materia}</b><br>`);
    
    materiasEscuela.filter(BuscarMateria => (BuscarMateria.nombre == materia) ? document.write(`Impartida por: <b>${BuscarMateria.Profesor.nombreCompleto()}</b><br><br>Alumnos registrados:<br>`) :
    document.write(` `)
    );

    for (let mat of materiasEscuela) {
        if (mat.nombre == materia) {
            mat.alumnos.forEach(alumno => {
                document.write(`
            Matricula: <b>${alumno.Matricula}</b><br>
            Nombre: <b>${alumno.nombreCompleto()}</b><br>
            Grupo: <b>${alumno.Grupo}</b><br><br>
            `)
            })
        }
    }
}

numMateriasCofla();
listarMateriasCofla();
infoMaterias(prompt('Introduce la materia que desees ver: '));