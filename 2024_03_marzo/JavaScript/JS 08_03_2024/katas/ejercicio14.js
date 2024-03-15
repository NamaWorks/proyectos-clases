//! COSAS QUE SABEMOS

//? BUCLES
//? TIPOS DE DATOS
//? FUNCIONES BÁSICAS
//? CONDICIONALES

//* CONTADOR DE REPETICIONES: Crea una función que nos devuelva // el número de veces que se repite cada una de las palabras que lo conforma

// numbers
// strings
// object
// array
// boolean

/* 
    {
        code: 3,
        repeat: 1,
        eat: 3,
        sleep: 2
    }
    "code: 3, repeat: 1, eat: 3, sleep: 2"
    ["code: 3", "repeat"]
*/

const counterWords = [
  "code", // 0
  "repeat", // 1
  "eat", // 2
  "sleep", // 3
  "code", // 4
  "enjoy", // 5
  "sleep", // 6
  "code", // 7
  "enjoy", // 8
  "upgrade", // 9
  "code", // 10
]; // se puede iterar / recorrer el array

// console.log(counterWords[1]); // repeat

function repeatCounter(list) {
  const repeated = {};

  for (const word of list) {
    if (repeated[word]) {
      // undefined // 1 // 2 // 3 // 4
      repeated[word]++;
    } else {
      repeated[word] = 1;
    }
  }
  return repeated;
}

console.log(repeatCounter(counterWords));

// push es un método de arrays que sirve para introducir elementos al final del array
