export default function cliqueFora(element, events, callBack) {
  const html = document.documentElement; //Selecionando meu html
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    //Se não tem o atributo ativar ele, caso já tenha nao ira ativar novamente
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, ""); //Define o atributo com valor vazio
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //Se o target não estiver na proria li, ele executa o callback que remove o dropdown
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); //Remove o evento de clique
      });

      callBack();
    }
  }
}
