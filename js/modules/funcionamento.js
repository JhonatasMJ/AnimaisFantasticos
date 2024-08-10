export default class Funcionamento {
  constructor (funcionamento,ativo) {
    this.funcionamento = document.querySelector(funcionamento);
    this.ativo = ativo

  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number); //Transformando em array e em string
    this.horaSemana = this.funcionamento.dataset.horario.split(",").map;
  }


  dadosAgora() {
   this.dataAgora = new Date();
   this.diaAgora = this.dataAgora.getDay();
   this.horarioAgora = this.dataAgora.getUTCHours() - 3; //Horario do BRASIL

  }


  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1; //Verifica se o dia de hoje é um dos dias que está aberto na semana
  
    const horarioAberto =
      this.horarioAgora >= this.horaSemana[0] && this.horarioAgora < this.horaSemana[1]; //Verifica se o horario de abertura e fechamento

      return  semanaAberto && horarioAberto;
  }


  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.ativo); //Se ambos estiverem aberto, adiciona a classe aberto
    }
  }
  
    init () {
      if(this.funcionamento) {
        this.dadosFuncionamento()
        this.dadosAgora()
        this.ativaAberto();
  
      }
      return this
    }
  }  

