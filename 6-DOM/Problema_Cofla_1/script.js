const contenedor = document.querySelector(".flex-container");

//Colocamos el texto del boton en mayusculas 
const boton = document.querySelector(".send-button");
boton.value = boton.value.toUpperCase();


function crearLlave(nombre,modelo,precio){
    img = `<img class="llave-img" src='llave.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre,modelo,precio];
}

//Cramos Objeto Imaginario dodne almacenaremos las nuevas llaves
let llavesFragment = document.createDocumentFragment();

for (i=0;i<20;i++){
    let modeloRandom = Math.round(Math.random()*10000); //Creamos numero Random redondeado para que no aparezcan decimales.
    let precioRandom = Math.round(Math.random()*10 + 20);//Creamos numero Random redondeado para que no aparezcan decimales.
    let llave = crearLlave(`llave ${i + 1}`,`Modelo ${modeloRandom}`,precioRandom);

    //Por cada Llave vamos a Crear un Div que la almacene
    let divPadreLlave = document.createElement("DIV");

    //VAMOS A VER UN METODO QUE NO HEMOS VISTO HASTA AHORA PARA FINALIZAR EL PROGRAMA
    divPadreLlave.addEventListener("click", ()=>{changeHidden(modeloRandom)} );

    //Vamos a permitir hacer Focus
    divPadreLlave.tabIndex = i;

    //Vamos a Agregarle Clases a este Div
    divPadreLlave.classList.add(`llave-${i+1}`,`flex-item`);

    //Vamos a Insertarle el Código HTML de las llaves a su respectivo <div>
    divPadreLlave.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

    //Agregamos como Hijo cada Div con sus llaves al Fragmento Creado anteriormente para optimizar el rendimiento
    llavesFragment.appendChild(divPadreLlave);
}

//Agregamos como Hijo el Fragmento con todas las llaves al Contenedor

contenedor.appendChild(llavesFragment);

//Funcion que llama al elemento con la clase "key-data" y le asigna la propiedad *value* con el valor del parámetro.
//Este parámetro es el "modeloRandom" utilizado en la creación de las llaves 
//por lo que este Elemento tomará el value de la llave seleccionada
const changeHidden = (number) =>{
    document.querySelector(".key-data").value = number
}