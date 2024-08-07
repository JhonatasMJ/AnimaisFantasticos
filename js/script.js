import Tooltip from "./modules/tooltip.js";  
import Modal from "./modules/modal.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import TabNav from "./modules/tabNav.js";
import initDropdown from "./modules/dropdown.js";
import initMenu from "./modules/menu.js";
import initfuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initBitCoin from "./bitcoin.js";
import Accordion from "./modules/accordion.js";

// Ordem de execução em cascata, se necessário
initDropdown();
initfuncionamento();
initMenu();
initAnimacaoScroll();
initBitCoin();
fetchAnimais('./js/animais-api.json', '.numeros-grid');

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
