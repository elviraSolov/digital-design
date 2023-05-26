const scrollBtn = document.querySelector('.scroll-btn')
let scrolling = false

const showBtn = () => {
  if (scrollBtn.classList.contains('scroll-btn--hide') && !scrollBtn.classList.contains('scroll-btn--hiding')) {
    scrollBtn.classList.remove('scroll-btn--hide')
    scrollBtn.classList.add('scroll-btn--hiding')
    window.setTimeout(() => {
      scrollBtn.classList.remove('scroll-btn--hiding')
    }, 300)
  }
}

const hideBtn = () => {
  if (!scrollBtn.classList.contains('scroll-btn--hide') && !scrollBtn.classList.contains('scroll-btn--hiding')) {
    scrollBtn.classList.add('scroll-btn--hiding')
    window.setTimeout(() => {
      scrollBtn.classList.add('scroll-btn--hide')
      scrollBtn.classList.remove('scroll-btn--hiding')
    }, 300)
  }
}

const onScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  if (scrolling && scrollY > 0) {
    return
  }
  scrolling = false
  if (scrollY > 400) {
    showBtn()
  } else {
    hideBtn()
  }
}

const addListeners = () => {
  window.addEventListener('scroll', () => {
    onScroll()
  })

  scrollBtn.addEventListener('click', () => {
    scrolling = true
    hideBtn()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}

addListeners()