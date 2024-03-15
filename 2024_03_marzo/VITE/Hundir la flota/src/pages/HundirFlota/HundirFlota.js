/* destruye los barcos */
import "./HundirFlota.css";
import { pintarTablero } from "../../functions/hundirFlota/pintarTablero";

export let TABLERO = [
  [null, "3", "3", "3", null, null], //! 0
  //!  0      1        2        3      4     5
  [null, "5", null, null, null, null], //! 1
  ["2", "5", null, "4", null, null], //! 2
  ["2", "5", null, "4", null, null], //! 3
  [null, "5", null, "4", null, "1"], //! 4
  [null, "5", null, "4", null, null], //! 5
];

export const setTablero = (newValue) => {
    TABLERO = newValue;
}

export const tableroHTML = document.createElement("div");
tableroHTML.classList.add("tablero");
document.body.append(tableroHTML);

export let OPORTUNIDADES = 5;

export const setOportunidades = (value) => {
    OPORTUNIDADES = value;
}

export const oportunidadesHTML = document.createElement("h2");
oportunidadesHTML.classList.add("oportunidades");
oportunidadesHTML.textContent = `Intentos: ${OPORTUNIDADES}`;
document.body.append(oportunidadesHTML);

pintarTablero(TABLERO);