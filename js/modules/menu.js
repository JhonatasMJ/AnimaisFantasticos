import cliqueFora from "./cliqueFora.js";

export default class Menu {
  constructor(buttonMenu,menuList,eventos) {
  this.buttonMenu = document.querySelector(buttonMenu);
  this.menuList = document.querySelector(menuList);

  if(eventos === undefined || null) { //Se não for definido irá seguir o padrão setado
    this.eventos = ['touchstart', 'click'];
  } else {
    this.eventos = eventos
  }
  this.classeAtiva = 'ativo'
  this.abrirMenu = this.abrirMenu.bind(this)


  }


  abrirMenu() {
    this.buttonMenu.classList.add(this.classeAtiva);
    this.menuList.classList.add(this.classeAtiva);
    cliqueFora(this.menuList, this.eventos, () => {
      this.buttonMenu.classList.remove(this.classeAtiva);
      this.menuList.classList.remove(this.classeAtiva);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => {
      this.buttonMenu.addEventListener(evento, this.abrirMenu);
    });
  }

  init() {
    if(this.buttonMenu && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}



