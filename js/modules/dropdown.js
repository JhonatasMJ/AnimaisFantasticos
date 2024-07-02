import cliqueFora from "./cliqueFora.js";

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      //Array para passar 2 eventos em um unico addEvent
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault(); //Não abrir o index
    this.classList.add("ativo");
    cliqueFora(this, ["touchstart", "click"], () => {
      //Se clicar ou fazer o evento de touch para fora, remover a classe ativo
      this.classList.remove("ativo");
    });
  }
}
