import {
  oportunidadesHTML,
  OPORTUNIDADES,
  setOportunidades,
} from "../../pages/HundirFlota/HundirFlota";
import { comprobarHundido } from "./comprobarHundido";
import { comprobarPerdida } from "./comprobarPerdida";

export const seleccionarCasilla = (
  elemento,
  dato,
  array,
  fila,
  columna,
  funcionListener
) => {
  elemento.removeEventListener("click", funcionListener);

  if (dato) {
    const clase = `num${dato}`;
    elemento.classList.add("barco", clase);
    array[fila][columna] += "tocado";
    comprobarHundido(array, dato);
  } else {
    elemento.classList.add("agua");
    setOportunidades(OPORTUNIDADES - 1);
    oportunidadesHTML.textContent = `Intentos: ${OPORTUNIDADES}`;
    comprobarPerdida();
  }
};
