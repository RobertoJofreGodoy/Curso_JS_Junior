const contenedor = document.querySelector(".contenedor");
const lista = document.createElement("LI");

const listaItem = document.createTextNode("Este es un Item de la Lista"); //Siempre creamos en base al DOM, pero eso utilizamos document.createTextNode() y no lista.createTextNode()

console.log(lista);
console.log(listaItem);

//Tenemos un Node Element Li llamado lista y un Node Text llamado listaItem
// Pero están por separado
// ¿Cómo hacemos para colocar un Nodo dentro de otro Nodo?

/* lista.innerHTML = listaItem; //¿Tiene sentido hacer esto?
console.log(lista); //<li>[object Text]</li> 
 *///Vemos que nos devuelve un Objeto texto, debido a que "listaItem" es un Nodo, por lo que no tenemos el resultado que buscabamos.

//Para ello utilizaremos el siguiente Método:

lista.appendChild(listaItem); //*lista* es el elemento Padre al que le pasamos como parámetro el elemento *listaItem*

contenedor.appendChild(lista); //Ahora podemos hacer lo mismo con el elemento *contenedor*, que recordemos es el <div> creado en el HTML.
// Y de esta manera, creamos un Node Element Li con un Node Text de contenido y lo agregamos al Div, por lo que lo vemos reflejado en pantalla

/* 
```html
   
```
```js

``` 
```css

``` 
*/