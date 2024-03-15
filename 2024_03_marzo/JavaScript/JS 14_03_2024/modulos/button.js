export const Button = (text, funcion = () => {}, parentNode) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = text;
  button.addEventListener("click", funcion);
  parentNode.append(button);
};