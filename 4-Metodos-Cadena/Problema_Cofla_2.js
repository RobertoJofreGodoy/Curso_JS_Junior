/*Dado mi bajo conocimiento sobre JS en el momento de escribir este programa, se puede apreciar que en la primera solución utilizo una Clase Materia, pero que a partir de la segunda utilizo un Array.
*/

let listaMaterias = []; //Inicializo el Array que utilizaré en la 2da y 3ra solución
class Materia { 
    constructor(nombre,profesor,alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        listaMaterias.push(this); //al Crear los Objetos los almaceno en el Array.
    }
    
    getAlumnos(){ //Metodo que devuelve un listado de los alumnos de la materia especificada
        let nombre = [];
        for (let alumno in this.alumnos){
            nombre.push(this.alumnos[alumno]);
        }
        return nombre.join(", ");
    }
    getProfesor(){ //Metodo que devuelve el profesor de la materia especificada
        return this.profesor;
    }
    getMateria(){ //Metodo que devuelve el nombre de la materia especificada
        return this.nombre;
    }
    static getProfesorAlumnos(materia){ //Metodo estático que utiliza los metodos anteriores
        document.write(`<b>Materia</b>: `+ materia.getMateria() +`<br><b>Profesor</b>: ` + materia.getProfesor() + `<br><b>Alumnos</b>: ` + materia.getAlumnos() + `<br><br>`);
    }
}

const matematicas = new Materia("Matemáticas","Aguilar",["Roberto","Karina","Felipe","Cofla"]);
const calculo = new Materia("Cálculo","Ramón",["Roberto","Karina","Felipe","Claudio"]);
const programacion = new Materia("Programación","Carlos",["Roberto","Karina","Felipe", "Alexis"]);
const basededatos = new Materia("Base de Datos","Mendoza",["Roberto","Karina","Felipe","Cofla"]);
const redes = new Materia("Redes","Sandalio",["Roberto","Karina","Felipe"]);
const android = new Materia("Android","Soler",["Roberto","Karina","Felipe", "Cofla"]);
const logica = new Materia("Lógica","Agustín",["Roberto","Karina","Felipe"]);
const proyectos = new Materia("Proyectos","Axel",["Roberto","Karina","Felipe"]);
const administracion = new Materia("Administración","Gloria",["Roberto","Karina","Felipe", "Cofla"]);
const calculo2 = new Materia("Cálculo 2","Fernando",["Roberto","Karina","Felipe"]);
const calculo3 = new Materia("Cálculo 3","Raquel",["Roberto","Karina","Felipe", "Cofla"]);
const sistemasoperativos = new Materia("Sistemas Operativos","Nicole",["Roberto","Karina","Felipe", "Cofla"]);

Materia.getProfesorAlumnos(matematicas); //Utilizamos el metodo estático, donde solo le pasamos el Objeto
Materia.getProfesorAlumnos(calculo);
Materia.getProfesorAlumnos(programacion);
Materia.getProfesorAlumnos(basededatos);
Materia.getProfesorAlumnos(redes);
Materia.getProfesorAlumnos(android);
Materia.getProfesorAlumnos(logica);
Materia.getProfesorAlumnos(proyectos);
Materia.getProfesorAlumnos(administracion);
Materia.getProfesorAlumnos(calculo2);
Materia.getProfesorAlumnos(calculo3);
Materia.getProfesorAlumnos(sistemasoperativos);

// *****************************************************************************************
// A partir de aquí usaremos el Array "listaMaterias" y ya no usaremos más la Clase Materias
const cuantasVeces = (materias, alumno) =>{ //funcion para contar en cuantas materias se encuentra un alumno
    let contador = 0;
    for (let materia in materias){ //recorremos el Array con todas las materias como Objetos
        if (materias[materia].alumnos.includes(alumno)) {
            contador++;
        }
    }
    if (contador == 0){ 
        document.write(`Ese alumno no se encuentra inscrito en ninguna clase`);
    } else {
        document.write(`${alumno} se encuentra en <b>${contador} clases</b>: <br>`);
    }
    return contador;
}

const detalle = (materias, alumno) =>{ //funcion que muestra en que materia está el alumno, y el profesor que le corresponde.
    if (cuantasVeces(materias, alumno) > 0) {
        let textoDetalle = ``;
        for (materia in materias){
            if (materias[materia].alumnos.includes(alumno)) {
                textoDetalle += `En <b>${materias[materia].nombre}</b>, con el profesor: <b>${materias[materia].profesor}</b>. <br>`
            }
        }
        document.write(textoDetalle);
    }
}

let alumno = prompt(`¿Que alumno quieres consultar?`)

detalle(listaMaterias,alumno);