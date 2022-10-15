/* Desafío: javaScript

Nombre de Desafío: operadores_js

Instrucciones */


// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'soy buen alumno';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str()
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  suma(x + y)
  return suma(5 + 5)
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resta(x - y)
  return resta(20 - 15)
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multiplica(x * y)
  return multiplica(5 * 5)
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  divide(x / y)
  return divide(20 / 4)
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  x = 5
  y = 5
  if (x === y){
    true
  } else{
    false
  }
  return sonIguales()
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  str1 = 'galletas'
  str2 = 'chocolate'
  if (str1.length === str2.length){
    true
  }else{
    false
  }
  return tienenMismaLongitud()
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 75
  let num2 = 90
  if (num < num2){
    true
  }else{
    false
  }
  return menosQueNoventa()
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 100
  let num2 = 50
  if (num > num2){
    true
  }else{
    false
  }
  return mayorQueCincuenta()
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  obtenerResto(x % y)
  return obtenerResto(21 % 5)
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 20
  if (num % 2 === 0){
    true
  }else{
    false
  }
  return esPar()
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 21
  if (num % 2 ==! 0){
    true
  }else{
    false
  }
  return esImpar()
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let exponente = 2
  elevarAlCuadrado(num**exponente)
  return elevarAlCuadrado(Math.floor(Math.random*10)**exponente)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let exponente = 3
  elevarAlCuadrado(num**exponente)
  return elevarAlCuadrado(Math.floor(Math.random*10)**exponente)
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  elevar(num**exponent)
  return elevar(4**2)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  num = Math.round(num)
  return redondearNumero(num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  num = Math.ceil(num)
  return redondearHaciaArriba(num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let num
  num = Math.floor(Math.random*10)
  return numeroRandom(num)
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  numero = -5
  if(numero > 0){
    console.log('Es positivo')
  }
  if(numero < 0){
    console.log('Es negativo')
  }
  if(numero === 0){
    false
  }
  return esPositivo()
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str = 'hello world'
  let str2 = str.concat('!')
  return agregarSimboloExclamacion(str2)
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Jhoswe", "Genner" -> "Jhoswe Genner"
  // Tu código:
  nombre = 'Jonathan'
  apellido = 'Díaz'
  let nombreyApellido = nombre
  nombreyApellido = nombreyApellido.concat(' ')
  nombreyApellido = nombreyApellido.concat(apellido)
  return combinarNombres(nombreyApellido)
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  nombre = 'Jonathan'
  nombre = nombre.concat('Hola' + nombre + '!')
  return obtenerSaludo(nombre)
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  obtenerAreaRectangulo(alto * ancho)
  return obtenerAreaRectangulo(45 * 100)
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  lado = 4
  let perimetro = lado * lado
  return retornarPerimetro(perimetro)
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  base = 4
  altura = 3
  let area = (base * altura) / 2
  return areaDelTriangulo(area)
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  // include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
  
// when user clicks, it calls function getresults 
convert.addEventListener("click", getResults);
  
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  letra = document.getElementById("letra").value
  if(letra == ''){
    alert['Por favor, digita una letra. No puede estar el campo vacío']
  }else{
    if (!isNaN(letra)){
      alert['Proporciona una letra, no un número']
    }
    else{
      switch(letra){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          alert['La letra que digitaste es: ' + letra + ' es una vocal']
          break
          default:
            alert['La letra que digitaste es: ' + letra + ' es una consonante']
      }
    }
  }
return esVocal()
}