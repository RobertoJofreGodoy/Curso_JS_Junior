# Curso_JS_Junior
¿Que es JavaScript?
- Lenguaje Interpretado
- Orientado de Objetos: 
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

# VARIABLES
Una variable es un espacio que guardamos en memoria
 **string** = "cadena de texto"
 **number** = 123
 **boolean** =  true / false

Podemos declarar una variable de 3 maneras diferentes:
 - **var**: definimos una variable y esta se puede utilizar en cualquier momento, se recomienda no utilizar.
 - **let**: declara una variable que se encuentra limitada a su bloque. No es lo mismo Delcarar una variable o Inicializar una variable, podemos declarar una variable de la siguiente manera:
    *let numero;*   -> estamos indicando que existe una variable con un alcanze regional (al ser let)
    *numero = 123;*   -> aqui estamos Inicializando la variable al introducirle un valor
 - **const**: delcaramos una variable que siempre mantendra su valor
    -> const nombre = "Roberto"
    Const no se puede Declarar sin Inicializar

Casos especiales de Datos donde la variable no esta definida o hay un error:
 - **Undefined**: tipo de dato que retorna cuando una variable existe pero no esta Inicializada.
 - **Null**: es un valor vacio o nulo
 - **Nan**: 'Not a Number' valor que nos devulve JS cuando intentamos realizar alguna operacion matematica con variables que no es un numero

## SCOPE: 
El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que scope es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.

## Hoisting: 
concepto que trata sobre como un programa puede verse afectado por la creacion y la ejecucion

Prompt: funcion de JS que nos permite almacenar un valor indicado por el usuario
    *let nombre = prompt("como te llamas?");*
el valor indicado quedara almacenado en la variable por lo que podremos trabajar con el

## Operadores.
### Operadores de Asignacion: 
asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
```
    Asignación: 	                                        x = y           significa:	x = y
    Asignación de adición: 	                                x += y          significa:	x = x + y
    Asignación de sustracción :	                            x -= y          significa:	x = x - y
    Asignación de multiplicación: 	                        x *= y          significa:	x = x * y
    Asignación de división: 	                            x /= y          significa:	x = x / y
    Asignación de Resto: 	                                x %= y          significa:	x = x % y
    Asignación de exponenciación: 	                        x **= y         significa:	x = x ** y
    Asignación de desplazamiento a la izquierda: 	        x <<= y         significa:	x = x << y
    Asignación de desplazamiento a la derecha: 	            x >>= y         significa:  x = x >> y
    Asignación sin signo de desplazamiento a la derecha:    x >>>= y        significa:	x = x >>> y
    Asignacion AND: 	                                    x &= y          significa:	x = x & y
    Asignacion XOR: 	                                    x ^= y          significa:	x = x ^ y
    Asignacion OR: 	                                        x |= y          significa:	x = x | y
```
### Operadores Aritmeticos: 
toman valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numerico unico:
```
    Addition:   x + y
    Subtraction:    x - y
    Multiplication: x * y
    Division:   x / y
    Decrement:  x--
    Increment:  x++
    Exponentiation: x ** y
    Remainder:  x % y
    Unary negation: -x
    Unary Plus: +x
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
nos permite unir String mediante el signo **'+'**, tambien podemos concatenar numero a un string, en cuando JS detecta un string concatena todo lo demas.
- **oncat()** : metodo especifico reservado para los String que nos permite concatenarle cualquier otro valor: -> *let saludo = bienvendio.concat(nombre);*
- **${}** : es una expresion que nos permite concatenar texto y variables, para ello se utiliza `` ejemplo:
```
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
```
    let nombre = "Roberto";
    let apellido = "Jofre";
    let edad = 26;

    if(edad === 26){
        alert(`Hola ${nombre} ${apellido}! tienes ${edad} `);
    }
```

    **else** condicional que depende de **if** que ejecuta un bloque de codigo en caso de que if sea false