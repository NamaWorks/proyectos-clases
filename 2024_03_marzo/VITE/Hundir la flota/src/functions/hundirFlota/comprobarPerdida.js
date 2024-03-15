import { OPORTUNIDADES } from "../../pages/HundirFlota/HundirFlota";
import { reiniciar } from "./reiniciar";

export const comprobarPerdida = () => {
  if (OPORTUNIDADES === 0) {
    setTimeout(() => {
      alert("Has perdido el juego");
      reiniciar();
    }, 100);
  }
};
