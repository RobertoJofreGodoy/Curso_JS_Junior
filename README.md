# Curso_JS_Junior
¿Que es JavaScript?
- Lenguaje Interpretado
- Orientado de Objetos 
- Imperativo
- Case sensitive (Upper and Lower Case)
- Basado en prototipos / Instancias / Classless
- Tipado débil
- Lenguaje Dinámico

- ECMASCRIPT

¿Para que se usa?
- Dinamismo de los sitios web
- Servidor en NodeJS
- Tecnologias Frontend como Angular, React o Vue.JS

Otros usos no tan comunes:
- Inteligencias Artificial
- Placas electronicas
- Mobile Apps
- Desktop
- etc...

# Capitulo 1: VARIABLES
Una variable es un espacio que guardamos en memoria
- **string** = "cadena de texto"
- **number** = 123
- **boolean** =  true / false

Podemos declarar una variable de 3 maneras diferentes:
 - **var**: definimos una variable y esta se puede utilizar en cualquier momento, se recomienda no utilizar.
 - **let**: declara una variable que se encuentra limitada a su bloque. No es lo mismo **Declarar** una variable o **Inicializar** una variable, podemos declarar una variable de la siguiente manera:
    *let numero;*   -> estamos indicando que existe una variable con un alcanze regional (al ser let)
    *numero = 123;*   -> aqui estamos Inicializando la variable al introducirle un valor
 - **const**: delcaramos una variable que siempre mantendra su valor
    -> const nombre = "Roberto"
    ***Const* no se puede Declarar sin Inicializar**

Casos especiales de Datos donde la variable no esta definida o hay un error:
 - **Undefined**: tipo de dato que retorna cuando una variable existe pero no esta Inicializada.
 - **Null**: es un valor vacio o nulo.
 - **Nan**: *'Not a Number'* valor que nos devulve JS cuando intentamos realizar alguna operacion matematica con variables que no son un numero

## SCOPE: 
El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que scope es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.

## Hoisting: 
concepto que trata sobre como un programa puede verse afectado por la creacion y la ejecucion

## Prompt
Prompt: funcion de JS que nos permite almacenar un valor indicado por el usuario
    *let nombre = prompt("como te llamas?");*
el valor indicado quedara almacenado en la variable por lo que podremos trabajar con el

## Operadores.
### Operadores de Asignacion: 
asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
```
    Asignación: 	                                        x = y           significa:	x = y
    Asignación de adición: 	                                x += y          significa:	x = x + y
    Asignación de sustracción:	                                x -= y          significa:	x = x - y
    Asignación de multiplicación: 	                        x *= y          significa:	x = x * y
    Asignación de división: 	                                x /= y          significa:	x = x / y
    Asignación de Resto: 	                                x %= y          significa:	x = x % y
    Asignación de exponenciación: 	                        x **= y         significa:	x = x ** y
    Asignación de desplazamiento a la izquierda: 	        x <<= y         significa:	x = x << y
    Asignación de desplazamiento a la derecha: 	                x >>= y           significa:  x = x >> y
    Asignación sin signo de desplazamiento a la derecha:        x >>>= y        significa:	x = x >>> y
    Asignacion AND: 	                                        x &= y          significa:	x = x & y
    Asignacion XOR: 	                                        x ^= y          significa:	x = x ^ y
    Asignacion OR: 	                                        x |= y          significa:	x = x | y
```
### Operadores Aritmeticos: 
toman valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numerico unico:
```
    Addition:               x + y
    Subtraction:            x - y
    Multiplication:         x * y
    Division:               x / y
    Decrement:              x--
    Increment:              x++
    Exponentiation:         x ** y
    Remainder:              x % y
    Unary negation:         -x
    Unary Plus:             +x
```
### Operadores de Comparacion
Los **operadores de comparacion** comparan dos expresiones y devuelven un valor **Boolean** que representa la **relacion** de sus valores.
```
 Equiality:               x == y      significa: si x es igual a y es true, sino false
 Inequiality:             x != y      significa: si x no es igual a y es true, sino false
 Identity:                x === y     significa: si x es estrictamenteigual a y es true, sino false
 Non-identity:            x !== y     significa: si x no es estrictamenteigual a y es flase, sino true
 Greater than:            x > y       significa: si x es mayor que y es true, sino false
 Grater than or equal:    x >= y      significa: si x es mayor o igual que y es true, sino false
 Less than:               x < y       significa: si x es menor que y es true, sino false
 Less than or equal:      x <= y      significa: si x es menor o igual a y es true, sino falso
```
### Operadores Logicos
Los **operadores logicos** nos devuelven un resultado a partir de que se cumpla (o no) una **condicion**, su resultado es **boolean** y sus operadores son valores logicos o asimilables a ellos.
```
 &&  -> And 
 ||  -> Or
 !   -> Not
```
## Concatenacion: 
nos permite unir String mediante el signo **'+'**, tambien podemos concatenar numero a un string, en cuanto JS detecta un string concatena todo lo demas.
- **concat()** : metodo especifico reservado para los String que nos permite concatenarle cualquier otro valor: -> *let saludo = bienvendio.concat(nombre);*
- **${}** : es una expresion que nos permite concatenar texto y variables, para ello se utiliza `` ejemplo:
```javascript
    let nombre = "Roberto";
    let frase = `soy ${nombre} y estoy estudiando`;
```
## Camel Case
Es un estilo de escritura en el cual cada palabra se escribe con la primera letra en mayusculas (exceptuando la primera palabra de todas) y eliminando los espacios de una frase **camelCase**, ejemplo: *esteEsElNombreDeUnaVariable*
**JS** trabaja con **camelCase**, por ejemplo: *document.getElementById()*

## Condicionales
Es una sentencia que nos permite ejecutar un fragmento de codigo unicamente si se cumple una **condicion**.
Para ello tenemos los siguientes condicionales:
- **if**: condicional que solo ejecuta el codigo que contiene si la condicion que se le indica es True:
```javascript
    let nombre = "Roberto";
    let apellido = "Jofre";
    let edad = 26;

    if(edad === 26){
        alert(`Hola ${nombre} ${apellido}! tienes ${edad} años`);
    }
```

- **else**: condicional que depende de **if** que ejecuta un bloque de codigo en caso de que if sea false:
```javascript
    let nombre = "Roberto";
    let apellido = "Jofre";
    let edad = 26;


    if(edad === 27){
        alert(`Hola ${nombre} ${apellido}! tienes ${edad} años`);
    } else {
        alert(`Hola ${nombre}, no tienes 27, tienes ${edad} años`);
    }
```
- **else if**: condicional que depende de **if** que ejecuta un bloque de codigo en caso de que el **if** anterior sea **false**, pero que contiene otro **if** con una nueva condicion:
```javascript
    let nombre = "Roberto";
    let apellido = "Jofre";
    let edad = 26;


    if(edad === 27){
        alert(`Hola ${nombre} ${apellido}! tienes ${edad} años`);
    } else if (edad === 26){
        alert(`Hola ${nombre}, no tienes 27, tienes ${edad} años`);
    };
```
### PROBLEMA DE COFLA CAPITULO 1:
#### PROBLEMA Nº 1
3 chicos de 23 años entran a una heladeria a comprar, pero los precios no estan al lado de cada estante con su respectivo helado, ellos quieren comprar el helado mas caro posible con el dinero que tienen.
Cada uno tiene distitnas cantidades de dinero, y hay una tabla en la que podemos basarnos para saber el costo de cada helado.
Crear soluciones:
- Que cada uno pueda ingresar el monto que tienen y mostrarles el helado mas caro que puedan comprar.
- Si hay 2 o mas con el mismo precio, mostrar ambos
- Indicar el vuelto

##### Datos
- Roberto tiene $1.5 USD.
- Pedro tiene 1.7 USD.
- Cofla tiene 3 USD.

**Los precios de los helados son los siguientes:**
- Palito de helado de agua: $0.6 USD
- Palito de helado de crema: $1 USD
- Bombon helado marca heladix: $1.6 USD
- Bombon helado marca heladovich: $1.7 USD
- Bombon helado marca helardo: $1.8 USD
- Potecito de helado con confites: $2.9 USD
- Pote de 1/4 KG: $2.9 USD

#### PROBLEMA Nº 2
Cofla no compra un carajo y decide darle ese dinero a un homeless que a su vez compra un boleto de loteria:
- Si le alcanza para uno, lo compra.
- si le alcanza para 2, compra los 2.
- si le alcanza para tres y le sobra, compra 2 y regala el vuelto.
- debe mostrarse en pantalla los boletos que compro y el vuelto.

#### PROBLEMA Nº 3
Cofla es sospechoso de un delito y es detenido, en comisaria lo conectan a un detector de mentiras para saber si Cofla dice la verdad.
- Si miente, le da una descarga electrica.
- Si no miente, no hacer nada.
- Si el aparato no se decide, aclarar que la pregunta debe ser mas especifica.


# Capitulo 2: ARRAYS
### Definicion y como crearlos
Un Array es un conjunto de datos asociados a un indice.
Como crear un Array:
```javascript
    let frutas = ["manzana", "platano", "pera"];
```
Como mostrar 1 elemento en especifico, para ello hay que tener en cuenta de que el primer elemento tiene posicion 0:
```javascript
    document.write(frutas[1]);
```
### Arrays Asociativos
Son Objetos con un valor asociado a una propiedad, 
ejemplo:
```javascript
    let computer ={
        cpu: 'i9 9900',
        gpu: 'gtx 1080 ti',
        ram: 16,
        ssd: true,
        os: "Windows 10"
    };
```
En este caso, creamos un objeto *computer* que tiene las propiedades *cpu, gpu, ram, ssd y os*, esto nos permite llamar una propiedad en especifico del objeto, sin tener que conocer su posicion exacta:
```javascript
    document.write(computer["gpu"]);
```

## Bucles de Iteracion
un Bucle se repite constanstemente hasta que cumplen la condicion que se le indica

- **while** : Ejecuta en bluque uno bloque de codigo siempre y cuando la condicion sea *True*, el pogramara no seguira su flujo hasta que la condicion sea *false*:
```javascript
    let numero = 0;
    while(numero<10){
        document.write(numero);
        numero++;
    }
```
- **do while** : Primero ejecuta un bloque de codigo y despues pregunta la condicion, repetira el bloque de codigo hasta que la condicion sea *false*. Esto es util en caso de que queramos que el bloque de codigo se ejecuta por lo menos 1 vez.
```javascript
    let numero = 0;

    do {
        document.write(numero);
        numero++;
    }
    while(numero<10)
```

- **break** :Es una sentencia que nos permite detener la ejecucion de un Bucle:
```javascript
    let numero = 0;

    while(numero<10){
        document.write(numero);
        numero++;
        if (numero == 10){
            break;
        }
    }
```
- **for** :Es un Bucle que se repetira el numero de veces que nosotros le indiquemos, **for** se compone de 3 partes:
    - **declaracion e inicializamos**: por regla general se declara una variable **i** (index)
    - **Condicion**: al igual que **while** el bucle se va a ejecutar mientras la condicion se cumpla, sea *true*, se utiliza la mima variable previamente *declarada* **i**.
    - **iteramos**: Definimos si la variable **i** se aumenta o decrementa, esto se ejecuta despues de que el bloque de codigo termine.

    ```javascript
        for (let i = 0; i < 6 ; i++) {
            document.write(i + "<br>");
        }

        for (let i = 6; i >= 0 ; i--) {
            document.write(i + "<br>");
        }
    ```

- **continue** : Sentencia parecida a **break** que nos permite "saltarnos" una iteracion de un Bucle y que despues este se siga ejecutando:
EL siguietne Bucle mostrara los numero del 0 al 19, pero no el 12 devido a que se corto esa iteracion con **continue**
```javascript
        for (let i = 0; i < 20 ; i++) {
            if (i == 12){
                continue;
            }
            document.write(i + "<br>");
        }
```

- **for in** : Se utiliza para recorrer un **Array**, **for in** nos devuelve el indice de los elementos:
```javascript
    let animales = ["Perro", "Gato", "Tigre"]

    for (animal in animales){
        document.write(animal + " ");
    }
```
Este Codigo nos monstrara *0 1 2* que son los Indeces del Array, si queremos que nos muestre su contenido:
```javascript
    let animales = ["Perro", "Gato", "Tigre"]

    for (animal in animales){
        document.write(animales[animal] + " ");
    }
```
Ahora nos mostrara *Perro Gato Tigre*.

- **for of** : Funciona de la igual menera que *for in* sin embargo nos devuelve automaticamente el contendido del **Array**
```javascript
    Slet animales = ["Perro", "Gato", "Tigre"]

    for (animal of animales){
        document.write(animal + " ");
    }

```
Esto nos mostrara *Perro Gato Tigre*.

- **label** : Sentencia que nos permite asociar un **Bucle** a un **Nombre**:
```javascript
    let array1 = ["Maria","Karina","Valentina"];
    let array2 = ["Roberto", "Carlos", array1,"Felipe"];

    forLabel:
    for (let array in array2){
        if (array == 2){
            for (let array of array1){
                document.write(array + " ");
                break forLabel;
            }
        } else {
            document.write(array2[array] + " ");
        }

    }
```
En el anterior codigo asociamos el primer **for** a un label llamado **forLabel**, como podemos ver tenemos un segundo *for* dentro que recorre otra Array, este *for* contiene un **break**, este *break* detendria la ejecucion de este segundo *for*, sin embargo le estamos pasando el **label** que hace referencia al primer ciclo  **forLabel**, por lo tanto el **break** detiene toda la ejecucion.

## Funciones
### Definicion
Una funcion es una porcion de codigo al que se le asgina un identificador, para poder llamarla cuando se la necesite.
Para ello tenemos una palabra reservada **function()**, a la que le podemos asignar un nombre *function saludar()*.
Function() tambien nos permite exigir un parametro para que funcione.
NOTA: las function() tienen un **Scope** global, podemos acceder a ellas desde cualquier parte, pero sus variables internas tienen un **Scope** regional.
```javascript
    let Roberto ={
    nombre: 'Roberto',
    apellido: 'Jofre',
    edad: 26
    }

    function MayorEdad(persona) {
        console.log(`${persona.nombre} es:`);
        
        if (persona.edad >= 18) {
            console.log('mayor de edad');
        }else{
            console.log('menor de edad');
        }
    }

    MayorEdad(Roberto)
```

### Return
el return nos devuelve un valor, un tipo de dato, independientemente de lo que la funtion misma pueda mostrar u hacer en su ejecucion, ejemplo:
```javascript
    function saludar(){
        alert("Hola"); /*al ejecutarse la function() se monstrata este alert, pero este no es el valor final de la function()*/
        return "la funcion se ejecuto correctamente"; /*con return tenemos un valor, en este caso un String que es el resultado de la ejecucion de function()*/
    }

    let saludo = function(); /*Podemos crear una variable que ejecute la function() y guarde su resultado*/

    document.write(saludo); /*Lo que nos permite mostrar que la function() se ejcuto correctamente independientemente de que el alert se haya ejecutado*/
```
Cuando una *function()* retorna un valor se finaliza la *function()*, funciona igual que un *break*.

### Parametros
Los parametros son valores que podemos darle una *function()* para que esta trabaje con esos valores y retorne un resultado diferente segun el valor que se le haya pasado.
```javascript
    function suma(num1, num2){ /*funtion() nos permite declarar variables con un Scope limitado a la function()*/
        let resultado = num1 + num2;
        return resultado; 
    }

    let suma1 = suma(12,14); //ahora podemos llamar la 'function suma()' inicializando sus variables y guardnado el resultado en una variable externa
    let suma2 = suma(1,4);
    let suma3 = suma(2,8);

    document.write(`los reusltados son: ${suma1}, ${suma2} y ${suma3}`);
```

### Arrow Function
tenemos mas de una sintaxis para crear function():
```javascript
    const saludar = function(nombre){ //Podemos asignar una function() a una Constante
        let frase = `Hola ${nombre}!`;
        document.write(frase);
    }

    const saludarArrow = (nombre)=>{ //con Arrow Functions reemplazamos la palabra 'function' por '=>' y lo colocamos despues de los parametros.
        let frase = `Hola ${nombre}!`;
        document.write(frase);
    }

    saludar("Roberto");
    saludarArrow("karina");
```
Las Arrow Function tienen varias ventajas:
- Si solo hay un parametro, se puede colocar sin parentesis:
```javascript
    const saludarArrow = (nombre)=>{}
    //VS
    const saludarArrow = nombre =>{}
```
- Si solo contienen una expresion (una linea de codigo) no es necesario colocar las llaves '{}' ni return:
```javascript
    const saludarArrow = nombre =>{
        return `Hola ${nombre}!`
    }
    //VS
    const saludarArrow = nombre => `Hola ${nombre}!`;
```

### PROBLEMA DE COFLA CAPITULO 2:
#### PROBLEMA Nº 1
EL Homeless al que Cofla le regalo plata, se gano la loteria. Este Señor decide hacer una fiesta! compró una máquina que deja pasar solamente a los mayores de edad:
- Dejar pasar solo a los mayores de edad (+18).
- La primera persona en entre despues de las 2 AM, no paga.

#### PROBLEMA Nº 2
Cofla se mete a estudiar, en su curso son 19 alumnos en total, pero se rompio el registro de asistencia, por los proximos 30 dias no se podra hacer registro de ningun tipo
- Crear un mini sistema que nos permita registrar a los alumnos que estan Presentes (p) y Ausentes (a)
- Pasados 30 dias, mostrar la situacion final del Alumno
- Se puede tener un maximo del 10% de ausencias por semestre, si se tinen mas, aclarar que el Alumno esta reprovado

#### PROBLEMA Nº 3
Cofla vuelve a su casa con muchas tareas de calculo, por lo que debemos crear una calculadora para ayudar a Cofla:
- Crear calculadora