/* el uso más común de un bucle es iterar sobre un array */
const comidas = ["hamburguesa", "pizza", "manzana", "naranja"];
//                    0            1         2          3

for (let numero = comidas.length - 1; numero >= 0; numero--) {
  // 👑
  const comida = comidas[numero];

  console.log(comida);
}

for (const comida of comidas) {
  console.log(comida);
}

comidas.forEach((comida) => {
  console.log(comida);
});

/* const forEach = (array, funcion) => {
    for (let i = 0; i < array.length; i++) {
        funcion(array[i])
        
    }
} */
