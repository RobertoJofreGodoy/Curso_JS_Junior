
const listaItem = document.createTextNode("Este es un Item de la Lista"); 


const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();

for (i =0 ; i < 20 ; i++){
    const lista = document.createElement("LI");
    lista.innerHTML = "Este es un Item de la Lista"
    fragmento.appendChild(lista); 
}

contenedor.appendChild(fragmento);
 



/* 
```html
   
```
```js

``` 
```css

``` 
*/