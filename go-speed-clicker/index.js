let clicks = 0
let button = document.getElementById("clickBttn")
let clickDiv = document.getElementById("clicker")

button.addEventListener("click", (event) => {
    event.preventDefault()

    clicks++;
    let countH2 = document.createElement("h2");
    countH2.innerHTML = clicks
    clickDiv.appendChild(countH2)
})