import { comprobarVictoria } from "./comprobarVictoria";

export const hundir = (dato, array) => {
  const casillas = document.querySelectorAll(`.num${dato}`);
  for (const casilla of casillas) {
    casilla.classList.add("hundido");
  }
  comprobarVictoria(array);
};
