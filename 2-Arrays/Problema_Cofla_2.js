let cantidad = prompt("cuantos alumnas son?");
let dias = prompt("cuantos dias son?");
let alumnosTotales =[];
let reprobadoInansitencia = dias * 0.1;

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " +(i + 1)),0];
}

const tomarAsistencia = (nombre,posicion) =>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[posicion][1]++; //con [posicion][1] estamos selccionando el segundo elemento del alumno que se encuentra en [posicion]
    }
}

for (i = 0; i < dias; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    /*con alumnosTotales[alumno][0] estamos selecionando el alumno y si nombre, debido a que el nombre se encuentra en la posicion 0 del array personal de cada alumno, para acceder a su asistencia tendriamos que colocar alumnosTotales[alumno][1]*/
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________Asistencias: ${alumnosTotales[alumno][1]}<br>
    __________Ausencias: ${dias - alumnosTotales[alumno][1]}<br>`;

    if (dias - alumnosTotales[alumno][1] > reprobadoInansitencia) {
        resultado += `REPROBADO POR INANSISTENCIA<br><br>`
    }
    document.write(resultado);
}