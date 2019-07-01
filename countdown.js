// Tu pensais pas que ce serait si facile non?
const countDownElement = document.getElementById("countdown")

var i = parseInt(atob("MTU2MjM2NDAwMDAwMA=="))

function updateCountdown() {
    var currentTime = new Date().getTime()
    countDownElement.textContent=i-currentTime
}

updateCountdown()
setInterval(updateCountdown, 10)
