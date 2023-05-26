// функции для работы с модальным окном
const modal = document.querySelector('.modal')
const alert = document.querySelector('.alert')
const btnClose = modal.querySelector('.btn--close')
const btnBuy = modal.querySelector('.btn--buy')
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

const showModal = (photo, name) => {
    modalTitle.textContent = name
    modalPhoto.src = photo
    modalPhoto.alt = name
    modal.classList.remove('modal--close')
}

const hideModal = () => {
    modal.classList.add('modal--close')
}

const showAlert = () => {
    alert.classList.remove('alert--close')
    setTimeout(hideAlert, 3000) 
}

const hideAlert = () => {
    alert.classList.add('alert--close')
}

const clickBtnBuy = (event) => {
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
btnBuy.addEventListener('click', clickBtnBuy)
