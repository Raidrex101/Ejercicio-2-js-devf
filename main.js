
//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
let arregloAleatorio = []

let  arreglo= Array.from({length: 10}, () => Math.floor(Math.random() * 10));    
arreglo.forEach(function(numero){      
arregloAleatorio.push(numero)
});

console.log(arregloAleatorio)

//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array,
// (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
let numeros = /* prompt */("Ingrese 1,2,3,4,5 en el cuadro de texto inclullendo las comas")

let combercion = numeros.split(",")

const stringANumber = combercion.map(Number)

console.log(stringANumber)

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.
// Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const desorden = [10,40,30,20,15,5].sort((a, b) => a - b)

console.log(desorden)

let menor= Math.min(...desorden)
let mayor = Math.max(...desorden)

console.log("el numero menor es: " + menor)
console.log("el numero mayor es: "+ mayor)
console.log(typeof desorden)