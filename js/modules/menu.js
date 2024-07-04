import cliqueFora from "./cliqueFora.js";

export default function initMenu() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ["click"];

  function abrirMenu(event) {
    buttonMenu.classList.add("ativo");
    menuList.classList.add("ativo");
    cliqueFora(menuList, eventos, () => {
      buttonMenu.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });
  }
  eventos.forEach((evento) => {
    buttonMenu.addEventListener(evento, abrirMenu);
  });
}
