const menu = document.querySelector('section#container header .menu-section .toggle')
const nav = document.querySelector('section#container header nav')

menu.addEventListener('click', () => {
    menu.classList.toggle('on')
    nav.classList.toggle('on')
})