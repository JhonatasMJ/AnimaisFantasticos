import scrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";

// Ordem de execução em cascata, se necessário
initTabNav();
initModal();
initAccordion();
scrollSuave();
initTooltip();
initAnimacaoScroll();
initDropdown();
