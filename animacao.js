function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add("ativo"); //Ja vai entrar no site com ele ativo
  
    //  IF = Verificar se existe elemento em tabContent e tabMenu
    if (tabMenu.length && tabContent.length) {
      function activeTab(index) {
        tabContent.forEach((section) => {
          //Remove a classe ativo após ela estar ativa em outro lugar, ela ficará ativa somente em uma section por vez
          section.classList.remove("ativo");
        });
        const direcao = tabContent[index].dataset.anime;
        tabContent[index].classList.add("ativo",direcao);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        //O index é o numero das imagens 0,1,2
        itemMenu.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }
  
  //Accordion
  function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if (accordionList.length) {
      accordionList[0].classList.add("ativo");
      accordionList[0].nextElementSibling.classList.add("ativo");
  
      function activeAccordion(event) {
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");
      }
  
      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }
  
  function scrollSuave() {
    const linksInternos = document.querySelectorAll(' [data-menu="suave"] a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault(); //Tira o padrão dos links que é levar para a seção
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href); //Pegando a seção conforme clico no link, com o codigo de cima
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  
      //FORMA ALTERNATIVA
      /*   const topoSecao = section.offsetTop; //Pega o topo da seção */
      /*   window.scrollTo({
      top: topoSecao,
      behavior: "smooth",
    });
  } */
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  
  function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]'); //Pegar a seçao que deseja animar
  
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.2; //Fazer um calculo a partir do tamanho da tela para começar a animação
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTopo = section.getBoundingClientRect().top - windowMetade; //Pegar o tamanho do topo de seção e subtrair com o calculo acima
          const sectionVisivel = sectionTopo - windowMetade < 0; //Se o topo da seção for menor que zero, começa a animação
          if (sectionVisivel) {
            section.classList.add("ativo");
          } else {
            section.classList.remove("ativo"); //Caso scrolle para cima a animação ocorrera novamente
          }
        });
      }
  
      window.addEventListener("scroll", animaScroll);
    }
    animaScroll(); //Iniciar o site com a animação
  }
  
  
  
  
  initAnimacaoScroll()
  initTabNav();
  initAccordion();
  scrollSuave();
  