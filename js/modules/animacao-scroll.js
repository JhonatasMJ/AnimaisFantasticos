export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections); // Pega a seção que deseja animar
    this.windowMetade = window.innerHeight * 0.3; // Cálculo para começar a animação
    this.checarDistancia = this.checarDistancia.bind(this); // Bind do método animaScroll
  }

  //Pega a distância de cada item em relação ao topo do site
  pegarDistancia() {
      this.distancia =  [...this.sections].map(section =>{ //Transformo em Array  e passa um map 
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //Verifica a distância em cada objeto em relação ao scroll do site
  checarDistancia () {
    this.distancia.forEach((section) =>{
      if(window.scrollY > section.offset) {
        section.element.classList.add("ativo");
      } else if (section.element.classList.contains("ativo")) {
        section.element.classList.remove("ativo"); // Caso scrolle para cima a animação ocorrerá novamente
      }
      })
    }
    
      init() {
        if(this.sections.length) {
          this.pegarDistancia()
          this.checarDistancia()
          window.addEventListener('scroll', this.checarDistancia);
        }
        return this
      }

      //Remove o evento de scroll
      stop() {
        window.removeEventListener('scroll', this.checarDistancia);
      }
  }



