import Tooltip from "./modules/tooltip.js";  
import Modal from "./modules/modal.js";
import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/animacao-scroll.js";
import TabNav from "./modules/tabNav.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./bitcoin.js";
import Accordion from "./modules/accordion.js";
import Dropdown from "./modules/dropdown.js";
import Menu from "./modules/menu.js";
import AnimaNumeros from "./modules/numeros.js";
import {SlideNav} from './modules/slide.js';

// Ordem de execução em cascata, se necessário










const dropdown = new Dropdown("[data-dropdown]")
dropdown.init()

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()


const scrollSuave = new ScrollSuave('a[href^="#"]'); //Primeira opção são os links da onde vou clicar
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]'); // Certifique-se de passar o seletor correto
tooltip.init();

const menuMobile = new Menu('[data-menu="button"]','[data-menu="lista"]')
menuMobile.init()

const funcionamento = new Funcionamento("[data-semana]",'aberto')
funcionamento.init()

const slide = new SlideNav('.slide', '.wrapper');
slide.init()
slide.addControl('.custom-controls')
/* slide.addArrow('.prev', '.next') */

fetchAnimais('./js/animais-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker','.btc-preco');


if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    document.body.classList.add("preloader");
  
    window.addEventListener("load", () => {
      setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("preloader");
      }, 3500);
    });
  }
  