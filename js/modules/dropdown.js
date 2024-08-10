import cliqueFora from "./cliqueFora.js";

export default class Dropdown {
  constructor(dropdownMenus,eventos) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if(eventos === undefined) { //Se não for definido irá seguir o padrão setado
      this.eventos = ['touchstart', 'click'];
    } else {
      this.eventos = eventos
    }
    
    this.classeAtiva = 'ativo';  this.ativarDropdown = this.ativarDropdown.bind(this)

  }

  //Ativa o Dropdown e adiciona a função que observa o clique fora dele
  ativarDropdown(event) {
    event.preventDefault(); //Não abrir o index
    const element = event.currentTarget
    element.classList.add(this.classeAtiva);
    cliqueFora(element, this.eventos, () => {
      //Se clicar ou fazer o evento de touch para fora, remover a classe ativo
    element.classList.remove(this.classeAtiva);
    });
  }
//Adiciona os eventos ao dropdown menu
  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventos.forEach((userEvent) => {
        //Array para passar 2 eventos em um unico addEvent
        menu.addEventListener(userEvent, this.ativarDropdown);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
      return this;
    }
  }
}
