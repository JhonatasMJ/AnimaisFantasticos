export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros); // Selecionando números
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM, com número em seu texto
  // Incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText; // Pegando o número no HTML; o + transforma string em número
    const incremento = Math.floor(total / 100); // Os números vão crescer e parar juntos
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total; // Não deixar passar do total
        clearInterval(timer); // Se o número for maior que o total ele para
      }
    }, 25 * Math.random());
  }

  // Ativar incrementar número para cada número selecionado do DOM
  animarNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // Fazer a animação apenas depois que chegar na seção
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animarNumeros(); // Quando o target for ativo, inicia a animação
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true }); // Passar onde ele quer observar; ele irá observar os atributos
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver(); // Corrigir para chamar a função
    }
    return this; // Opcional: retornar this para facilitar encadeamento de métodos
  }
}
