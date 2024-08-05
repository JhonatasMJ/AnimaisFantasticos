export default class TabNav {
  constructor (menu,content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);

    this.classeAtiva = 'ativo'
  
  }
//Ativa a tab de acordo com  o index da mesma
  activeTab(index) {
      this.tabContent.forEach((section) => {
        //Remove a classe ativo após ela estar ativa em outro lugar, ela ficará ativa somente em uma section por vez
        section.classList.remove(this.classeAtiva);
      });
      const direcao = this.tabContent[index].dataset.anime;
      this.tabContent[index].classList.add(this.classeAtiva,direcao);
    }

    //Adiciona os eventos nas tabs
    addTabNavEvent() {
      this.tabMenu.forEach((itemMenu, index) => {

        //O index é o numero das imagens 0,1,2
        itemMenu.addEventListener("click", () => {
          this.activeTab(index);
        });
      });
    }
    
    init ()  {
      if (this.tabMenu.length && this.tabContent.length) {
        //Ativar primeiro item
        this.activeTab(0)
        this.addTabNavEvent()
       }
      }
    }








