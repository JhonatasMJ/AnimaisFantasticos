import AnimaNumeros from "./numeros.js";

export default function fetchAnimais(url, target) {

  // Cria a div contendo informações
  // Com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div"); // Criando uma div
    div.classList.add("numero-animal"); // Dando uma classe
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal); // Coloca um depois do outro
  }

  // Anima os números de cada animal
  function animaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", target, "ativo");
    animaNumeros.init();
  }

  // Puxa o total de animais com um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais(url) {
    try {
      // Fetch espera resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em json
      const animaisJson = await animaisResponse.json();

      // Preenche cada animal no DOM
      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
      });

      // Após preencher, anima os números
      animaNumeros();

    } catch (erro) {
      console.error(Error(erro));
    }
  }

  // Chama a função criarAnimais
  criarAnimais(url);
}
