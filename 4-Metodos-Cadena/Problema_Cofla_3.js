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
let texto= ``;
const preguntaNombre = () =>{
    alert(`Elige la materia en la que te quieres inscribir:`);
    for (materia in listaMaterias){
        texto+=(`${parseInt(materia) +1}: ${listaMaterias[materia].nombre}   `);
    }

}
const preguntaMateria = () =>{
    let seleccion = prompt(texto);
    for (i = 0; i < listaMaterias.length; i++){
        if ((i+1) == seleccion) {
            if (listaMaterias[i].alumnos.length > 20) {
                document.write(`Lo sentimos, ya no quedan más cupos para ${listaMaterias[i].nombre}`);
            }else {
                Materia.addAlumno(listaMaterias[i],nuevoAlumno);
                document.write(`Felicidades, te inscribiste en <b>${listaMaterias[i].nombre}</b><br>Tu profesor será <b>${listaMaterias[i].profesor}</b>.<br>El listado completo de <b>alumnos</b> inscritos es: <br>-${listaMaterias[i].alumnos.join(`<br>-`)}`);
            }
        }
    }

}

preguntaNombre();
preguntaMateria();
