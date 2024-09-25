let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

console.log(menu)

menu.onclick= () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY)
})

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-ing',{delay:400, origin:'top'})
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea',{delay:200, origin:'top'})

