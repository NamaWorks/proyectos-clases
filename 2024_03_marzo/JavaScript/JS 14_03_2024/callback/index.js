/* DECLARACIÓN */
const sumar = (num1, num2) => num1 + num2;


/* EJECUCIÓN O LLAMADA */
console.log(sumar(3, 6));
console.log(sumar(1, 4));

const comidas = ["hamburguesa", "pizza", "manzana", "naranja"];

const filter = (array, funcion) => {

    const arrayFiltrado = [];

    for (const element of array) {
        const resultado = funcion(element);
        if (resultado) {
            arrayFiltrado.push(resultado);
        }
    }

    return arrayFiltrado;

}

console.log(filter(comidas, (comida) => comida.length > 5 ? comida : null));