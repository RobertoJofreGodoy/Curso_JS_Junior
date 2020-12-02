let listaMaterias = []; 
class Materia { 
    constructor(nombre,profesor,alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        listaMaterias.push(this); 
    }
    setAlumno(alumno){
        this.alumnos.push(alumno);
    }
    static addAlumno(materia,alumno){
        materia.setAlumno(alumno);
    }
}
const matematicas = new Materia("Matemáticas","Aguilar",["Roberto","Karina","Felipe","Alexis","Claudio","Andres","Martin","Vale","Erick","Aye","Mona","Nico","Emy","Eddar","Frodo","Aragorn","Legolas","Jon Boby","Luke","Leia","Yoda"]);
const calculo = new Materia("Cálculo","Ramón",["Roberto","Karina","Felipe","Claudio"]);
const programacion = new Materia("Programación","Dalto",["Roberto","Karina","Felipe","Alexis","Claudio","Andres","Martin","Vale","Erick","Aye","Mona","Nico","Emy","Eddar","Frodo","Aragorn","Legolas","Jon Boby","Luke","Leia","Yoda"]);
const basededatos = new Materia("Base de Datos","Mendoza",["Roberto","Karina","Felipe"]);
const redes = new Materia("Redes","Sandalio",["Roberto","Karina","Felipe","Alexis","Claudio","Andres","Martin","Vale","Erick","Aye","Mona","Nico","Emy","Eddar","Frodo","Aragorn","Legolas","Jon Boby","Luke","Leia","Yoda"]);
const android = new Materia("Android","Soler",["Roberto","Karina","Felipe"]);
const logica = new Materia("Lógica","Agustín",["Roberto","Karina","Felipe","Alexis","Claudio","Andres","Martin","Vale","Erick","Aye","Mona","Nico","Emy","Eddar","Frodo","Aragorn","Legolas","Jon Boby","Luke","Leia","Yoda"]);
const proyectos = new Materia("Proyectos","Axel",["Roberto","Karina","Felipe"]);
const administracion = new Materia("Administración","Gloria",["Roberto","Karina","Felipe"]);
const calculo2 = new Materia("Cálculo 2","Fernando",["Roberto","Karina","Felipe"]);
const calculo3 = new Materia("Cálculo 3","Raquel",["Roberto","Karina","Felipe"]);
const sistemasoperativos = new Materia("Sistemas Operativos","Nicole",["Roberto","Karina","Felipe","Alexis","Claudio","Andres","Martin","Vale","Erick","Aye","Mona","Nico","Emy","Eddar","Frodo","Aragorn","Legolas","Jon Boby","Luke","Leia","Yoda"]);


let nuevoAlumno = prompt(`Ingresa tu nombre`);
let texto= ``; //Aqui se almacenará el listado de las Materias para mostrar
const preguntaNombre = () =>{
    alert(`Elige la materia en la que te quieres inscribir:`);
    for (materia in listaMaterias){
        texto+=(`${parseInt(materia) +1}: ${listaMaterias[materia].nombre}   `); //Guardamos el listado de las materias y le damos un indice con inicio en 1
    }

}
const preguntaMateria = () =>{
    let seleccion = prompt(texto); //el usuario ingresa el indice de la materia a la que se quiere inscribir
    for (i = 0; i < listaMaterias.length; i++){ //recorremos los indices de Materias para no estar preguntando uno por uno
        if ((i+1) == seleccion) { //Como los indices los iniciamos en 1, sumamos "1" a "i" y comparamos con el numero ingresado por el usuario.
            if (listaMaterias[i].alumnos.length > 20) { //Si ya hay 20 alumnos inscritos, el usuario queda afuera
                document.write(`Lo sentimos, ya no quedan más cupos para ${listaMaterias[i].nombre}`);
            }else { //Sino, añadimos el usuario con el metodo "addAlumno"
                Materia.addAlumno(listaMaterias[i],nuevoAlumno); 
                document.write(`Felicidades, te inscribiste en <b>${listaMaterias[i].nombre}</b><br>Tu profesor será <b>${listaMaterias[i].profesor}</b>.<br>El listado completo de <b>alumnos</b> inscritos es: <br>-${listaMaterias[i].alumnos.join(`<br>-`)}`);
            }
        }
    }
}

preguntaNombre();
preguntaMateria();
