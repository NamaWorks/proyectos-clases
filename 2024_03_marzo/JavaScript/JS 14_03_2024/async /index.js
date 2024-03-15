const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Esto es resultado")
    }, 5000);
});

console.log(promesa);

promesa.then((respuesta) => console.log(respuesta));

/* .then y async/await */