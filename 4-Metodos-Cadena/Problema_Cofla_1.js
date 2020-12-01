const sumar = (num1,num2)=> parseInt(num1) + parseInt(num2);
const restar = (num1,num2)=> parseInt(num1) - parseInt(num2);
const dividir = (num1,num2)=> parseInt(num1) / parseInt(num2);
const multiplicar = (num1,num2)=> parseInt(num1) * parseInt(num2);
const exponenciar = (num1,num2) => parseInt(num1) ** parseInt(num2);
const raizCuadrada = num1 => Math.sqrt(num1);
const raizCubica = num1 => Math.cbrt(num1);

alert(`Que operacion deseas realizar?`);
let operacion = prompt(`1: suma, 2: resta, 3: division, 4: multiplicacion, 5: Exponenciación, 6: Raiz Cuadrada, 7: Raiz Cúbica`);

if (operacion == 1) {
    let numero1 = prompt(`Primer numero para sumar`);
    let numero2 = prompt(`Segundo numero para sumar`);
    let resultado = sumar(numero1,numero2);
    alert(`el resultado es: ${resultado}`);
} else if (operacion == 2){
    let numero1 = prompt(`Primer numero para restar`);
    let numero2 = prompt(`Segundo numero para restar`);
    let resultado = restar(numero1,numero2);
    alert(`el resultado es: ${resultado}`);
} else if (operacion == 3){
    let numero1 = prompt(`Primer numero para dividir`);
    let numero2 = prompt(`Segundo numero para dividir`);
    let resultado = dividir(numero1,numero2);
    alert(`el resultado es: ${resultado}`);
} else if (operacion == 4){
    let numero1 = prompt(`Primer numero para multiplicar`);
    let numero2 = prompt(`Segundo numero para multiplicar`);
    let resultado = multiplicar(numero1,numero2);
    alert(`el resultado es: ${resultado}`);  
} else if (operacion == 5){
    let numero1 = prompt(`Número base a potenciar`);
    let numero2 = prompt(`Número Exponente`);
    let resultado = exponenciar(numero1,numero2);
    alert(`el resultado es: ${resultado}`);  
} else if (operacion == 6){
    let numero1 = prompt(`Número para Raiz Cuadrada`);
    let resultado = raizCuadrada(numero1);
    alert(`el resultado es: ${resultado}`);  
} else if (operacion == 7){
    let numero1 = prompt(`Número para Raiz Cúbica`);
    let resultado = raizCubica(numero1);
    alert(`el resultado es: ${resultado}`);  
} else {
    alert(`no se ha encontrado la operacion`);
}