function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo"); //Ja vai entrar no site com ele ativo

  //  IF = Verificar se existe elemento em tabContent e tabMenu
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        //Remove a classe ativo após ela estar ativa em outro lugar, ela ficará ativa somente em uma section por vez
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
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
  const accordionList = document.querySelectorAll(".js-accordion dt");
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

initTabNav();
initAccordion();

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
