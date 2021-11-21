/*Abrir e fechar menu*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/*Esconder menu ao clicar nos itens*/

const links = document.querySelectorAll('nav ul li a')

for(const item of links){
    item.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* Sombra no menu com scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function MenuShadowScroll(){

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

/* Slider */
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
      },
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* Animação Scroll */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
`,{interval: 100})

/* Botão voltar ao topo */

const buttonBackToTop = document.querySelector(".back-to-top")
function BackToTop(){

    if(window.scrollY>=560){
        buttonBackToTop.classList.add('show')
    } else{
        buttonBackToTop.classList.remove('show')
    }
}

window.addEventListener('scroll',function(){
    BackToTop()
    MenuShadowScroll()
    activateMenuSection()
})

/* ATIVAR BOTÕES MENU */
const sections = document.querySelectorAll('main section[id]')

function activateMenuSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop  = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*='+sectionId+']')
            .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*='+sectionId+']')
            .classList.remove('active')
        }
    }
}