import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initMenu from "./modules/menu.js";
import initfuncionamento from "./modules/funcionamento.js";
import initFetch from "./modules/fetch-animais.js";
import initBitCoin from "./bitcoin.js";

// Ordem de execução em cascata, se necessário



initDropdown();
initTabNav();
initModal();
initAccordion();
initTooltip();
initMenu();
initAnimacaoScroll();
initfuncionamento();
initFetch();
initBitCoin();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]') //Primeira opção são os links da onde vou clicar
scrollSuave.init()
