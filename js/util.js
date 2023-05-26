const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]

const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
]

const getWeekOfMonth = (date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    const dayOfWeek = firstDayOfMonth.getDay()
    const dayOfMonth = date.getDate()
    const offset = (dayOfWeek < 5) ? 1 : 0
    return Math.floor((dayOfMonth + dayOfWeek - 1) / 7) + offset
}

// преобразование даты в человекочитаемый вид
const getDayInfo = (date) => {
    const day = days[date.getDay()]
    const week = getWeekOfMonth(date)
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${day}, ${week} неделя ${month} ${year} года`
}