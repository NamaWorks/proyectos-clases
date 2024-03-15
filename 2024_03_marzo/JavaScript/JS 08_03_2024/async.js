// javascript es un lenguaje de programación MONOHILO
//? Monohilo es que sólo puede hacer una tarea al mismo tiempo.

//? SÍNCRONO -> tarda un tiempo determinado y controlado

//? ASÍNCRONO -> tarda un tiempo INDETERMINADO y que no podemos controlar cuanto va a tardar

const printCharacters = (characters) => {
    for (const character of characters) {
        document.body.innerHTML += `
            <img src="${character.image}"/>
        `
    }
}
/* 
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => printCharacters(res.results)); */

const getCharacters = async () => {
  const resultado = await fetch("https://rickandmortyapi.com/api/character");
  const res = await resultado.json();
  console.log(res.results);
  printCharacters(res.results)
};

getCharacters();

/* console.log(resultado); */
