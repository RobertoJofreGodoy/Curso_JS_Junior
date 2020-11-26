let pregunta = prompt("Escriba su pregunta a Cofla");

if (pregunta.length > 50 ) {
    document.write("Su Pregunta es muy compleja, no se pudo definir si Cofla decia la Verdad o Mentia <br>Por favor haga otra pregunta");
} else if (pregunta.length < 50 && pregunta.length > 20) {
    document.write("Cofla niega absolutamente todo y no pasa nada");
} else {
    document.write("Cofla niega absolutamente todo y le llega una descarga electrica por weon");
}

