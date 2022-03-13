let clicks = 0
let button = document.getElementById("clickBttn")
let clickDiv = document.getElementById("clicker")
let clickAmount = document.getElementById("countAmount")
let countDown = document.getElementById("countDown")

button.addEventListener("click", (event) => {
    event.preventDefault()

    clicks++
    clickAmount.innerHTML = clicks
    localStorage.setItem("clicks", clicks)

    // let countDownStart = 15
    // let x = setInterval(function () {
    //     var countDownEnd = 0
    //     var distance = countDownStart - countDownEnd

    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    //     countDown.innerHTML = seconds + " seconds!"
    // }, 15000)
    
})

var count = localStorage.getItem("clicks")

window.onload = function () {
    clickAmount.innerHTML = count
}
