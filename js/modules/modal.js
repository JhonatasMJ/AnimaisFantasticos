export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (btnAbrir && btnFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault(); //Para que o link não tente fazer nada
      containerModal.classList.toggle("ativo");
    }

    function modalFora(event) {
      if (event.target === this) {
        //Se o target do evento for = modal.container fechar modal
        toggleModal(event);
      }
    }

    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", modalFora);
  }
}
