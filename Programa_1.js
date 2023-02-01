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

