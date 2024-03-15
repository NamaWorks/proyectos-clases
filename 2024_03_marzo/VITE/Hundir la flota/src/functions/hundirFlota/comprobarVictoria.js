import { reiniciar } from "./reiniciar";

export const comprobarVictoria = (array) => {
  let victoria = true;
  for (const fila of array) {
    for (const columna of fila) {
      if (columna && !columna.includes("tocado")) {
        victoria = false;
      }
    }
  }

  if (victoria) {
    setTimeout(() => {
      alert("Has Ganado! Enhorabuena!!!!");
      reiniciar();
    }, 100);
  }
};
