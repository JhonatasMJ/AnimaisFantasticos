export default class Slide {
    constructor(slide, wrapper) { 
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
        this.dist = { // Distância
            finalPosition: 0,
            startX: 0,
            movement: 0,
        }
        this.activeClass = 'ativo'
        this.changeEvent = new Event ('changeEvent')
    }

    transition(active) {
        this.slide.style.transition = active ? 'transform .3s' : '';
    }

    moveSlide(distX) {
        this.dist.movePosition = distX;
        this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    }

    // Atualiza a posição do Slide
    updatePosition(clientX) {
        this.dist.movement = (this.dist.startX - clientX) * 1.6; // Velocidade do slide
        return this.dist.finalPosition - this.dist.movement;
    }

    onStart(event) {
        let movetype;
        if (event.type === 'mousedown') {
            event.preventDefault();
            this.dist.startX = event.clientX;
            movetype = 'mousemove';
        } else {
            this.dist.startX = event.changedTouches[0].clientX;
            movetype = 'touchmove';
        }
        this.wrapper.addEventListener(movetype, this.onMove);
        this.transition(false)
    }

    onMove(event) {
        const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = this.updatePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }

    onEnd(event) {
        this.wrapper.removeEventListener('mousemove', this.onMove);
        this.wrapper.removeEventListener('touchmove', this.onMove);
        this.dist.finalPosition = this.dist.movePosition; // Assim que tirar o mouse de cima, salva a posição final do slide
        this.transition(true)
        this.changeSlideOnEnd()
    }


    changeSlideOnEnd() { //Troca de slide assim que o slide ficar no meio sem dar a troca completa
        if (this.dist.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide()
        } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide()
        } else {
            this.changeSlide(this.index.active);
        }
    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('touchstart', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd); // Quando o mouse for solto
        this.wrapper.addEventListener('touchend', this.onEnd);
    }



    //Slides Config

    slidePosition(slide) {
        const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
        return -(slide.offsetLeft - margin);
    }
    

    slideConfig() {
        this.slideArray = [...this.slide.children].map((element) =>{
            const position = this.slidePosition(element)
            return { 
                position,
                element,
            }
        });
    }

    slidesIndexNav(index) {
        const last = this.slideArray.length - 1
        this.index = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index === last ? undefined: index + 1,
        }
    }

    changeSlide(index) {
        const activeSlide = this.slideArray[index];
        this.moveSlide(activeSlide.position);
        this.slidesIndexNav(index);
        this.dist.finalPosition = activeSlide.position
        this.changeActiveClass();
        this.wrapper.dispatchEvent(this.changeEvent);
    }

    changeActiveClass() {
        this.slideArray.forEach(item => item.element.classList.remove(this.activeClass)) //Só adiciona no que estiver ativo no momento
        this.slideArray[this.index.active].element.classList.add(this.activeClass);
    }

    activePrevSlide() {
   
        if (this.index.prev !== undefined) {
            this.changeSlide(this.index.prev)
        }
    }

    activeNextSlide() {
        if (this.index.next !== undefined) {
            this.changeSlide(this.index.next)
        }
    }


    onResize() {
        setTimeout(() =>{
            this.slideConfig();
            this.changeSlide(this.index.active);
        }, 1000)
    }


    addResizeEvent() {
        window.addEventListener('resize', this.onResize)
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onMove = this.onMove.bind(this);
        this.activePrevSlide = this.activePrevSlide.bind(this)
        this.activeNextSlide = this.activeNextSlide.bind(this)
        this.onResize = this.onResize.bind(this)

    }

    init() {
        this.bindEvents();
        this.addSlideEvents();
        this.transition(true);
        this.slideConfig(); // Configura os slides antes de qualquer mudança
        this.changeSlide(0); // Inicia com o primeiro slide
        this.addResizeEvent()
        return this;
    }
    
}


export class SlideNav extends Slide {
    constructor (slide,wrapper) {
        super(slide,wrapper); //Puxa tudo o que tem na outra classe
        this.bindControlEvents()
        
    }

    addArrow(prev, next) { //Definindo botoes para passar slides
        this.prevElement = document.querySelector(prev)
        this.nextElement = document.querySelector(next)
        this.addArrowEvent()
    }
    addArrowEvent() { 
        this.prevElement.addEventListener('click', this.activePrevSlide); //Botao de voltar
        this.nextElement.addEventListener('click', this.activeNextSlide); //Botao de  prox
    }
    
    createControl() {
        const control = document.createElement('ul') //Cria uma ul com LI'S dentro
        control.dataset.control = 'slide'
        this.slideArray.forEach((item,index) =>{
            control.innerHTML +=  `<li><a href=#slide${index + 1}"> ${index + 1} </a> </li>`
        })
        this.wrapper.appendChild(control)
        return control
    }

    eventControl(item, index) { //Cria o evento que ao clicar vai pegar o index da função ja existente 
        item.addEventListener('click', (event) => {
            event.preventDefault();
            this.changeSlide(index);

    });
        this.wrapper.addEventListener('changeEvent', this.activeControlItem)
    }

    activeControlItem() {
        this.controlArray.forEach(item => item.classList.remove(this.activeClass))
        this.controlArray[this.index.active].classList.add(this.activeClass) //Deixa ativo
    }


    addControl(customControl) {
        this.control = document.querySelector(customControl) || this.createControl();
        this.controlArray =  [...this.control.children]; 
        this.activeControlItem()
        this.controlArray.forEach(this.eventControl)
    }
    bindControlEvents() {
        this.eventControl = this.eventControl.bind(this)
        this.activeControlItem = this.activeControlItem.bind(this)
    }
}