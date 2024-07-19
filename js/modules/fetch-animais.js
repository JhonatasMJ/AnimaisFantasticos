import initAnimaNumeros from "./numeros.js";

export default function initFetch() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        //Pegando cada animal
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal); //Coloca um depois do outro
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div"); //Criando uma div
    div.classList.add("numero-animal"); //Dando uma classe
    div.innerHTML = `<h3>${animal.especie}</h3> <span class="data-numero"> ${animal.total}</span>`;

    return div;
  }

  fetchAnimais("./js/animais-api.json");
}
