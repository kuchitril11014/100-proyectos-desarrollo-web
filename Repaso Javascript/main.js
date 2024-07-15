//Alertas
alert("soy rafael soto");

//Variables
let nombre = 'rafael'
nombre = 'victor'

//constantes
const altura = 187;
const apellido = 'Robles';
// altura = 182;

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

//condiciones 

