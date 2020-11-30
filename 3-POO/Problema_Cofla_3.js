class app {
    constructor(nombre, descargas, puntuacion, peso){
        this.nombre = nombre;
        this.descargas =descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.install = false;
        this.open = false;
    }

    instalarEliminarApp(){
        if (this.install == false) {
            alert(`Se instalará la App`);
            this.install == true;
        } else {
            alert(`Se desinstalará la App`);
            this.install == false
        }
    }

    abrirCerrarApp(){
        if (this.open == false) {
            alert(`Se inicia la App`);
            this.open = true;
        } else {
            alert(`Se cierra la App`);
            this.open =false;
        }
    }

    info(){
        return `<b>${this.nombre}</b> <br>
        tiene: <br>
        ${this.descargas} descargas<br>
        ${this.puntuacion} de puntuación<br>
        ${this.peso} megas de peso.<br><br>
        `;
    }
}

const app1 = new app("aplicación 1",1500, 8, 400);
const app2 = new app("aplicación 2",23124, 7, 500);
const app3 = new app("aplicación 3",7655, 9, 250);
const app4 = new app("aplicación 4",342, 7.7, 400);
const app5 = new app("aplicación 5",4534, 8.1, 800);
const app6 = new app("aplicación 6",1233, 6.9, 1500);
const app7 = new app("aplicación 7",153400, 9.8, 345);



app1.instalarEliminarApp();
app1.abrirCerrarApp();

document.write(app1.info() + app2.info() + app3.info() +app4.info() +app5.info() +app6.info()+app7.info());