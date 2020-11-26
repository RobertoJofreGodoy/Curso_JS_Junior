let dinero = prompt("Cuanto dinero tienes para comprar?");
let boleto = 1;
let cantidad;
let vuelto;

if (dinero >= 2) {
    cantidad = 2;
    vuelto = dinero - (cantidad * boleto);
    } else if (dinero >= 1 && dinero < 2) {
        cantidad = 1;
        vuelto = dinero - (cantidad * boleto);
    } else {
        cantidad = 0;
    }

if (cantidad == 0) {
    document.write(`Lo siento, no le alcanza para nada`);
    } else if (vuelto == 0){
        document.write(`Usted compro ${cantidad} boletos, y no le sobro plata`);
    } else {
        document.write(`Usted compro ${cantidad} boletos, y tiene un vuelto de $${vuelto} USD`);
    }

