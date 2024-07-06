export default function initfuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number); //Transformando em array e em string
  const horaSemana = funcionamento.dataset.horario.split(",").map;

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; //Verifica se o dia de hoje é um dos dias que está aberto na semana

  const horarioAberto =
    horarioAgora >= horaSemana[0] && horarioAgora < horaSemana[1]; //Verifica se o horario de abertura e fechamento

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto"); //Se ambos estiverem aberto, adiciona a classe aberto
  }
}
