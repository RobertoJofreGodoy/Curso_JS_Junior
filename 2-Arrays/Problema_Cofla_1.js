let hora = 0;
let minutos = 0;
let paseGratis = 0;

const avanzaHora = () => {
    
    if (minutos == 45){
            minutos = 0;
            hora++;
        } else {
            minutos += 15;
        }
    }

const esMayorEdad = edad => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

while(hora < 5){
    let persona = prompt("Hola! Que edad tienes?");
    if (esMayorEdad(persona) == false) {
        alert(`Lo siento, no puedes pasar - Son las ${hora}:${minutos} AM`);
        avanzaHora();
    } else {
        if (hora >= 2 && paseGratis == 0) {
            alert(`Felicidades! Eres la primera persona en entrar despues de las 2AM, PASAS GRATIS! - Son las ${hora}:${minutos} AM`);
            paseGratis++;
            avanzaHora();
        } else{
            alert(`Bienvenido a la Fiesta! son $5 USD!! - Son las ${hora}:${minutos} AM`);
            avanzaHora();
        }
    }
}

