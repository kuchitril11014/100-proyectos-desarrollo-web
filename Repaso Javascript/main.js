//Alertas
alert("soy rafael soto");

//Variables
let nombre = 'rafael'
nombre = 'victor'

//constantes
const apellido = 'Robles';

//otra variable
 let altura = prompt('cuanto mides?');

//mostrar por consola
console.log(nombre);
console.log(altura);

//concatenacion
let concatenacion = nombre + " " + apellido;
console.log(concatenacion)
//seleccionar elementos de la pagina

let datos = document.querySelector('#datos');
datos.innerHTML = `
    <hr>
    <h1>Soy la caja de datos </h1>
    <h2>Mi Nombre es: ${concatenacion}</h2>
    <h3>Mido : ${altura} cm</h3>
`;

// Condicionales

if (altura >= 175) {
    datos.innerHTML += "<h1>Eres una persona alta </h1>"
}else{
    datos.innerHTML += "<h1>eres una persona bajita</h1>"
};

// bucles
// for(inicializacdor; condicion; modificador){

// }

for(let year = "2000"; year <= 2023; year++){
    datos.innerHTML += `<h2>Estamos en el año ${year}</h2>`
}

//Arrays
let nombres = ["Rafael","Francisco","pepe"];

let divNombres = document.querySelector("#nombres");
divNombres.innerHTML = nombres[2];