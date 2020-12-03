const titulo = document.querySelector(".titulo");
titulo.classList.add("grande");
titulo.classList.remove("grande");
/* let valorItem = titulo.classList.item(0);
document.write(valorItem);

let valorContains = titulo.classList.contains("elemento");
document.write(valorContains);

if (valorContains){
    document.write(`La clase existe`);
} else{
    document.write(`La NO clase existe`);
} */

titulo.classList.toggle("grande",false); 
let valorReplace =titulo.classList.replace("grande","chico");
document.write(valorReplace); //true




/* 
```html
   
```
```js

``` 
```css

``` 
*/