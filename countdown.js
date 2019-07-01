const countDownElement = document.getElementById("countdown")

var i = 1562450400000
function updateCountdown() {
    var currentTime = new Date().getTime()
    countDownElement.textContent=i-currentTime
}

updateCountdown()
setInterval(updateCountdown, 10)
