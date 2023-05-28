// функции для работы с модальным окном
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__wrapper')
const alert = document.querySelector('.alert')

const btnClose = modal.querySelector('.btn--close')
const btnOpen = modal.querySelector('.btn--buy')

const errorText = modal.querySelector('.form__error')
const countField = modal.querySelector('.form__input--number')
const commentField = modal.querySelector('.form__input--comment')

const modalPhoto = modal.querySelector('.modal__photo')
const modalTitle = modal.querySelector('.modal__product-name')

// валидация формы
const formValidation = () => {
    if (countField.value === '') {
        errorText.classList.remove('form__error--close')
        return false
    } else {
        errorText.classList.add('form__error--close')
        return true
    }
}

const animateIn = () => {
    modalWindow.classList.remove('modal--in')
    modalWindow.removeEventListener('animetionend', animateIn)
}

const animateOut = () => {
    modalWindow.classList.remove('modal--out')
    modal.classList.remove('modal--open')
    modalWindow.removeEventListener('animationend', animateOut)
}

const showModal = (photo, name) => {
    modalTitle.textContent = name
    modalPhoto.src = photo
    modalPhoto.alt = name
    modalWindow.addEventListener('animationend', animateIn)
    modal.classList.add('modal--open')
    body.style.overflow = 'hidden'
    modalWindow.classList.add('modal--in')
}

const hideModal = () => {
    modalWindow.addEventListener('animationend', animateOut)
    modalWindow.classList.add('modal--out')
    body.style.overflow = 'auto'
}

const showAlert = () => {
    alert.classList.remove('alert--close')
    setTimeout(hideAlert, 3000) 
}

const hideAlert = () => {
    alert.classList.add('alert--close')
}

const clickbtnOpen = (event) => {
    event.preventDefault()
    const isValid = formValidation()
    if(isValid) {
        showAlert()
        hideModal()
        countField.value = ''
        commentField.value = ''
    }
}

btnClose.addEventListener('click', hideModal)
btnOpen.addEventListener('click', clickbtnOpen)
