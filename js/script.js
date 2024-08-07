import Tooltip from "./modules/tooltip.js";  
import Modal from "./modules/modal.js";
import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/animacao-scroll.js";
import TabNav from "./modules/tabNav.js";
import Dropdown from "./modules/dropdown.js";
import initMenu from "./modules/menu.js";
import initfuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./bitcoin.js";
import Accordion from "./modules/accordion.js";
import Dropdown from "./modules/dropdown.js";

// Ordem de execução em cascata, se necessário

initfuncionamento();
initMenu();


fetchAnimais('./js/animais-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker','.btc-preco');

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

