//Export default é pra quando só tem uma coisa que queremos exportar
export default function scrollSuave()  {   
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
  

  