# Documentación del Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR de Soy Dalto

- [Video Youtube](https://www.youtube.com/watch?v=z95mZVUcJ-E&t=17383s&ab_channel=SoyDalto
)
- Los Problemas de Cofla están resueltos por mi, si quieren ver las soluciones de dalto: [GitHub Dalto](https://github.com/soydalto/curso-de-javascript
)
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
- **var**: definimos una variable y esta se puede utilizar en cualquier momento, se recomienda no utilizar debido a su amplio *Scope*.
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
 - **Nan**: *'Not a Number'* valor que nos devuelve JS cuando intentamos realizar alguna operación matemática con variables que no son un número

## SCOPE: 
El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que **Scope** es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.

## Hoisting: 
Concepto que trata sobre como un programa puede verse afectado por el orden de la creación y la ejecución del código.

## Prompt
Prompt: función de JS que nos permite almacenar un valor indicado por el usuario
```js
    let nombre = prompt("¿cómo te llamas?");
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
 Non-identity:            x !== y     significa: si x es estrictamenteigual a y es false, sino true
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
## PROBLEMA DE COFLA CAPITULO 1:
### PROBLEMA Nº 1
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

### PROBLEMA Nº 2
Cofla no compra un carajo y decide darle ese dinero a un homeless que a su vez compra un boleto de lotería:
- Si le alcanza para uno, lo compra.
- si le alcanza para 2, compra los 2.
- si le alcanza para tres y le sobra, compra 2 y regala el vuelto.
- debe mostrarse en pantalla los boletos que compro y el vuelto.

### PROBLEMA Nº 3
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
    //o
    document.write(computer.cpu); 
    //Ambas opciones nos devuelve el contenido
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
EL siguiente Bucle mostrará los números del 0 al 19, pero no el 12 debido a que se cortó esa iteración con **continue**.
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
Pero también desventajas:
- No se pueden utilizar para crear métodos de clases, devido a que para las Arrow function **this** es el elemento que contiene a la función y no la clase.

## PROBLEMA DE COFLA CAPITULO 2:
### PROBLEMA Nº 1
EL Homeless al que Cofla le regalo plata, se gano la lotería. Este Señor decide hacer una fiesta! compró una máquina que deja pasar solamente a los mayores de edad:
- Dejar pasar solo a los mayores de edad (+18).
- La primera persona en entre después de las 2 AM, no paga.

### PROBLEMA Nº 2
Cofla se mete a estudiar, en su curso son 19 alumnos en total, pero se rompio el registro de asistencia, por los proximos 30 dias no se podra hacer registro de ningun tipo
- Crear un mini sistema que nos permita registrar a los alumnos que estan Presentes (p) y Ausentes (a)
- Pasados 30 dias, mostrar la situacion final del Alumno
- Se puede tener un maximo del 10% de ausencias por semestre, si se tinen mas, aclarar que el Alumno esta reprovado

### PROBLEMA Nº 3
Cofla vuelve a su casa con muchas tareas de calculo, por lo que debemos crear una calculadora para ayudar a Cofla:
- Crear calculadora

# Capitulo 3: Pogramación Orientada a Objetos
los objetos tienen 2 conceptos, 
- **Atributos**: caracterisisticas o cualidades: altura, color, marca...
- **métodos**: funcionalidades o métodos: encender, apagar, acelerar...

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

**Nota**: Los objetos deben ser creados como **Constantes**.
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
Por ejemplo, tenemos la clase *animal*, y queremos agregarle el **método** de *ladrar()*, pero no todos los animales ladran.
Por lo que vamos a crear una **clase hija** de la clase *animal* que **herede sus Atributos** principales, pero a la que podremos agregarle nuevos atributos y nuevos **métodos**.
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
    perroPastorAleman.saludar(); //método creado en la clase 'animal'
    perroPastorAleman.ladrar(); //método creado en la clase 'perro'

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
        set setRaza(newraza){
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
## PROBLEMA DE COFLA CAPITULO 3:
### PROBLEMA Nº 1
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
- **includes()**: si una cadena puede encontrarse dentro de otra cadena, devuelve *true* sino *false*, independientemente si se encuentra al inicio o al final.
```js
    let cadena = `cadena de prueba `;
    let cadena2 = "cadena";
    let cadena3 = "de"
    let resultado = cadena.includes(cadena2); //true
    let resultado2 = cadena.includes(cadena3); //true
    let resultado3 = cadena.includes("hola"); //false
```
- **indexOf()**: Devuelve el indice del primer carácter de la cadena, si no existe, devuelve -1.
```js
    let cadena = `Estoy estudiando con Dalto`;
    let cadena2 = "estudiando";
    let resultado = cadena.indexOf(cadena2); //En este caso el resultado es 6, debido a que la primera letra de "estudiando" en "cadena" se encuentra en la posición nº 6

    let resultado = cadena.indexOf("Hola"); //como no se encuentra en "cadena", devuelve -1
```

- **lastIndexOf()**: Devuelve el último indice del primer carácter de la cadena, si no existe, devuelve -1.
```js
    let cadena = `Estoy estudiando con Dalto Dalto Dalto Dalto Dalto Dalto`;
    let cadena2 = "Dalto";
    let resultado = cadena.lastIndexOf(cadena2); //resultado es 51, es la posición del primer carácter, del ultimo "Dalto".
```

- **padStart()**: [Propuesta de ECMA] - rellenar cadena al principio con los caracteres deseados.
    Este método requiere de 2 valores:
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
    **substring()** no se escribe con **camelCase** debido a que es solo una palabra.
    Este método nos permite pasarle 2 parámetros, el indice de donde empieza y el indice de donde termina (excluyendo este último.)
```js
    let cadena = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
    let resultado = cadena.substring(0,4); //Creamos un nuevo String que contiene ABCD, debido a que empieza en la posición 0 de "cadena" y termine en la posicón 4, pero este último no lo incluye. 
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

## Métodos de Arrays

### Transformadores:
Los Transformadores son **métodos que modifican el Array**.
- **pop()**: Método que elimina el último elemento de un Array y lo devuelve.
```js
    let nombres = ["Roberto", "karina", "Mona"];
    let resultado = nombres.pop(); //eliminamos el último elemento del Array, pero queda almacenado en "resultado"

    document.write(resultado); //Nos muestra el elemento eliminado
    document.write(nombres); //Vemos el Array sin el elemento eliminado por "pop()"
```
- **shift()**: Método que elimina el primer elemento de un Array y lo devuelve.
```js
    let nombres = ["Roberto", "karina", "Mona"]; 
    let resultado = nombres.shift(); //eliminamos el primer elemento del Array, pero queda almacenado en "resultado"

    document.write(resultado); //Nos muestra el elemento eliminado
    document.write(nombres); //Vemos el Array sin el elemento eliminado por "shift()"
```
- **push()**: Método que agrega uno o más elementos al final del Array y devuelve la nueva longitud del Array.
```js
    let nombres = ["Roberto", "karina", "Mona"];
    let resultado = nombres.push("Emy","Nico"); //Agregamos "Emy" y "Nico" al final del Array

    document.write(resultado); //Nos devuelve la cantidad de elementos que ahora tiene el Array
    document.write(nombres);  //Vemos el Array con los nuevos elementos al final
```
- **unshift()**: Método que agrega uno o más elementos al inicio del Array y devuelve la nueva longitud del Array
```js
    let nombres = ["Roberto", "karina", "Mona"];
    let resultado = nombres.unshift("Emy", "Nico"); //Agregamos "Emy" y "Nico" al final del Array

    document.write(nombres);   //Vemos el Array con los nuevos elementos al principio
    document.write(resultado); //Nos devuelve la cantidad de elementos que contiene el Array
```
- **reverse()**: Método que invierte el orden de los elementos de un Array
```js
    let nombres = [1,2,3,4,5,6,7,8];
    nombres.reverse(); //invertimos el orden del Array, y esta se modifica
    document.write(nombres); //Vemos el Array invertido
```
- **sort()**: Método que ordena los elementos de un Array localmente y devuelve el arreglo ordenado. Se basa en el orden lexicográfico.
**NOTA**: Solo tiene en cuenta el primer carácter de los números, ejemplo, si tenemos *let numero = [1,4,9,7,26,63,88 ]* el método *sort* ordenará los numero de la siguiente manera: *[ 1,26,4,63,7,88,9 ]*
```js
    let nombres = ["Zuloko","Roberto", "karina", "Mona","Andrea"];
    let numeros = [5,7,2,4,9,1,5,2,6];

    nombres.sort(); //ordenamos los nombres
    numeros.sort(); //ordenamos los numero

    document.write(nombres + `<br>`);
    document.write(numeros);
```
- **splice()**: Método que cambia el contenido de un array eliminando elementos y/o agregando nuevos elementos.
    Para ello Splice() tiene 3 parámetros:
    - **1er parámetro**: La **posición del índice** en la que se iniciarán los cambios (siendo la primera 0).
    - **2do parámetro**: La **CANTIDAD** de elementos que se eliminarán a partir de la posición indicada, si no queremos que se elimine ningun, colocamos 0.
    - **3er parámetro**: Los elementos que agregaremos en caso de querer añadir elementos, estos se colocarán a partir de la posición indicada en el 1er parámetro.
```js
    let nombres = ["Roberto", "karina", "Mona"];
    nombres.splice(1,2,"Emy","Nico"); //Eliminamos 2 elementos a partir del índice 1, y agregamos 2 más
    nombres.splice(0,0,"Emy","Nico") //Aqui estariamos agrgando los elementos nuevos al principio sin eliminar nada.
    nombres.splice(-1,0,"Emy","Nico") /*La forma de referirse al final de un Array es con "-1".
    Agregamos los elementos nuevos al final sin eliminar nada, 
    SIN EMBARGO, el último elemento del Array Original quedará después de los elementos agregados, 
    es decir, el último elemento seguirá siendo el último.  
    Pero para este caso lo mejor es utilizar "push()"*/
```

### Accesores
Los Métodos Accesores no modifican el Array original, sino que **crean un nuevo Array** que contenga los datos a los que nosotros queremos acceder.
- **join()**: Método que une todos los elementos de una matriz (u objeto similar) en un **String** y la devuelve.
    Este método nos permite indicar un elemento separador:
```js
    let nombres = ["Roberto", "karina", "Mona"];
    let resultado = nombres.join( " - " ); //Convertimos el Array a un String separando los elementos con un guión

    document.write(resultado); // Veremos "Roberto - karina - Mona" siendo esto un String no un Array
```
- **slice()**: Método que devuelve una parte del Array dentro de un nuevo Array. Podriamos decir que copia una parte del Array Original.
    Para ello el método **slice()** nos permite pasarle 2 parámetros:
    - **1er parámetro**: El índice del Array original desde el cual iniciará la copia
    - **2do parámetro**: El índice del Array original en el que dejará de copiar (este ultimo elemento no se incluye en la copia)
```js
    let nombres = ["Roberto", "karina", "Mona", "Emy", "Nico"];
    let resultado = nombres.slice(1,4); //Creamos el Array "resultado" con los elementos desde el indice 1 hasta 4 (excluyendo este ultimo) del Array "nombres"
    document.write(resultado); //Array con los elementos [karina,Mona,Emy]
```
- Métodos ya vistos en Métodos de Cadena: **toString(), indexOf(), lastIndexOf(), includes()**:
    Ejemplos:
```js
    let nombres = ["Roberto", "karina", "Mona", "Emy", "Nico"];
    let resultado = nombres.includes("Mona"); //true
    let resultado2 = nombres.toString(); //convierte el Array en un String
    let resultado3 = nombres.indexOf("Emy"); //Devuelve 3 que es el indice.
```
### De Iteración
- **forEach()**: Ejecuta la función indicada una vez por cada elemento del Array
```js
    let nombres = ["Roberto", "karina", "Mona", "Emy", "Nico"];
    nombres.forEach(nombre => document.write(nombre + `<br>`)); //recorremos todos los elementos del Array y nos permite ejecutar una función con cada uno de los elementos.
```
- **map()**: Método que crea un nuevo Array ejecutando una función por cada elemento del Array ooriginal.<br>
El método **map()** no ejecuta la función a elementos vacios del Array.
El método **map()** no modifica el Array original.
```js
    let nombres = ["Roberto", "karina", "Mona", "Emy", "Nico"];
    let nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());

```

- **filter()**: Crea un nuevo Array con todos los elementos que cumplan una condición. 
```js
    let nombres = ["Roberto", "karina", "Mona", "Emy", "Nico"];
    let resultado = nombres.filter(nombre => nombre.length > 4); /* filter() nos permite ejecutar una funcion en su interior 
    que recorre los elementos del Array, y que además nos permite indicarle una condición, por lo que, 
    en este caso "resultado" solo almacenará los elementos del Array "nombres" que contengan más de 4 carácteres.
    */

    document.write(resultado);
```

## Objeto Math
### Métodos
- **sqrt()**: Devuelve la raiz cuadrada positiva de un número.
```js
    let numero = Math.sqrt(25); //5
```
- **cbrt()**: Devuelve la raiz cúbica de un número.
```js
    let numero = Math.cbrt(27); //3
```
- **max()**: Devuelve el mayor de cero o más números. **NOTA**: Solo se admiten numeros.
```js
    let numero = Math.max(4,5,6,48,89,55,74,185,256,84,84,95); //256
```
- **min()**: Devuelve el más pequeño de cero o más números.
```js
    let numero = Math.min(4,5,6,48,89,55,74,185,256,84,84,95); //4
```
- **random()**: devuelve un número pseudo-aleatorio entre 0 y 1.
    ¿Cómo lo hacemos para obtener un número aleatorio entre 1 y 100?
```js
    let numero = Math.random(); //nos muestra un numero aleatorio entre 0 y 1
    let numero = Math.random() * 100; //ahora todos los numero entre 0 y 1 los múltiplicamos por 100
    //El problema es que seguimos teniendo muchisimo decimales:
    // 14.047725625382101
    // 79.25209320859146
    // 99.9694384484939
```
- **round()**: Devuelve el valor de un número redondeado al número entero más cercano.
```js
    let numero = Math.random() * 100; //volvemos a tener un número aleatorio entre 0 y 100 con muchos decimales
    numero = Math.round(numero); //redondeamos al número entero más cercano, por lo que ya no tendremos decimales
```
¿Pero que pasa si yo no quiero que se incluya el numero 0?
```js
    for (let index = 0; index < 10000; index++) {
    let numero = Math.random() * 99;
    numero = Math.round(numero +1);
    document.write(numero + `<br>`);
    }
```

- **floor()**: Devuelve el mayor entero menor que o igual a un número.
```js
    let numero = Math.floor(4.99999999999); //Simpre redondea hacia abajo, por lo que por muchos decimales que tengamos, el resultado será siempre el número entero.   
```

- **fround()**: Devuelve la representación flotante de **precisión simple** (**4 bytes**) más cercana a un número.
**NOTA**: cada byte almacena 4 caracteres, por lo que **4 bytes son 16 caracteres**.
```js
    let numero = Math.fround(9.7555555555555555555555555); // nos devuelve: 9.755555152893066 que la representación flotante de 4 bytes (precisión simple) más cercana al número indicado
    let numero2 = Math.fround(9.999999999999999999999); // En este caso la representacion flotante más cercana es 10.
```
- **trunc()**: Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios.
```js
    let numero = Math.trunc(9.854); //trunc elimina los decimales, no redondea, por lo que el resultado es 9
```

### Propiedades
- **PI**: Ratio de la circunferencia de un circulo respecto a su diámetro, aproximadamente 3.141592653589793
```js
    let numero = Math.PI; // 3.141592653589793 devuelve la representación flotante de precisión simple
```
- **SQRT1_2**: Raíz cuadrada de 1/2; Equivalentemente, 1 sobre la raíz cuadrara de 2, aproximadamente 0.707
```js
    let numero = Math.SQRT1_2; //0.7071067811865476
```
- **SQRT2**: Raíz cuadrada de 2, aproximadamente 1.414
```js
    let numero = Math.SQRT2; //1.4142135623730951
```

### Logaritmos
- **E**: Constante de Euler, la base de los logaritmos naturales, que es aproximadamente 2.718 
- **LN2**: Logaritmo natural de 2, aproximadamente 0.693
- **LN10**: Logaritmo natural de 10, aproximadamente 2.303
- **LOG2E**: Logaritmo de E con base 2, aproximadamente 1.443
- **LOG10E**: Logaritmo de E con base 10, aproximadamente 0.434

## PROBLEMA DE COFLA CAPITULO 4:
### PROBLEMA Nº 1
Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe realizar es mucho más avanzada de la que tenía antes, además de suma, resta, multiplicaicón y división, ahora también necesitará calcular las potencias, raices cuadradras y cúbicas.
- Perfeccionar calculadora para poder implementar las nuevas funciones. 

### PROBLEMA Nº 2
La facultad de Cofla está por comenzar y las 12 materisa de la carrera tienen asignado un profesor y todos los alumnos que se anotaron.
- Crear una funcion que al pasarle como parámetro la materia nos devuelva:
    - Profesor asignado
    - El nombre de todos los alumnos inscritos.
- Crear una función que nos diga en cuantas clases está inscrito Cofla.
- Nombrar las clases en las que está y los profesores que las imparten.

### PROBLEMA Nº 3
Cofla ya vió las 12 materias y se decidió en cual se va a inscribir, el problema es que se rompió el sistema de inscripciones.
- Crear una función para preguntarle a Cofla en que materia se quiere inscribir.
- Si ya hay 20 alumnos anotados en la materia negarle la inscripción.
- Si hay menos de 20 alumnos inscribir a Cofla y añadirlo a la lista de alumnos.

# Capitulo 5: Console
La consola también es un objeto, desde nuestro codigo podemos enviar instrucciones a la consola, como por ejemplo:
```js
    console.log("Hola");
```
Esto nos imprimirá *hola* en la consola del navegador, pero tenemos varias funciones que nos permiten trabajar con la consola:
## funciones de registro
- **assert()**: Aparecerá un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera no aparecerá nada (NO ESTANDAR).
- **clear()**: limpia la consola.
- **error()**: Muestra un mensaje de error en la consola web.
- **info()**: Emite un mensaje informativo a la consola, en Firefox y Chrome se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola.
- **log()**: Muestra un mensaje en la consola. 
- **table()**: Esta función toma un argumento obligatorio: **data**, que debe ser un *Array* o un *Objeto*, y un parámetro adicional: **columns** y nos muestra una tabla en consola.
```js
    console.table([4,1,2,3,3,4,2,1,]);
```
- **warn()**: Imprime un mensaje de advertencia en la consola.
- **dir()**: Despliega una lista interactiva de las propiedades del objeto JS especificado (NO ESTANDAR)

## funciones de conteo
- **count()**: Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
Esta funcion es util para saber cuantas veces se ejecutó una función o un Ciclo.
```js
    function sumar (num1, num2){
    console.count(); 
    return num1 + num2;
    } 

    sumar(2,3);
    sumar(4,7);
    sumar(9,2);
```
- **countReset()**: Resetea el contador **console.count()**.

## funciones de Agrupación.
- **group()**: Crea un nuevo grupo en linea en el registro de console, tambien podemos darle un nombre al grupo
- **groupEnd()**: Remueve un grupo en linea en el registro de la consola, lo que nos permite regresar a un grupo anterior.
- **groupCollapsed()**: Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

## funciones de temporización.
- **time()**: Inicia un temporizador.
- **timeEnd()**: Detiene un temporizador
- **timeLog()**: Registra el valor actual de un temporizador
Estas funciones nos permiten cuanto tiempo se demora un usuario en realizar una accion o cuanto tiempo se demora una funcion o un ciclo en ejecutarse.

**Nota**: tambien podemos **modificar el estilo del texto** en la consola, ejemplo:
```js
    console.log("%crancio", "color:red;background:black;padding:20px;border: 3px solid blue;");
```
## PROBLEMA DE COFLA CAPITULO 5:
### PROBLEMA Nº 1
Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
Contar con al menos el 90% de asistencia.
El promedio por materia debe ser de al menos 7 / 10.
Debe tener al menos el 75% de los trabajos prácticos entregados.
- Solicitar los datos y decirle si aprueba o no.
- Mostrar todo esto con colores representativos en consola (ej: aprobado en verde)
- Todo estructurado como Tabla

### PROBLEMA Nº 2
Cofla está sufriendo un poco... a pesar de que cree contar con el 90% de asistencias y tener un promedio mayor al 70%, no cree poder entregar el 75% de trabajos practicos, ya que necesita dividir las tareas que hará semanalmente, Cofla debe trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que:
estudiar 24 horas
24 horas para hacer trabajos
56 horas para trabajar
8 horas deberes del hogar

- Organizar las actividades diariamente
- Utilizar la consola para organizar todo
- El tiempo por tarea no debe superar las 4 horas

# Capitulo 6: DOM
## Definición
**DOM**: **document Object Model**, es la interfaz que contiene todos los objetos estandares que nos permiten representar todos los elementos *html, xml o xhtml*, que a su vez tiene otra interfaz que nos permite decir que cosa combina con cada cosa y otra que nos permite trabajar con un lenguaje como JavaScript.
Es el documento en sí que contiene todos los elementos.

## Nodo
Un nodo en el **DOM** es cualquier *etiqueta* del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.

**NOTA**: no siempre son etiquetas:
Existen varios tipos de **Nodos**:
### Tipos de Nodos
- **Document**: El nodo document es el nodo raíz, a partir del cual derivan el resto de nodos.
- **Element**: Nodos definidos por etiquetas HTML.
- **Text**: El texto dentro de un Nodo Element se considera un nuevo Nodo hijo de tipo Text.
- **Attribute**: Los Atributos de las etiquetas definen Nodos (en JS no los veremos como nodos, sino como información asociada al nodo de tipo elemento).
- **Comentarios y otros**: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los elementos HTML generan nodos.

### Métodos de Selección de Elementos
Recordemos que los métodos se aplican a Objetos, para estos métodos, el Objeto sería "document"
- **getElementById()**: Selecciona un Elemento por ID.
```html
    <body>
        <p id="test">Este es un texto de prueba</p>
    </body>
```
```js
    parrafo = document.getElementById("test");
    document.write(parrafo); //Esto nos devuelve [object HTMLParagraphElement]
    //Nos indica que es un Objeto Elemento Párrafo de HTML.
```

- **getElementsByTagName()**: Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
```html
    <body>
        <p id="test">Este es un texto de prueba</p>
        <p id="rancio">Este es un texto de prueba</p>
    </body>
```
```js
    parrafo = document.getElementsByTagName("p");
    document.write(parrafo); //Esto nos devuelve [object HTMLCollection]
    //Nos indica que es una Colección HTML, debido a que está seleccionando una lista de elementos "p" 
    document.write(parrafo[0]); //[object HTMLParagraphElement]
    //Debido a que es una Colección, podemos indicarle el indice del Elemento al que queremos acceder.
    //OJO!!! NO ES UN ARRAY, ES UNA COLECCIÓN *******************
```

- **querySelector()**: Devuelve el primer elemento que coincida con el grupo especificado de selectores (CSS).
```html
    <body>
        <p class="parrafo">Este es un texto de prueba</p>
    </body>
```
```js
    parrafo = document.querySelector(".parrafo"); //Seleccionamos el Primer elemento que contenga la Clase "parrafo"
    document.write(parrafo); //[object HTMLParagraphElement]
```

- **QuerySelectorAll()**: Devuelve todos los elementos que coincidan con el grupo especificado de selectores (CSS).
```html
   <body>
        <p class="parrafo">Este es un texto de prueba</p>
        <p class="parrafo">Este es un texto de prueba</p>
        <p class="parrafo">Este es un texto de prueba</p>
        <p class="parrafo">Este es un texto de prueba</p>
        <p class="parrafo">Este es un texto de prueba</p>
    </body>
```
```js
    parrafo = document.querySelectorAll(".parrafo"); //Seleccionamos todos los Elementos que contengan la Clase "parrafo"
    document.write(parrafo); // [object NodeList]
    //Es una lista de Nodos

    document.write(parrafo[0]);
    document.write(parrafo[1]);
    //NO ES UN ARRAY!
    //Pero podemos seleccionar los elementos por su indice dentro de la lista de Nodos
```

### Métodos para Definir, Obtener y Eliminar valores de Atributos de los Elementos
- **setAttribute()**: Modifica el valor de un atributo.
```html
   <body>
        <input type="text" class="rangoEtario">
        <label>Rango de Edad</label>
    </body>
```
```js
    const rangoEtario = document.querySelector(".rangoEtario"); //Seleccionamos el input con la clase "rangoEtario"

    rangoEtario.setAttribute("type","range"); //Modificamos el atributo "type" y le indicamos que sea "range"
    //Esto no solo modifica el "type", sino que en caso de que ese atributo no existiera, con este método lo añadiriamos.
```

- **getAttribute()**: Obtiene el valor de un atributo.
```html
   <body>
        <input type="text" class="rangoEtario">
        <label>Rango de Edad</label>
    </body>
```
```js
    const rangoEtario = document.querySelector(".rangoEtario"); //Seleccionamos el input con la clase "rangoEtario"
    valorAtributo = rangoEtario.getAttribute("type"); //Obtenemos el valor del atributo "type" del elemento con la clase "rangoEtario"
    document.write(valorAtributo); //Imprimimos en pantalla el valor del atributo, que en este caso es "text"
```

- **removeAttribute()**: Elimina el valor de un atributo.
```html
   <body>
        <input type="range" class="rangoEtario">
        <label>Rango de Edad</label>
    </body>
```
```js
    const rangoEtario = document.querySelector(".rangoEtario");
    rangoEtario.removeAttribute("type"); //Eliminamos el atributo "type", que en este caso tenia un valor "range"

    valorAtributo = rangoEtario.getAttribute("type"); // ¿Que pasa si intentamos obtener el atributo si ya lo eliminamos?
    document.write(valorAtributo); //Nos devolverá "null" 
    //aunque en este caso el navegador interpreta un "type" por defecto que es "text" aunque este no exista 
```

### Atributos Globales
Los **atributos globales** son los atributos que **tienen en común TODOS los elementos de HTML**
- **class**: lista de clases del elemento separadas por espacios.
- **contenteditable**: indica si el elemento puede ser modificable por el usuario (bool).
    ```js
    const titulo = document.querySelector(".titulo");
    titulo.setAttribute("contenteditable","true"); //Podremos editar el contendio del Elemento con la Clase "titulo".
    ```
- **dir**: indica la direccionalidad del texto. Este atributo permite 3 valores: (se recomienda hacer esto desde CSS, no en JS)
    - **ltr**: Left To Right (por defecto)
    - **rtl**: Right To left
- **hidden**:  indica si el elemento aún no es, o ya no es, relevante. Si hidden está definido, no importa el valor que tenga, el elemento se ocultará, pero SI debe tener un valor asignado, aunque sea vacio "".
- **id**: define un identificador único.
- **tabindex**: indica si el elemtento puede obtener un focus de input.
- **title**: contiene un texto con información relacionada al elemento al que pertenece. Al hacer Hover veremos el valor
- **style**:  contiene declaraciones de estilo CSS para ser aplicadas al elemento.

### Atributos de Inputs.
Ahora accederemos a los atributos de los Inputs directamente desde JS sin un método de intermediario.
Podemos acceder y modificar los atributos desde el Objeto, como propiedades.
- **className**: no muestra el nombre de la Clase.
- **value**: El valor es lo que contiene el input.
- **type**: El tipo de Input.
- **accept**:
- **form**: Permite hacer referencia a un formulario con un id en específico.
- **minLength**: La minima cantidad de caracteres que debe tener el Input.
- **placeholder**: Texto indicativo del Input.
- **required**: Nos permite indicar si un campo se requiere para enviarlo.
```html
   <body>
        <form action="">
            <input type="text" class="input-normal" value="124" minlength="4">
            <input type="submit" value="Enviar">
            <br><br>
        </form>
    </body>
```
```js
    const input = document.querySelector(".input-normal");

    document.write(input.className); //input-normal
    document.write(`<br>`); 
    document.write(input.value); //1234
    document.write(`<br>`);
    document.write(input.value = ""); //Podemos modificarlo directamente 
    document.write(`<br>`);
    document.write(input.type); //text
    document.write(`<br>`);
    document.write(input.type = "text"); //Lo modificamos directamente
    document.write(`<br>`);
    document.write(input.accept); //Se utiliza para los input type =file que nos permite seleccionar un archivo local
    document.write(input.accept = "image/png"); //Solo aceptará imagenes con extensión png
    document.write(`<br>`);
    document.write(input.form = "formulario"); //hacemos referencia a un "form" con id  "formulario"
    document.write(`<br>`);
    document.write(input.minLength=6);
    document.write(`<br>`);
    document.write(input.placeholder = "que pasa mami");
    document.write(`<br>`);
    document.write(input.required = " ");
    document.write(`<br>`);
```

### Atributo Style
Nos permite modificar el CSS del Atributo.

**NOTA**: tener en cuenta que en JS se deben escribir las propiedades con **camelCase**.

Ejemplo: **CSS**: *background-color*  => **JS**: *backgroundColor*
```html
   <body>
        <h1 class="titulo">Elemento a Modificar</h1>
    </body>
```
```js
    const titulo = document.querySelector(".titulo");
    titulo.style.color = "red"
    titulo.style.backgroundColor = "#000";
    titulo.style.padding="30px";
``` 

## ClassList
Es una particularidad de las Clases de los Objetos.

HTML DE EJEMPLO:
```html
   <body>
        <h1 class="titulo test elemento">Elemento a Modificar</h1>
    </body>
```
### Métodos de classList
- **add()**: Añade una clase.
```js
    const titulo = document.querySelector(".titulo");
    titulo.classList.add("grande"); //añade la clase "grande"
``` 
Supongamos que tenemos el siguiente **CSS**:
```css
    .grande{
        font-size: 50px;
        color: red;
    }
``` 
Al agregarle la clase "grande" veremos las propieades especificadas en el **CSS**

- **remove()**: Elimina una clase.
```js
    const titulo = document.querySelector(".titulo");
    titulo.classList.remove("grande"); //eliminamos la clase "grande", por lo que dejará de tomar sus propiedades de CSS
``` 
- **item()**: Devuelve la clase del indice especificado, no modifica las clases.
```js
    const titulo = document.querySelector(".titulo");
    let valorItem = titulo.classList.item(0); //recordemos que tenemos <h1 class="titulo test elemento">
    document.write(valorItem); //nos devuelve "titulo" ya que es el indice 0
``` 
- **contains()**: verifica si ese elemento posee o no clase especificada. (true o false)
```js
    const titulo = document.querySelector(".titulo");
    let valorContains = titulo.classList.contains("elemento"); //¿Contiene la clase "elemento"?
    if (valorContains){
        document.write(`La clase existe`);
    } else{
        document.write(`La NO clase existe`);
    }
``` 
- **toggle()**: si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
**toggle()** nos permite indicarle un *2do parametro opcional*: **true** si está la clase NO la va a eliminar, **false** siempre eliminará la clase
```js
    const titulo = document.querySelector(".titulo");
    titulo.classList.toggle("grande",true); //Si no está la Clase la va a añadir, pero al tener "true" si está la clase No la va a eliminar.
``` 
- **replace()**: reemplaza una clase por otra. Si reemplaza la Clase con exito, devuelve **true**, si la clase indicada no existe devuelve **false**
```js
const titulo = document.querySelector(".titulo");
let valorReplace = titulo.classList.replace("grande","chico"); //reemplazamos la clase "grande" por la clase "chico"
document.write(valorReplace); //true
``` 
## Obtención, Creación y Modificación de Elementos
### Obtención
```html
   <body>
        <p class="titulo">Elemento a <b>Modificar</b></p> <!-- Colocamos en negrita la palabra "Modificar" -->
        <p class="titulo2">Elemento a <b hidden ="">Modificar</b></p> <!-- Ocultamos la palabra "Modificar"-->
    </body> 
```

- **textContent**: devuelve el texto de cualquier nodo.
```js
    const titulo = document.querySelector(".titulo");
    let resultado = titulo.textContent;
    document.write(resultado); //Nos devuelve el texto "Elemento a Modificar", pero sin la etiqueta <b> de Modificar.
    //PERO
    const titulo2 = document.querySelector(".titulo2");
    let resultado2 = titulo2.textContent;
    document.write(resultado2); //Nos devuelve el texto "Elemento a Modificar" a pesar de que contiene el atributo "hidden"
``` 
- **innerHTML**: devuelve el contenido HTML de un elemento, por lo tanto, tener en cuenta de que al momento de mostrarlo en pantalla, el navegador lo va a interpretar.
```js
    const titulo = document.querySelector(".titulo");
    let resultado = titulo.innerHTML;
    document.write(resultado); // devuelve "Elemento a <b>Modificar</b>" y el navegador interpreta la etiqueta <b>


    const titulo2 = document.querySelector(".titulo2");
    let resultado2 = titulo2.innerHTML;
    alert(resultado2); // "Elemento a <b hidden ="">Modificar</b>"
    //Podemos ver como en el alert aparece todo el contenido de la etiqueta con class "titulo2"
``` 
- **outerHTML**: devuelve el código HTML completo del elemento, por lo tanto, tener en cuenta de que al momento de mostrarlo en pantalla, el navegador lo va a interpretar.
```js
    const titulo = document.querySelector(".titulo");
    let resultado = titulo.outerHTML;
    document.write(resultado); // devuelve "<p class="titulo">Elemento a <b>Modificar</b></p>" y el navegador interpreta todo


    const titulo2 = document.querySelector(".titulo2");
    let resultado2 = titulo2.outerHTML;
    alert(resultado2); // devuelve "<p class="titulo2">Elemento a <b hidden ="">Modificar</b></p>"
    //vemos el contenido completo, incluyendo el HTML de la etiqueta
``` 
**EN RESUMEN**:
```html
   <p class="titulo2">Elemento a <b hidden ="">Modificar</b></p>
```
```js
    const titulo = document.querySelector(".titulo");

    let resultado = titulo.textContent;
    let resultado2 = titulo.innerHTML;
    let resultado3 = titulo.outerHTML;

    alert(resultado); //Elemento a Modificar
    alert(resultado2); // Elemento a <b hidden ="">Modificar</b>
    alert(resultado3); // <p class="titulo2">Elemento a <b hidden ="">Modificar</b></p>

``` 
- **innerText**: devuelve el texto visible de un **node element**. **NO SE USA**
- **outterText**: devuelve el texto que de las etiquetas html incluidas las etiquedas. **NO SE USA**

### Creación de Elementos
Existen muchas formas de crear elementos en JavaScript, pero vamos a ver las formas más comunes.
Para estos Métodos utilizaremos el siguiente HTML:
```html
    <body>
        <div class="contenedor"></div>
    </body>
```

- **createElements()**: Método que nos permite crear un **Node element** pasandole como parámetro su etiqueta. 
**NOTA**: las etiquetas debe ir en **MAYUSCULAS**
```js
    const contenedor = document.querySelector(".contenedor"); 

    const lista = document.createElement("LI"); //Creamos un elemento <li> en el documento.
    document.write(lista); // [object HTMLLIElement] vemos que efectivamente tenemos un nuevo Nodo Element Li HTMl como Objeto, pero de momento no hemos hecho nada más que mostrar que existe.
    console.log(lista); //En Consola podemos ver <li></li>
``` 
- **createTextNode()**: Método que nos permite crear un **Node text** dentro de un **Node element**.
```js
    const contenedor = document.querySelector(".contenedor");
    const lista = document.createElement("LI");

    const listaItem = document.createTextNode("Este es un Item de la Lista"); //Siempre creamos en base al DOM, pero eso utilizamos document.createTextNode() y no lista.createTextNode()

    console.log(lista); // <li></li> 
    console.log(listaItem); // "Este es un Item de la Lista"

    //Tenemos un Node Element Li llamado *lista* y un Node Text llamado *listaItem*
    //Pero están por separado.
    //¿Cómo hacemos para colocar un Nodo dentro de otro Nodo?

    lista.innerHTML = listaItem; //¿Tiene sentido hacer esto?
    console.log(lista); //<li>[object Text]</li> 
    //Vemos que nos devuelve un Objeto texto, debido a que "listaItem" es un Nodo, por lo que no tenemos el resultado que buscabamos.

    //Para ello utilizaremos el siguiente Método:
``` 
- **appendChild()**: Métodos que se aplican a los **elementos Padre** pero que toma como parámetro un **elemento Hijo**.
```js
    lista.appendChild(listaItem); //*lista* es el elemento Padre al que le pasamos como parámetro el elemento *listaItem* que será el Hijo

    contenedor.appendChild(lista); //Ahora podemos hacer lo mismo con el elemento *contenedor*, que recordemos es el <div> creado en el HTML, por lo que será el Padre, y *lista* su Hijo. 
    // Y de esta manera, creamos un Node Element Li con un Node Text de contenido y lo agregamos al Div, por lo que lo vemos reflejado en pantalla
``` 
```js
    //También existe la posibilidad de añadir un texto a la lista con el siguiente método

    lista.innerHTML = "Este es un item de la lista"; //Pero el contenido no sería un Objeto, por lo que no tendría las mismas propiedades que un Text Node
``` 
#### ¿Que pasaría si tuviesemos que agregar muchos elementos?
```js
    //¿Funcionaria esto?
    const contenedor = document.querySelector(".contenedor");
    const lista = document.createElement("LI");
    lista.innerHTML = "Este es un Item de la Lista"

    for (i =0 ; i < 20 ; i++){
        contenedor.appendChild(lista); 
    }
``` 
**NO**, debido a que "lista" es UN elemento, y **UN elemento no puede ser agregado 2 veces** , un elemento es un Objeto y como es un Objeto, tiene **identificadores que lo hacen único** y no podemos agregar un elemento único 2 veces.

#### Bueno, entonces coloquemos todo dentro del ciclo for:
```js
    //¿Funcionaria esto?
    const contenedor = document.querySelector(".contenedor");

    for (i =0 ; i < 20 ; i++){
        const lista = document.createElement("LI");
        lista.innerHTML = "Este es un Item de la Lista"
        contenedor.appendChild(lista); 
    }
``` 
**SI, PEEERO**, tenemos un problema gigante de **rendimiento**, debido a que cuando modificamos el **DOM**, el DOM no agrega los nuevos elementos sobre lo que ya existia, **el DOM ELIMINA TODO y lo VUELVE A ESCRIBIR** con el elemento nuevo ya puesto, por lo tanto, con el código anterior, el DOM está eliminando todo y creando todo 20 veces. 
Entonces **¿Como lo hacemos para no afectar al rendimiento?** veamos el siguiente método...

- **createDocumentFragment()**: es un método que nos permite crear un **Node Object Imaginario**, con todas las propiedades y métodos de un **Node Object**.
Por lo que podemos extraer partes del documento y modificar, añadir o eliminar algún contenido e insertarlo nuevamente al documento.

```js
    const contenedor = document.querySelector(".contenedor");
    const fragmento = document.createDocumentFragment(); //Creamos nuestro Node Object Imaginario

    for (i =0 ; i < 20 ; i++){
        const lista = document.createElement("LI");
        lista.innerHTML = "Este es un Item de la Lista"
        fragmento.appendChild(lista); //Le pasamos como Hijos nuestras listas, y las irá almacenando como un elemento Padre
    }

    contenedor.appendChild(fragmento); //Ahora le pasamos al *contenedor* todo el contenido de *fragmento*, y el DOM solo se recarga 1 vez
``` 
Con esto evitamos el consumo excesivo de recursos

### Obtención de Childs
Para este apartado utilizaremos el siguiente código HTML.
```html
    <body>
        <div class="contenedor">
            <h2>un h2 común</h2>
            <h4>un h4 común</h4>
            <p>Un simple párrafo</p>
        </div>
    </body>
```
Propiedades:
- **firstChild**: Obtiene el primer hijo del elemento que le indiquemos
```js
    const contenedor = document.querySelector(".contenedor");

    const primerHijo = contenedor.firstChild; //Almacenamos el primer hijo de contenedor

    console.log(primerHijo);// nos retorna: #text, y no el h2 que queriamos.
    //¿a qué se debe esto?
``` 
Si vemos el código HTML podemos ver que la etiqueta *< h2>* no está exactamente a continuación del *< div>*, sino que hay un espacio en blanco que los separa, ese espacio en blanco es un **Text Node**, por lo tanto es el primer hijo de *< div>*
```html
        <div class="contenedor">
<!-- text--><h2>un h2 común</h2> 
        </div>
```
Para que < h2> fuera el primer hijo de *< div>*, tendría que estar de la siguiente manera:
```html
        <div class="contenedor"><h2>un h2 común</h2> 
        </div>
```
- **lastChild**: Obtiene el último hijo del elemento que le indiquemos:
```js
    const contenedor = document.querySelector(".contenedor");
    const ultimoHijo = contenedor.lastChild; //Almacenamos el último hijo de contenedor
    console.log(ultimoHijo); //Y nos devuelve #text nuevamente, debido a que ocurre lo mismo que con *firstChild*
    //El último parráfo del HTML no está exactamente pegado al cierre de la etiqueta <div>, por lo tanto hay texto entre ambos elementos
``` 
- **firstElementChild**: Obtiene el primer **Elemento** hijo ignorando los **Text Node** que puedan existir entremedio
```js
    const contenedor = document.querySelector(".contenedor");
    const primerHijo = contenedor.firstElementChild;
    console.log(primerHijo); //Nos devuelve <h2>un h2 común</h2>
``` 
- **lastElementChild**: Obtiene el último **Elemento** hijo ignorando los **Text Node** que puedan existir entremedio
```js
    const contenedor = document.querySelector(".contenedor");
    const ultimoHijo = contenedor.lastElementChild;
    console.log(ultimoHijo); //Nos devuelve <p>Un simple parrafo</p>
``` 
- **childNodes**: Nos devuelve **TODOS** los Nodos Hijos, **NOTA**: el resultado **NO ES UN ARRAY**, es un **Node List**
```js
    const contenedor = document.querySelector(".contenedor");
    const hijos = contenedor.childNodes;
    console.log(hijos); //NodeList(7) [text, h2, text, h4, text, p, text]
    console.log(hijos[1]); // Accedemos la segundo Nodo <h2>un h2 común</h2>

    hijos.forEach(hijo => console.log(hijo)); //Como es un Objeto, podemos recorrerlo con forEach
``` 
- **children**: Nos devuelve solamente los **Node Elements** hijos.
```js
    const contenedor = document.querySelector(".contenedor");
    const hijos = contenedor.children;
    console.log(hijos); //HTMLCollection(3) [h2, h4, p]

    console.log(hijos[1]); //<h4>un h4 común</h4>

    for (hijo of hijos){ //recorremos y mostramos cada elemento.
        console.log(hijo);
    }
``` 

### Métodos de Childs
Para este apartado utilizaremos el siguiente código HTML.
```html
    <body>
        <div class="contenedor">
            <h2 class="h2">un h2 común</h2>
        </div>
    </body>
```

- **replaceChild()**: Método que nos permite reemplazar un elemento por otro, este admite 2 parámetros *(**element1**, **element2**)*, donde element 1 es el Elemento Nuevo, y el element 2 es el Elemento al que vamos a reemplazar 
```js
const contenedor = document.querySelector(".contenedor");

const h2_nuevo = document.createElement("H2"); //Creamos un Node Element Heading HTML Object
h2_nuevo.innerHTML = "un h2 Nuevo"; //Le indicamos el Texto que debe contener la etiqueta HTML.

const h2_antiguo = document.querySelector(".h2"); //Seleccionamos el h2 existente en el HTML

contenedor.replaceChild(h2_nuevo, h2_antiguo); //Reemplazamos el h2_antiguo por el h2_nuevo dentro del *contenedor*
``` 
- **removeChild()**: Método que nos permite Eliminar un elemento hijo del Elemento Padre.
```js
    const contenedor = document.querySelector(".contenedor");
    const h2_antiguo = document.querySelector(".h2");
    contenedor.removeChild(h2_antiguo); //Eliminamos el Elemento del *contenedor*
``` 
- **hasChildNodes()**: Método para verificar si tiene un elemento Hijo o no, esto devuelve **true** o **false**
```js
    const contenedor = document.querySelector(".contenedor");
    let respuesta = contenedor.hasChildNodes(); //¿Tiene hijos?

    if (respuesta) {
        document.write("El elemento tiene hijos");
    } else {
        document.write("El elemento NO tiene hijos");
    }
``` 
### Métodos de Parents
Para este apartado utilizaremos el siguiente código HTML.
```html
    <body>
        <div class="contenedor">
            <h2 class="h2">un h2 común</h2>
        </div>
    </body>
```

- **parentElement**: propiedad de un Elemento Hijo que nos devuelve su Elemento HTML Padre.
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.parentElement; //Seleccionamos el Elemento Padre de *h2_antiguo*

    console.log(respuesta); // Devuelve div class="contenedor"> ...</div> Con todo su contenido
``` 
- **parentNode**: propiedad de un Elemento Hijo que nos devuelve su Node Padre, que en casos muy específicos puede NO ser un Elemento HTML.
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.parentNode; //Seleccionamos el Node Padre de *h2_antiguo*

    console.log(respuesta); // Devuelve div class="contenedor"> ...</div> Con todo su contenido, ya que en este caso el Node Padre es un Elemento HTML
``` 

### Propiedades de Siblings (Hermanos)
Para este apartado utilizaremos el siguiente código HTML.
```html
    <body>
        <div class="contenedor">
            <h2 class="h2">un h2 común</h2>
            <h4>un h4 común</h4>
            <p>Un simple parrafo</p>
        </div>
    </body>
```
Los **Nodos hermanos** son todos los elementos que coinciden como Hijos de un Elemento Padre
- **nextSibling**: Obtiene el siguiente Node hermano, siendo este un **Node Element** o no.
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.nextSibling; //Seleccionamos el siguiente elemento Hermando

    console.log(respuesta); //Nos devuelve #text, debido a que hay un espacio entre el siguiente Node Element
``` 
- **previousSibling**: Obtiene el anterior Node hermano, siendo este un **Node Element** o no.
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.previousSibling; //Seleccionamos el anterior elemento Hermando

    console.log(respuesta); //Nos devuelve #text, debido a que tambien hay un espacio antes del Node Element que estamos seleccionando.
``` 
- **nextElementSibling**: Obtiene el siguiente **Node Element** 
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.nextElementSibling; //Seleccionamos el siguiente Node Element Hermano

    console.log(respuesta); // <h4>un h4 común</h4>, ahora si devuelve el h4
``` 
- **previousElementSibling**: Obtiene el anterior **Node Element** 
```js
    const h2_antiguo = document.querySelector(".h2");
    let respuesta = h2_antiguo.previousElementSibling; //Seleccionamos el anterior Node Element Hermano

    console.log(respuesta); // devuelve Null, debido a que no tiene un Node Element Hermano Previo
``` 

### closest()
Para este apartado utilizaremos el siguiente código HTML.
```html
    <body>
        <div class="div">
            DIV 1
            <div class="div">
                DIV 2
                <div class="div-3">
                    DIV 3
                </div>
            </div>
        </div>
    </body>
```

- **closest()**: Selecciona el elemento Ascendente más cercano que coincida con nuestro selector.
```js
    const div3 = document.querySelector(".div-3");
    let respuesta = div3.closest(".div");
    console.log(respuesta); //Nos devuelve el DIV 2 
``` 
## PROBLEMA DE COFLA CAPITULO 6:
### PROBLEMA Nº 1
Cofla se quedó encerrado en su casa porque se le rompió la llave, pero necesita ir urgente a la facultad porque no puede faltar ni una sola vez más si quiere aprobar las materias que le faltan, entonces siene que llamar a un cerrajero y pedirle que triaga la llave indciada, no hay tiempo suficiente como para que el cerrajero vea cual es la llave correcta, solo puede traer una y probar. 
Crear sistema que le muestre a Cofla las 20 llaves posibles, Cofla debe seleccionar cual llave elegir, una vez que Cofla seleccionó la llave, envia los datos al servidor, donde otro programador se encargará del resto.