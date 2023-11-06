const popup = document.querySelector('.popup')
const popupImage = document.querySelector('.popup__image')
popup.addEventListener('click', () => {
    popup.classList.remove('popup_opened')
})

const images = document.querySelectorAll('.avto__img')

images.forEach((image) => {
    image.addEventListener('click', () => {
        popup.classList.add('popup_opened')
        popupImage.src = image.src
    })
})
