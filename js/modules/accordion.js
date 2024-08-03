export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.classeAtiva = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtiva); //Passa a classe ativa
    item.nextElementSibling.classList.toggle(this.classeAtiva); //Passa no proximo elemento tambem
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]); // Deixa a primeira pergunta aberta
      this.addAccordionEvent();
    }
  }
}
