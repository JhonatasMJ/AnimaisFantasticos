export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.btnAbrir = document.querySelector(botaoAbrir);
    this.btnFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalFora = this.modalFora.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault(); // Para que o link não tente fazer nada
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  modalFora(event) {
    if (event.target === this.containerModal) {
      // Se o target do evento for igual ao container modal, fechar modal
      this.toggleModal();
    }
  }

  // Adiciona os eventos ao modal
  addModalEvent() {
    this.btnAbrir.addEventListener("click", this.eventToggleModal);
    this.btnFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.modalFora);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
