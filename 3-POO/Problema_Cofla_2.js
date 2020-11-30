class celular {
    constructor(marca, modelo, color, peso, pantalla, camara,ram){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    
    presionarBotonEncendidoApagado(){
        if (this.ecendido == false) {
            alert(`Prendiendo celular ${this.marca} ${this.modelo}`);
            this.ecendido = true;
        } else {
            alert(`Apagando ${this.marca} ${this.modelo} ya esta encendido`);
            this.encendido = false;
        }
    }
    
    tomarFoto(){
        document.write(`El celular ${this.marca} ${this.modelo} ha tomado una foto <br>`);
    }
    grabarVideo(){
        document.write(`El celular ${this.marca} ${this.modelo} ha grabado un video <br>`);
    }
    info(){
        document.write(`<h2> ${this.marca} ${this.modelo} </h2>
        -color: ${this.color} <br>
        -pantalla: ${this.pantalla} <br>
        -camara: ${this.camara} MP<br>
        -ram: ${this.ram} GB<br>
        -peso: ${this.peso} gr<br>
        `);
    }
}

class celularGamaAlta extends celular {
    constructor(marca, modelo, color, peso, pantalla, camara,ram, camara2){
        super(marca, modelo, color, peso, pantalla, camara,ram);
        this.camara2 = camara2;
        this.encendido = false;
        this.facial = false;
    }

    grabarCamaraSuperLenta(){
        document.write(`El celular ${this.marca} ${this.modelo} ha grabado un video Super Lento<br>`);
    }
    reconocimientoFacial(){
        if (this.facial == false){
            alert(`No se desbloqueó el celular ${this.modelo}`);
            this.facial = true;
        } else {
            alert(`Se desbloqueó el celular ${this.modelo}`);
            this.facial = false;
        }  
    }
    infoGamaAlta(){
        this.info();
        document.write( `-Segunda Cámara: ${this.camara2} MP <br><br>`);
    }

}

const celular1 = new celularGamaAlta("Apple", "IPhone 12 pro Max", "Negro", 190, `tremenda pantalla`, 86, 8, 24);
const celular2 = new celularGamaAlta("Samsung","Galaxy Note20 Ultra 5G","Azul Marino",192,`pantallón`,108,12,12);

document.write(`Buenas tardes, le muestro las caracterisirticas de los celulares que le interesan! <br>`);
celular1.infoGamaAlta();
celular2.infoGamaAlta();

celular1.presionarBotonEncendidoApagado();
celular2.reconocimientoFacial();
celular1.grabarCamaraSuperLenta();


