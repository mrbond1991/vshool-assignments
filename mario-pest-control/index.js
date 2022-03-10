const badForm = document.baddiesForm


badForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let totalGoomba = badForm.goombaCaught.value * 5
    badForm.goombaCaught.value = ""
    let totalBomb = badForm.bomOmbCaught.value * 7
    badForm.bomOmbCaught.value = ""
    let totalCheep = badForm.cheepCheepCaught.value * 11
    badForm.cheepCheepCaught.value = ""
    let totalDue = totalGoomba + totalBomb + totalCheep
    let totalCoins = document.createElement("h1")
    totalCoins.textContent = "Total Amount Due: " + totalDue + " Coins"
    badForm.appendChild(totalCoins)

})