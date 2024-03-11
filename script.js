const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const finalDate = new Date().setDate(new Date().getDate() + 8)

let startDays = ((new Date(finalDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)).toFixed(0)
let startHours = 24 - new Date().getHours()
let startMinutes = 60 - new Date().getMinutes()
let startSeconds = 60 - new Date().getSeconds()

const addZero = (number) => {
    if (number >= 0 && number < 10) {
        return `0${number}`
    } else {
        return number
    }
}

setInterval(() => {
    days.innerHTML = addZero(startDays)
    hours.innerHTML = addZero(startHours)
    minutes.innerHTML = addZero(startMinutes)
    seconds.innerHTML = addZero(startSeconds - 1)
    startSeconds = startSeconds - 1
    if (startSeconds < 0) {
        startSeconds = 59
        seconds.innerHTML = addZero(startSeconds)
        minutes.innerHTML = addZero(startMinutes - 1)
        startMinutes = startMinutes - 1
    }
    if (startMinutes < 0) {
        startSeconds = 59
        startMinutes = 59
        seconds.innerHTML = addZero(startSeconds)
        minutes.innerHTML = addZero(startMinutes)
        hours.innerHTML = addZero(startHours - 1)
        startHours = startHours - 1
    }
    if (startHours < 0) {
        startSeconds = 59
        startMinutes = 59
        startHours = 24
        seconds.innerHTML = addZero(startSeconds)
        minutes.innerHTML = addZero(startMinutes)
        hours.innerHTML = addZero(startHours)
        days.innerHTML = addZero(startDays - 1)
        startDays = startDays - 1
    }
}, 1000)