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

¿Para quñe se usa?
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

Podemos declarar una variable de 3 maneras diferentes:
- **var**: definimos una variable y esta se puede utilizar en cualquier momento, se recomienda no utilizar debido a su amplio Scope.
- **let**: declara una variable que se encuentra limitada a su bloque, es una variable regional. 
 NOTA: No es lo mismo **Declarar** una variable o **Inicializar** una variable, podemos declarar una variable de la siguiente manera:
    *let numero;*   -> estamos indicando que existe una variable con un alcanze regional (al ser let)
    *numero = 123;*   -> aqui estamos Inicializando la variable al introducirle un valor
- **const**: declaramos una variable que siempre mantendra su valor. ***Const* no se puede Declarar sin Inicializar**
    ```js 
    const nombre = "Roberto"
    ```
    
### Tipos de datos
- **string** = "cadena de texto"
- **number** = 123
- **boolean** =  true / false

Casos especiales de Datos donde la variable no esta definida o hay un error:
 - **Undefined**: tipo de dato que retorna cuando una variable existe pero no esta Inicializada.
 - **Null**: es un valor vacio o nulo.
 - **Nan**: *'Not a Number'* valor que nos devuelve JS cuando intentamos realizar alguna operación matemática con variables que no son un numero

## SCOPE: 
El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que **Scope** es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.

## Hoisting: 
Concepto que trata sobre como un programa puede verse afectado por el orden de la creación y la ejecución del código.

## Prompt
Prompt: función de JS que nos permite almacenar un valor indicado por el usuario
```js
    let nombre = prompt("como te llamas?");
```
el valor indicado quedará almacenado en la variable, por lo que podremos trabajar con él.

## Operadores.
### Operadores de Asignación: 
Asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
```
    Asignación: 	                                        x = y           significa:	x = y
    Asignación de adición: 	                                x += y          significa:	x = x + y
    Asignación de sustracción:	                                x -= y          significa:	x = x - y
    Asignación de multiplicación: 	                        x *= y          significa:	x = x * y
    Asignación de división: 	                                x /= y          significa:	x = x / y
    Asignación de Resto: 	                                x %= y          significa:	x = x % y
    Asignación de exponenciación: 	                        x **= y         significa:	x = x ** y
    Asignación de desplazamiento a la izquierda: 	        x <<= y         significa:	x = x << y
    Asignación de desplazamiento a la derecha: 	                x >>= y         significa:      x = x >> y
    Asignación sin signo de desplazamiento a la derecha:        x >>>= y        significa:	x = x >>> y
    Asignación AND: 	                                        x &= y          significa:	x = x & y
    Asignación XOR: 	                                        x ^= y          significa:	x = x ^ y
    Asignación OR: 	                                        x |= y          significa:	x = x | y
```
### Operadores Aritméticos: 
toman valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numerico único:
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
### Operadores de Comparación
Los **operadores de comparación** comparan dos expresiones y devuelven un valor **Boolean** que representa la **relación** de sus valores.
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
### Operadores Lógicos
Los **operadores lógicos** nos devuelven un resultado a partir de que se cumpla (o no) una **condición**, su resultado es **boolean** y sus operadores son valores lógicos o asimilables a ellos.
```
 &&  -> And 
 ||  -> Or
 !   -> Not
```
## Concatenación: 
nos permite unir String mediante el signo **'+'**, tambien podemos concatenar numero a un string, en cuanto JS detecta un string concatena todo lo demas.
- **concat()** : método específico reservado para los String que nos permite concatenarle cualquier otro valor: -> *let saludo = bienvendio.concat(nombre);*
- **${}** : es una expresión que nos permite concatenar texto y variables, para ello se utiliza `` ejemplo:
```javascript
    let nombre = "Roberto";
    let frase = `soy ${nombre} y estoy estudiando`;
```
## Camel Case
Es un estilo de escritura en el cual cada palabra se escribe con la primera letra en mayúsculas (exceptuando la primera palabra de todas) y eliminando los espacios de una frase **camelCase**, ejemplo: *esteEsElNombreDeUnaVariable*
**JS** trabaja con **camelCase**, por ejemplo: *document.getElementById()*

## Condicionales
Es una sentencia que nos permite ejecutar un fragmento de código únicamente si se cumple una **condición**.
Para ello tenemos los siguientes condicionales:
- **if**: condicional que solo ejecuta el código que contiene si la condición que se le indica es True:
```javascript
    let nombre = "Roberto";
    let apellido = "Jofre";
    let edad = 26;

    if(edad === 26){
        alert(`Hola ${nombre} ${apellido}! tienes ${edad} años`);
    }
```

- **else**: condicional que depende de **if** que ejecuta un bloque de código en caso de que if sea false:
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
- **else if**: condicional que depende de **if** que ejecuta un bloque de código en caso de que el **if** anterior sea **false**, pero que contiene otro **if** con una nueva condición:
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
3 chicos de 23 años entran a una heladería a comprar, pero los precios no estan al lado de cada estante con su respectivo helado, ellos quieren comprar el helado mas caro posible con el dinero que tienen.
Cada uno tiene distintas cantidades de dinero, y hay una tabla en la que podemos basarnos para saber el costo de cada helado.
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
Cofla no compra un carajo y decide darle ese dinero a un homeless que a su vez compra un boleto de lotería:
- Si le alcanza para uno, lo compra.
- si le alcanza para 2, compra los 2.
- si le alcanza para tres y le sobra, compra 2 y regala el vuelto.
- debe mostrarse en pantalla los boletos que compro y el vuelto.

#### PROBLEMA Nº 3
Cofla es sospechoso de un delito y es detenido, en comisaría lo conectan a un detector de mentiras para saber si Cofla dice la verdad.
- Si miente, le da una descarga eléctrica.
- Si no miente, no hacer nada.
- Si el aparato no se decide, aclarar que la pregunta debe ser mas específica.


# Capitulo 2: ARRAYS
### Definición y como crearlos
Un Array es un conjunto de datos asociados a un indice.
Como crear un Array:
```javascript
    let frutas = ["manzana", "platano", "pera"];
```
Como mostrar 1 elemento en específico, para ello hay que tener en cuenta de que el primer elemento tiene posición 0:
```javascript
    document.write(frutas[1]); //Monstrará "platano"
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
En este caso, creamos un objeto *computer* que tiene las propiedades *cpu, gpu, ram, ssd y os*, esto nos permite llamar una propiedad en específico del objeto, sin tener que conocer su posición exacta:
```javascript
    document.write(computer["gpu"]);
```

## Bucles de Iteración
un Bucle se repite constanstemente hasta que cumplen la condición que se le indica

- **while** : Ejecuta en bucle uno bloque de código siempre y cuando la condición sea *True*, el pogramara no seguirá su flujo hasta que la condición sea *false*:
```javascript
    let numero = 0;
    while(numero<10){ // EL Bucle se ejecuta MIENTRAS la variable numero sea menor a 10
        document.write(numero);
        numero++;
    }
```
- **do while** : Primero ejecuta un bloque de código y después pregunta la condición, repetira el bloque de código hasta que la condición sea *false*. Esto es útil en caso de que querramos que el bloque de código se ejecute por lo menos 1 vez.
```javascript
    let numero = 0;

    do {
        document.write(numero);
        numero++;
    }
    while(numero<10)
```

- **break** :Es una sentencia que nos permite detener la ejecución de un Bucle:
```javascript
    let numero = 0;

    while(numero<10){
        document.write(numero);
        numero++;
        if (numero == 5){
            break;  //En este caso, si la Variable numero alcanza el valor 5, el Bucle se detendrá y el programa seguirá
        }
    }
```
- **for** :Es un Bucle que se repetirá el numero de veces que nosotros le indiquemos, **for** se compone de 3 partes:
    - **declaración e inicialización**: por regla general se declara una variable **i** (index)
    - **Condicion**: al igual que **while** el bucle se ejecutará mientras la condición se cumpla (sea **true**) se utiliza la misma variable previamente *declarada* **i**.
    - **iteramos**: Definimos si la variable **i** se aumenta o decrementa, esto se ejecuta después de que el bloque de código termine.

    ```javascript
        for (let i = 0; i < 6 ; i++) {
            document.write(i + "<br>");
        }

        for (let i = 6; i >= 0 ; i--) {
            document.write(i + "<br>");
        }
    ```

- **continue** : Sentencia parecida a **break** que nos permite "saltarnos" una iteración de un Bucle y que después este se siga ejecutando:
EL siguiente Bucle mostrará los números del 0 al 19, pero no el 12 devido a que se cortó esa iteración con **continue**.
```javascript
        for (let i = 0; i < 20 ; i++) {
            if (i == 12){
                continue;
            }
            document.write(i + "<br>");
        }
```

- **for in** : Se utiliza para recorrer un **Array**, **for in** nos devuelve el índice de los elementos:
```javascript
    let animales = ["Perro", "Gato", "Tigre"]

    for (animal in animales){
        document.write(animal + " ");
    }
```
El anterior Código nos monstrara *0 1 2* que son los **índeces del Array**, si queremos que nos muestre su contenido:
```javascript
    let animales = ["Perro", "Gato", "Tigre"]

    for (animal in animales){
        document.write(animales[animal] + " ");
    }
```
Ahora nos mostrará *Perro Gato Tigre*.

- **for of** : Funciona de igual menera que *for in* sin embargo nos devuelve automáticamente el contendido del **Array**
```javascript
    let animales = ["Perro", "Gato", "Tigre"]

    for (animal of animales){
        document.write(animal + " ");
    }

```
Esto nos mostrará *Perro Gato Tigre*.

- **label** : Sentencia que nos permite asociar un **Bucle** a un **Nombre**:
```javascript
    let array1 = ["Maria","Karina","Valentina"];
    let array2 = ["Roberto", "Carlos", array1,"Felipe"];

    forLabel: //label
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
En el anterior código asociamos el primer **for** a un label llamado **forLabel**, como podemos ver tenemos un segundo *for* dentro que recorre otra Array, este *for* contiene un **break**, este *break* detendria la ejecución de este segundo *for*, sin embargo le estamos pasando el **label** que hace referencia al primer ciclo  **forLabel**, por lo tanto el **break** detiene toda la ejecución.

## Funciones
### Definición
Una función es una porción de código al que se le asgina un identificador, para poder llamarla cuando se la necesite.
Para ello tenemos una palabra reservada **function()**, a la que le podemos asignar un nombre *function **saludar()***.
Function() tambien nos permite exigir un parámetro para que funcione.
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
el return nos devuelve un valor, un tipo de dato, independientemente de lo que la *function* misma pueda mostrar o hacer en su ejecución, ejemplo:
```javascript
    function saludar(){
        alert("Hola"); /*al ejecutarse la function() se monstrata este alert, pero este no es el valor final de function()*/
        return "la función se ejecuto correctamente"; /*con return tenemos un valor, en este caso un String que es el resultado de la ejecución de function()*/
    }

    let saludo = function(); /*Podemos crear una variable que ejecute la function() y guarde su resultado*/

    document.write(saludo); /*Lo que nos permite mostrar que la function() se ejcutó correctamente independientemente de que el alert se haya ejecutado*/
```
Cuando una *function()* retorna un valor se finaliza la *function()*, funciona igual que un *break*.

### Parámetros
Los parámetros son valores que podemos darle una *function()* para que esta trabaje con esos valores y retorne un resultado diferente según el valor que se le haya pasado.
```javascript
    function suma(num1, num2){ /*declaramos los parámetros que nuestra función necesita*/
        let resultado = num1 + num2;
        return resultado; 
    }

    let suma1 = suma(12,14); //ahora podemos llamar la 'function suma()' inicializando las variables que necesitan los parámetros.
    let suma2 = suma(1,4);
    let suma3 = suma(2,8);

    document.write(`los resultados son: ${suma1}, ${suma2} y ${suma3}`);
```

### Arrow Function
tenemos más de una sintaxis para crear function():
```javascript
    const saludar = function(nombre){ //Podemos asignar una function() a una Constante
        let frase = `Hola ${nombre}!`;
        document.write(frase);
    }

    const saludarArrow = (nombre)=>{ //con Arrow Functions reemplazamos la palabra 'function' por '=>' y lo colocamos después de los parámetros.
        let frase = `Hola ${nombre}!`;
        document.write(frase);
    }

    saludar("Roberto");
    saludarArrow("karina");
```
Las Arrow Function tienen varias ventajas:
- Si solo hay un parámetro, se puede colocar sin parentesis:
```javascript
    const saludarArrow = (nombre)=>{}
    //VS
    const saludarArrow = nombre =>{}
```
- Si solo contienen una expresión (una línea de código) no es necesario colocar las llaves '**{}**' ni **return**:
```javascript
    const saludarArrow = nombre =>{
        return `Hola ${nombre}!`
    }
    //VS
    const saludarArrow = nombre => `Hola ${nombre}!`;
```

### PROBLEMA DE COFLA CAPITULO 2:
#### PROBLEMA Nº 1
EL Homeless al que Cofla le regalo plata, se gano la lotería. Este Señor decide hacer una fiesta! compró una máquina que deja pasar solamente a los mayores de edad:
- Dejar pasar solo a los mayores de edad (+18).
- La primera persona en entre después de las 2 AM, no paga.

#### PROBLEMA Nº 2
Cofla se mete a estudiar, en su curso son 19 alumnos en total, pero se rompio el registro de asistencia, por los proximos 30 dias no se podra hacer registro de ningun tipo
- Crear un mini sistema que nos permita registrar a los alumnos que estan Presentes (p) y Ausentes (a)
- Pasados 30 dias, mostrar la situacion final del Alumno
- Se puede tener un maximo del 10% de ausencias por semestre, si se tinen mas, aclarar que el Alumno esta reprovado

#### PROBLEMA Nº 3
Cofla vuelve a su casa con muchas tareas de calculo, por lo que debemos crear una calculadora para ayudar a Cofla:
- Crear calculadora

# Capitulo 3: Pogramación Orientada a Objetos
los objetos tienen 2 conceptos, 
- **Atributos**: caracterisisticas o cualidades: altura, color, marca...
- **Metodos**: funcionalidades o métodos: encender, apagar, acelerar...

la POO es un paradigma de la programacion que nos facilita las cosas al utilizar la lógica que utilizariamos en la vida real.

### Conceptos Basicos de POO
- **Clase**: la plantilla que creamos para poder fabricar objetos.
- **Objeto**: Es el resultado de una clase
- **Atributo**: las características que tiene el Objeto, sus propiedades.
- **Método**: Son las cosas que puede hacer nuestro Objeto
- **Constructor**: función obligatoria que debe tener cada clase, este Constructor, nos va a construir las propiedades de los Objetos.
- **Instanciacion**: 

## Crear una clase
Vamos a crear la clase *animal*, a la que podremos indicarle la especie, la edad y el color del animal que creemos después.
Como dijismos, obligatoriamente una clase necesita un **constructor**, al que le pasaremos los parámetros del animal, estos parámetros de momento no son más que variables sin ningun valor almacenado.
Dentro del **constructor** utilizaremos la palabra reservada **this** que hace referencia al objeto (que todavia no existe), lo que decimos con esto es lo siguiente: this.especie (el objeto tendra un atributo llamado especie) = especie (le pasamos el valor que indiquemos al parámetro especie).
```js
    class animal {
        constructor(especie, edad, color){
            this.especie = especie;
            this.edad = edad;
            this.color = color;
        }
    }
```
Ahora, podemos construir diferentes Animales con los **Atributos** que indicamos en la **Clase**.
Nota: Los objetos idealmente deben ser creados como **Constantes**.
```js
    const perro = new animal("Quiltro", 5, "negro");
    const gato = new animal("gato", 7, "blanco");
    const pajaro = new animal("aguila", 2, "marron");
```
Tenemos 3 animales de diferentes especies, edades y colores, y podemos acceder a la información de cada uno de la siguiente manera:
Nota: es como utilizar **this.atributo**, solo que sustituimos **this** por el nombre del **Objeto**.
```js
    document.write(perro.color);
    document.write(gato.edad);
    document.write(pajaro.especie);
```
## Agregar Métodos
Para agregar un método a una clase, utilizamos la sintaxis de una *función* (no Arrow function) dentro de la clase, después del constructor.
Vamos a agregar el método *saludar()* que permitirá que cualquiera de los Animales que hemos creado se pueda presentar:
```js
    class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    };

    saludar(){
        document.write(`Hola! soy un ${this.especie}, soy de color ${this.color} y tengo ${this.edad} años :D` );
    }
}
```
Como ya vimos **this** hace referencia al **Objeto** con lo que podemos acceder a sus atributos, para llamar a este método hacemos lo siguiente:
```js
    perro.saludar();
    gato.saludar();
    pajaro.saludar();
```
## Características de la POO
### Abstracción
La Abstraccion tiene como objetivo intentar reducir lo más posible un Objeto, tanto en sus **atributos** como en sus **métodos**

### Modularidad
Es la capacidad de resolver un problema grande separandolo por partes.

### Encapsulamiento
Consiste en que los datos sean privados, que no se puedan acceder a ellos de manera sencilla.

### Polimorfismo
Consiste en la capacidad de un Objeto para comportarse de menera distinta ante el mismo método, por ejemplo, si agregamos un método *caminar()* a la clase *animal*, el *perro* va a caminar de una forma diferente que el *gato* y el *pajaro*.

## Herencia
La herencia se basa en crear un clase hija que tome todas las propiedades de la clase Padre, pero pudiendo agregarle cosas nuevas.
Por ejmeplo, tenemos la clase *animal*, y queremos agregarle el **método** de *ladrar()*, pero no todos los animales ladran, solo los perros.
Por lo que vamos a crear una **clase hija** de la clase *animal* que herede sus **Atributos** principales, pero a la que podremos agregarle nuevos atributos y nuevos **métodos**.
Esto lo hacemos con la palabra reservada **extend**.
```js
    class animal {
        constructor(especie, edad, color){
            this.especie = especie;
            this.edad = edad;
            this.color = color;
        };
        saludar(){
            document.write(`Hola! soy un ${this.especie}, soy de color ${this.color} y tengo ${this.edad} años :D` );
        }
    }
    // Creamos la Clase perro con extends de animal
    class perro extends animal{
        constructor(especie, edad, color, raza){ //Le indicamos los Atributos que tenia la clase 'animal' y agregamos uno nuevo 'raza'
            super(especie, edad, color); //al heredar estos atributos, no es necesario colocar 'this'
            this.raza = raza; //Si usamos 'this' para el atributo nuevo
        }
        ladrar(){ //y porfin podemos crear el método 'ladrar()'
            alert("GUAUU!! GUAUU!!");
        }
    }
```
Ahora tenemos una **Clase** capaz de crear **Objetos** *perro* heredando todas las funcionalidades de la clase *animal*, incluido los **métodos**.
Podemos crear un *objeto perro* que utilice el **método** *saludar()* indicado en la clase *animal*.
```js
    const perroPastorAleman = new perro("Perro", 5, "negro", "Pastor Aleman");
    perroPastorAleman.saludar(); //metodo creado en la clase 'animal'
    perroPastorAleman.ladrar(); //metodo creado en la clase 'perro'

    //Pero un Objeto creado con la clase 'animal' no puede utilizar los métodos de la clase 'perro'
    const gato = new animal("gato", 7, "blanco");
    gato.ladrar(); //Esto dará un Error
```

### Métodos estáticos
Un Método estático es un método que NO necesita que la clase se defina para poder ser creado.
Para ello utilizaremos la palabra reservada **static** al momento de crear el método, esto **SÓLO funciona si el método NO utiliza ningun Atributo de la clase**.
```js
    class perro extends animal{
        constructor(especie, edad, color, raza){
            super(especie, edad, color);
            this.raza = raza;
        }
        static ladrar(){ 
            alert("GUAUU!! GUAUU!!");
        }
    }
```
Con esto, **podemos utilizar el método *ladrar()* sin la necesidad de instanciar un objeto**, solo tenemos que llamar a la clase y el método:
```js
    perro.ladrar(); //esto se ejecutara sin problemas
    //Si eliminamos el 'static' del método, esto ya no funcionaria
```
### Métodos Accesores  - Getters y Setters
- **getters**: métodos para obtener un valor.
- **setters**: métodos para modificar o definir un valor.

En la mayoría de los lenguajes, los **getters** y **setters** se utilizan para acceder a propiedades privadas, en caso de JS, a datos encapsulados.

Vamos a crear un **método Setter** que modifique la *raza* de los perros, para ello utilizamos la palabra reservada **set**:
```js
    class perro extends animal{
        constructor(especie, edad, color, raza){
            super(especie, edad, color);
            this.raza = raza;
        }
        set setRaza(newraza){ //setter
            this.raza = newraza;
        }
    }
```
Para llamar a los **métodos setter** se hace de manera diferente a los otros métodos, en este caso no se usa la expresión *setRaza()*, sino que se le debe asignar un valor como si fuera una propiedad:
```js
    perroPastorAleman.setRaza = "Doberman"; //No se utiliza *setRaza()*

    document.write(perroPastorAleman.raza);
```
Ahora crearemos un **método Getter** que nos permita obtener la *raza* de un perro:
```js
    class perro extends animal{
        constructor(especie, edad, color, raza){
            super(especie, edad, color);
            this.raza = raza;
        }
        set modificarRaza(newraza){
            this.raza = newraza;
        }

        get getRaza(){ //getter
            return this.raza;
        }
    }
```
Ahora podemos saber de qué *raza* es un perro utilizando un **método Getter**.
```js
    document.write(perroPastorAleman.getRaza);
```
### PROBLEMA DE COFLA CAPITULO 3:
#### PROBLEMA Nº 1
Cofla va a una tienda a comprarse un celular, de todos los modelos de la tienda a Cofla el llamaron la atención 3 modelos espcíficamente. El problema es que ningún vendedor sabe mada... por lo que tendremos que ayudar a Cofla a elegir un celular mostrandole las caracterisicas de cada uno.
- Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
- Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram.
- Cada celular debe poder encender, apagar, tomar fotos y grabar. 

### PROBLEMA Nº 2
Cofla no está satisfecho con los celulares asi que decide ir a la sección de los celulares de gama alta, donde encontrará los celulares más caros del lugar, así que al entrar vió dos celulares que le encantaro, estos 2 celulares de alta gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejpres características y además pueden grabar en camara super lenta, tienen reconocimiento facial y una camara extra.
- Implementar todas estas cualidades en lso celulares de alta gama.


### PROBLEMA Nº3
Cofla ya tiene su nuevo celular, ahora está mirando las apps de Play Store ya que quiere jugar a los juegos que sean muy populares, uqe tengan buena puntuacion y que pesen poco, pero las 7 apps que llamaron suy atención son similares, por que va a descargar solo 2 para no perder tanto tiempo jugando, pero no puede decidirse entre las 7 apps.
- Crear un sistema que ayude a Cofla a decidir cual app descargar.
- La información de los instaladores debe contener la cantidad de descargas, la puntuación y su peso.
- Las Apps se deben poder Instalar, abrir, cerrar y desisntalar.

# Capitulo 4: Métodos de Cadena, Métodos de Arrays y Objeto Math.
## Métodos de Cadena
Los **Métodos de Cadena** nos permite modificar, concatenar, validar... cadenas de texto, para ello JS tiene los siguientes métodos:
- **concat()**: junta dos o más cadenas y retorna una nueva:
```js
    let cadena = `cadena de prueba `;
    let cadena2 = "cadena de prueba 2";
    let resultado = cadena.concat(cadena2); 

    document.write(resultado);
``` 

- **startsWith()**: Si una cadena comienza con los caracteres de otra cadena, devuelve *true* sino *false*.
```js
    let cadena = `cadena de prueba `;
    let cadena2 = "cadena";
    let resultado = cadena.startsWith(cadena2); //esto es True
```
- **endsWith()**: si una cadena termina con los caracteres de otra cadena, devuelve *true* sino *false*.
```js
    let cadena = `cadena de prueba `;
    let cadena2 = "cadena";
    let cadena3 = "prueba "
    let resultado = cadena.endsWith(cadena2); //esto es False
    let resultado2 = cadena.endsWith(cadena3); //esto es True
```
- **includes()**: si una cadena puede encontrarse dentro de otra cadena, devuelve *true* sino *false*, independientemente si se encuentra al inicio o la final.
```js
    let cadena = `cadena de prueba `;
    let cadena2 = "cadena";
    let cadena3 = "de"
    let resultado = cadena.includes(cadena2); //true
    let resultado2 = cadena.includes(cadena3); //true
    let resultado3 = cadena.includes("hola"); //false
```
- **indexOf()**: Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
```js
    let cadena = `Estoy estudiando con Dalto`;
    let cadena2 = "estudiando";
    let resultado = cadena.indexOf(cadena2); //En este caso el resultado es 6, debido a que la primera letra de "estudiando" en "cadena" se enceuntra en la posicion nº 6

    let resultado = cadena.indexOf("Hola"); //como no se encuentra en "cadena", devuelve -1
```

- **lastIndexOf()**: Devuelve el último indice del primer caracter de la cadena, si no existe, devuelve -1.
```js
    let cadena = `Estoy estudiando con Dalto Dalto Dalto Dalto Dalto Dalto`;
    let cadena2 = "Dalto";
    let resultado = cadena.lastIndexOf(cadena2); //resultado es 51, es la posición del primer carácter, del ultimo "Dalto".
```

- **padStart()**: [Propuesta de ECMA] - rellenar cadena al principio con los caracteres deseados.
    Este metodod requiere de 2 valores:
    - valor 1: el **largo Total** que queremos que tenga la cadena.
    - valor 2: Con qué vamos a rellenar la cadena hasta que alcanze el **largo Total**.
```js
    let cadena = `Estoy estudiando con Dalto`;
    let resultado = cadena.padStart(30, "123"); //colocará "123" repetidamente al Inicio hasta que la variable "cadena" tenga un largo Total de 30 caracteres.
```
- **padEnd()**: [Propuesta de ECMA] - Funciona de igual manera que *padStart* pero rellenar la cadena al final con los caracteres deseados.
```js
    let cadena = `Estoy estudiando con Dalto`;
    let resultado = cadena.padEnd(30, "123"); //colocará "123" repetidamente al Final hasta que la variable "cadena" tenga un largo Total de 30 caracteres.
```
- **repeat()**: Devuelve la misma cadena pero repetida la cantidad de veces que queremos.
```js
    let cadena = `123 `;
    let resultado = cadena.repeat(3); //repetirá 3 veces "cadena"
```

- **split()**: Divide la cadena como le pidamos.
```js
    let cadena = `Hola como estas?`;
    let resultado = cadena.split(" "); //La cadena se va a dividir cada vez que encuentre un espacio
    //En este caso estariamos creando un Array "resultado" con los valores ["Hola","como","estas?"]

    document.write(resultado[0]); //Hola
    document.write(resultado[1]); //como
    document.write(resultado[2]); //estas?
```
- **substring()**: Crea una nuevo String y nos retorna un pedazo de la cadena que seleccionamos.
    **substring()** no se escribe con **camelCase** devido a que es solo una palabra.
    Este método nos permite pasarle 2 parametros, el indice de donde empieza y el indice de donde termina (excluyendo este último.)
```js
    let cadena = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
    let resultado = cadena.substring(0,4); //Creamos un nuevo String que contiene ABCD, debido a que empeiza en la posición 0 de "cadena" y termine en la posicón 4, pero este último no lo incluye. 
    document.write(resultado);
```
- **toLowerCase()**: Convierte una cadena a minúscula.
```js
    let cadena = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
    let resultado = cadena.toLowerCase(); 
    document.write(resultado);
```
- **toUpperCase()**: Convierte una cadena a mayúsculas.
```js
    let cadena = `Hola todo el mundo, como estamos?`;
    let resultado = cadena.toUpperCase(); 
    document.write(resultado);
```
- **toString()**: Método que devuelve una cadena que representa al objeto especificado.
```js
    let cadena = 123456789;
    let resultado = cadena.toString(); //convierte a String un dato de otro tipo
```
- **trim()**: Elimina los espacios en blanco al principio y al final de la cadena.
```js
    let cadena = "       roberto      ";
    document.write(cadena.length); //el largo de "cadena" es de 20 caracteres.
    let resultado = cadena.trim(); //Eliminamos los espacios en blanco del principio y el final.
    document.write(resultado.length); //el largo de "resultado" es de 7 caracteres.
```
- **trimEnd()**:  Elimina los espacios en blanco al final de una cadena.
- **trimStart()**: Elimina los espacios en blanco al comienzo de una cadena.
- **valueOf()**: retorna el valor primitivo de un objeto string