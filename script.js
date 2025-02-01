const hourHand = document.querySelector(".clock-hour")
const minHand = document.querySelector(".clock-minutes")
const secHand = document.querySelector(".clock-seconds")
const clock = document.querySelector(".clock")

const hourRotation = 0
const secRotation = 0
const minuteRotation = 0

const updateTime = () => {
    const date = new Date()
    secHand.style.transform = `rotate(${date.getSeconds() * 6}deg)`
    minHand.style.transform = `rotate(${(date.getMinutes() * 6) + (date.getSeconds() * 0.1)}deg)`
    hourHand.style.transform = `rotate(${(date.getHours() % 12 * 30) + (date.getMinutes() * 0.5)}deg)`
}

document.addEventListener("DOMContentLoaded", () => {
    updateTime()
    clock.classList.remove("none")
})

setInterval(updateTime, 1000)
