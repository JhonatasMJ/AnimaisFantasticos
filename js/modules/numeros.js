export default function initAnimaNumeros() {
  function animarNumeros() {
    //Selecionando números
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText; //Pegando o número no html o + transforma string em numero
      const incremento = Math.floor(total / 100); // Os números vão crescer e parar juntos

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total; //Não deixar passar do total
          clearInterval(timer); //Se o numero for maior que o total ele para
        }
      }, 25);
    });
  }

  //Fazer a animação apenas depois que chegar na seção

  function handleMutation(mutation) {
    observer.disconnect();
    if (mutation[0].target.classList.contains("ativo")) {
      animarNumeros(); //Hora que o target for ativo, inicia a animação
    }
  }

  const targetObserver = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(targetObserver, { attributes: true }); //Passar aonde ele quer observar/ ele ira observar os atributos
}
