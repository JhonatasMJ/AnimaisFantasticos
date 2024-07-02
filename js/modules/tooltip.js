export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", MostrarTooltip);
  });

  function MostrarTooltip(event) {
    const tooltipBox = criarToolTipBox(this); //Faz referencia ao item acima
    seguirMouse.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", seguirMouse);
    ocultarTooltip.tooltipBox = tooltipBox; //Chama o objeto criado
    ocultarTooltip.element = this; //Dando o valor de this para o element
    this.addEventListener("mouseleave", ocultarTooltip);
  }

  const ocultarTooltip = {
    //Criar um objeto para esconder os outros tooltips
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", ocultarTooltip); //Ocultando evento
      this.element.removeEventListener("mousemove", seguirMouse);
    },
  };

  const seguirMouse = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px"; //Pega a referencia da onde o mouse está em relação ao tooltip
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarToolTipBox(element) {
    const tooltipBox = document.createElement("div"); //Criar o tooltip
    const texto = element.getAttribute("aria-label"); //Criar o texto baseado no aria-label
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox); //Adiciona no final do documento
    return tooltipBox;
  }
}
