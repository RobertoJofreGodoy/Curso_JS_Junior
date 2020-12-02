let nombreAlumno = prompt("Ingresa tu nombre");
console.log(`Bienvenido: ${nombreAlumno}`);
let asistencia =0;
let notas = [];

const totalAsistencia = asistencia =>{
    let totalClases = 30;
    if (asistencia < (totalClases*0.9)) {
        console.log(`Lo siento ${nombreAlumno} tu asistencia es de ${(asistencia * 100)/totalClases}% y se necesita un 90% como mínimo, por lo tanto estás: ` + `%cReprobado`, "color:red;font-size:16px");
        return false;
    } else {
        console.log(`Tienes un total de ${(asistencia * 100)/totalClases}% de asistencia`);
        return true;
    }
}

const addNota = nota =>{
    notas.push(nota);
    console.log(nota);
}

const notasMaterias = materia =>{
    console.log(`${nombreAlumno} ingresa tu nota de ${materia} (de 1 a 10)`);
    addNota(prompt(`Tu Nota de ${materia}`));
}

const totalPromedio = promedio => {
    let cantidadMaterias = promedio.length;
    let sumaNotas = 0;
    let cantidadNecesaria= cantidadMaterias * 10;
    for (let nota of promedio){
        sumaNotas +=parseInt(nota); 
    } if (sumaNotas < (cantidadNecesaria*0.7)) {
        console.log(`Lo siento ${nombreAlumno} tu Promedio es de ${(sumaNotas * 100) /cantidadNecesaria}% y se necesita un 70% como mínimo, por lo tanto estás: ` + `%cReprobado`, "color:red;font-size:16px");
        return false;
    } else{
        console.log(`Tus Notas tienen un Promedio de ${(sumaNotas * 100) /cantidadNecesaria}%`);
        return true;
    }
}

const totalTrabajos = trabajos =>{
    cantidadTrabajos = 20;
    if (trabajos < (cantidadTrabajos * 0.75)) {
        console.log(`Lo siento ${nombreAlumno} entregaste solo el ${(trabajos * 100) /cantidadTrabajos}% de los Trabajos, y se necesita un 75% como mínimo, por lo tanto estás: ` + `%cReprobado`, "color:red;font-size:16px");
        return false;
    } else {
        console.log(`Tus Notas tienen un Promedio de ${(trabajos * 100) /cantidadTrabajos}%`);
        return true;
    }
}

asistencia = prompt("Ingresa el total de tus asistencias en dias (máximo 30)");
console.log(asistencia);
const asistenciasNota= totalAsistencia(asistencia); 

notasMaterias("Matematicas");
notasMaterias("Programación");
notasMaterias("Administración");
notasMaterias("Inglés");

const promedioNota =totalPromedio(notas);

let trabajo = prompt("Ingresa la cantidad de trabajos que entregó (max 20)");
const trabajosNota = totalTrabajos(trabajo);

if (asistenciasNota == true && promedioNota== true && trabajosNota== true) {
    console.log(`Felicidades ${nombreAlumno} estas ` + `%cAprobado`, `color:green;font-size:16px`);
} else {
    console.log(`Lo Siento ${nombreAlumno} estas ` + `%cReprobado`, `color:red;font-size:16px`);
}

let arrayFinal = {
    Asistencia: asistenciasNota,
    Promedio: promedioNota,
    Trabajos: trabajosNota
}

console.table(arrayFinal)