export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]'); //Pegar a seçao que deseja animar

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.3; //Fazer um calculo a partir do tamanho da tela para começar a animação

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top - windowMetade; //Pegar o tamanho do topo de seção e subtrair com o calculo acima
        const sectionVisivel = sectionTopo - windowMetade < 160; //Se o topo da seção for menor que zero, começa a animação
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
