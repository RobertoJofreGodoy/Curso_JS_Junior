class celular {
    constructor(marca, modelo, color, peso, pantalla, camara,ram){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
    }
    info(){
        document.write(`<h2> ${this.marca} ${this.modelo} </h2>
        -color: ${this.color} <br>
        -pantalla: ${this.pantalla} <br>
        -camara: ${this.camara} MP<br>
        -ram: ${this.ram} GB<br>
        -peso: ${this.peso} gr<br><br>
        `);
    }
    encender(){
        document.write(`El celular ${this.marca} ${this.modelo} se ha encendido`);
    }
    apagar(){
        document.write(`El celular ${this.marca} ${this.modelo} se ha apagado`);
    }
    tomarFoto(){
        document.write(`El celular ${this.marca} ${this.modelo} ha tomado una foto`);
    }
    grabar(){
        document.write(`El celular ${this.marca} ${this.modelo} ha grabado un video`);
    }
}

const celular1 = new celular("Xiaomi", "Redmi Note 8", "Negro", 190, `LCD IPS 6.3" táctil (2340x1080) / 60 Hz`, 48, 4);
const celular2 = new celular("Samsung","Galaxy A21s","Azul Marino",192,`PLS 6.5" táctil (1600x720) / 60 Hz`,48,4);
const celular3  = new celular("Huawei","Y8p","Gris",163,`OLED 6.3" táctil (2400x1080) / 60 Hz`,48,4);

document.write(`Buenas tardes, le muestro las caracterisirticas de los celulares que le interesan! <br>`);
celular1.info();
celular2.info();
celular3.info();

