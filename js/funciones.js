/*Historia de cofla 2.0*/
/*Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir
Al otro dia comienzan las clases del ciclo básico de la universidad (Por que cofla quiere
ser programador y se inscribio en la facultad de ingenieria para estudiar desarrollo de
software). 
En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:
se rompoio el sistema de registro de asistencias y durante los proximos 30 dias no se podrán
hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que 
este solucionado

    - Crear un mini sistema que nos permita registrar los alumnos que estan presentes (P) 
    y ausentes (A) en clase. 
    
    - Pasados los 30 dias mostrar la situación final de todos los alumnos (Nro total de presentes
    y ausentes).

    - Se puede tener un minimo de 10% de ausencias por semestre, si se tienen mas aclarar que 
    esta reprobado.
*/

let asistencias = 30, faltas = 0; 

for (let i = 0; i <= 18; i++) {
    for (let j = 0; j<=29; j++) {
        faltas = Math.floor(Math.random() * (5 - 1)) + 1;
    }
    if (faltas > 3) document.write(`Alumno: 00${i+1} Asistencias: ${asistencias-faltas}, Faltas: ${faltas} <b>REPROBADO</b><br>`);     
        else document.write(`Alumno: 00${i+1} Asistencias: ${asistencias-faltas}, Faltas: ${faltas} <br>`);
    faltas = 0; 
}