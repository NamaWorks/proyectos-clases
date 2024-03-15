import { tableroHTML } from "../../pages/HundirFlota/HundirFlota";
import { seleccionarCasilla } from "./seleccionarCasilla";

export const pintarTablero = (array) => {
  for (let i = 0; i < array.length; i++) {
    const fila = array[i];

    for (let j = 0; j < fila.length; j++) {
      const dato = fila[j];

      const div = document.createElement("div");

      div.classList.add("casilla");

      const funcionListener = () =>
        seleccionarCasilla(div, dato, array, i, j, funcionListener);

      div.addEventListener("click", funcionListener);

      tableroHTML.append(div);
    }
  }
};