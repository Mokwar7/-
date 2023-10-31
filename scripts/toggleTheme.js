const toggle = document.querySelector('.header__toggle')
const toggleDark = document.querySelector('.header__toggle-dark')
const toggleLight = document.querySelector('.header__toggle-light')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const body = document.querySelector('body')
const card = document.querySelectorAll('.team__card')
const rev = document.querySelectorAll('.rev__rev')
const logoBottom = document.querySelector('.contacts__logo')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('header__toggle_active')
    toggleDark.classList.toggle('header__toggle-dark_active')
    toggleLight.classList.toggle('header__toggle-light_active')
    header.classList.toggle('header_dark')
    body.classList.toggle('body_dark')
    card.forEach((item) => {
        item.classList.toggle('team__card_dark')
    })
    rev.forEach((item) => {
        item.classList.toggle('rev__rev_dark')
    })
    logoBottom.src = "./src/logo dark.svg"
})