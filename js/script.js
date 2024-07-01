import scrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";

//Deixar na ordem Correta sentido cascata para funcionar
initTabNav();
initModal();
initAccordion();
scrollSuave();
initAnimacaoScroll();
