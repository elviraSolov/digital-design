const themeSlider = document.querySelector('.theme__input')
const theme = document.querySelector('.theme')

theme.setAttribute('data-theme', 'light')
theme.style.transition = '0.45s'

const clickThemeSlider = () => {
    if (themeSlider.checked) {
        theme.setAttribute('data-theme', 'dark')
    } else {
        theme.setAttribute('data-theme', 'light')
    }
}

themeSlider.addEventListener('change', clickThemeSlider)
