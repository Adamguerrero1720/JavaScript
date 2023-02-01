//Tipo de Datos

console.log("Hola Mundo")

30

"asdnjk"

true
false

//Variables

const nombre = "Adam";

var edad;

edad = 30;

console.log(nombre, edad);

var elemento = ["Laptop", "Computadora", "PC"]

elemento [1]

//Funciones

function Mellamoadam ()
{
    return "adam";
}
Mellamoadam();

var suma = function(a,b){
    var resultado = a + b;
    return resultado;
}

suma();


//Scope

var Minombre = "Adam";

function Name(){
    var MiApellido = "Guerrero Tejada";
    console.log(Minombre +" "+ MiApellido);
}

Name();

//Hoisting: llamar una variable antes de ser declarada 
var ComoLlamar = "Adam";
console.log(ComoLlamar);
ComoLlamar = "Yo";

//Con Funciones
var MiNombre = "Adam";


function hey(){
    
    console.log("Hola" + Minombre);
}
hey();

//Coercion hacer que un tipo de dato se convierta en otro, explicita e implicita.

//Condicionales

if (true){
    console.log("Hola");
}
else{
    console.log("No estoy");
}

var edad = 18;

if (edad === 18){
    console.log("Eres mayor de edad, puedes votar.");
}
else if(edad >18){
    console.log("Puedes votar otra vez.");
}
else{
    console.log("Aun no puedes votar.");
}

//operador ternario

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Es uno." : "No soy uno";

//switch

var numero = 10;
switch(numero){

    case 1: 
        console.log("Numero uno");
        break;
    
    case 10: 
        console.log("Numero diez");
        break;
    
    case 3: 
        console.log("Numero cien");
        break;

    default:
        console.log("No existo");
}

//Playgorund tienda
var article = 1;
switch (article) {
    case 1:
      console.log("con mi computadora puedo programar usando javascript");
      break;

    case 2:
      console.log("En mi celular puedo aprender usando la app de platzi");
      break;

    case 3:
      console.log("¡Hay un cable en mi bota!");
      break;

    default:
      console.log("Articulo no encontrado");
      break;
}

//Arrays

var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Sandia"];

console.log(frutas);

//metodos arrays
// .push agrega elementos al final del array

var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Sandia"];

var masFrutas = frutas.push("Toronja"); 

// .pop elimina el ultimo elemento en el array

var ultimoFrutas = frutas.pop("Toronja"); 

// .unshift agrega elementos al inicio del array

var nuevaFruta = frutas.unshift("Uvas"); 

// .shift elimina elemento al inicio del array

var borrarFruta = frutas.shift("Uvas"); 

// .indexof saber la posicion del elemento en el array

var posicion = frutas.indexOf("Cereza"); 

posicion;

//Playground

function solution(arraySecreto) {

    var array = arraySecreto[0]; // se declara una variable con la posicion de array
    var type = typeof array; // se declara una variable para saber el tipo de dato
  
    if (type === "string") // *Recordar cuando usar == y ===
    {
      return true;
    }
    else {
      return false;
    }
}
