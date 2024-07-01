export default function  initTabNav() {
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







