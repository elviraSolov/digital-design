const cardTemplate = document.querySelector('#card').content.querySelector('.card')

// создание элемента карточки на основе массива из data.js
const createCard = (data) => {
    const { name, photo, date } = data
    const card = cardTemplate.cloneNode(true)

    card.querySelector('.card__title').textContent = name
    card.querySelector('.card__photo').src = photo
    card.querySelector('.card__photo').alt = name
    card.querySelector('.card__date').textContent = getDayInfo(date)

    const buyBtn = card.querySelector('.card__btn')
    buyBtn.addEventListener('click', () => {
        showModal(photo, name)
    })

    return card
}

// рендеринг карточек на странице 
const renderCards = (cards, category) => {
    const cardsCountainer = document.querySelector(`.cards-container--${category}`)
    const fragment = document.createDocumentFragment()
    cards.forEach((card) => {
        const cardElement = createCard(card)
        fragment.append(cardElement)
    })

    cardsCountainer.append(fragment)
}
