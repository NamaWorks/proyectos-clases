import { Button } from "./button.js";

let numero = 0;

const declararH1 = () => {
    const h1 = document.createElement("h1");
    h1.textContent = numero;
    document.body.append(h1);
};

declararH1();

Button(
  "Hazme click para sumar",
  () => {
    document.querySelector("h1").textContent = ++numero;
  },
  document.body
);

const hacerCosas = () => {
  Button(
    "Hazme click para restar",
    () => {
      document.querySelector("h1").textContent = --numero;
    },
    document.body
  );
};

Button("Saludar", () => alert("Hola como estás"), document.body);

const div = document.createElement("div");

Button("Adios!", () => alert("Adios!"), div);

document.body.append(div);

hacerCosas();