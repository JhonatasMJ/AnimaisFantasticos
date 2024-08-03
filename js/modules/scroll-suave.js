//Export default é pra quando só tem uma coisa que queremos exportar
export default class ScrollSuave {
  constructor(links, opcoes) { //Criando um constructor pra poder usar sempre
    this.linksInternos = document.querySelectorAll(links);
    if(opcoes === undefined) {
      this.opcoes = {behavior: "smooth", block: "start"};
    } else {
      this.opcoes = opcoes;
    }
    this.scrollToSection = this.scrollToSection.bind(this) //Bind define o this da função
  }

  scrollToSection(event) {
    event.preventDefault(); //Tira o padrão dos links que é levar para a seção
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href); //Pegando a seção conforme clico no link, com o codigo de cima

    section.scrollIntoView(this.opcoes);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click",this.scrollToSection);
  
    });
  }

  init() {
    if(this.linksInternos.length) {
      this.addLinkEvent();

    }
    return this
  }
}
