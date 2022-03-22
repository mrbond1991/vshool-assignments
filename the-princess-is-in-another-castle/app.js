

class Player {
    constructor(name) {
        this.name = name
        this.totalCoins = 0
        this.status = "Big"
        this.hasStar = false
    }
    
    setName(pickedName) {
        if(pickedName === "Mario") {
            return this.name = "Mario"
        } else if (pickedName === "Luigi") {
            return this.name = "Luigi"
        }
    }

    gotHit() {
        if(this.hasStar === true) {
            user.useStar()
            // console.log("Your Star protected you!")
            // this.hasStar = false
        } else if(this.status === "Powered Up") {
            this.status = "Big"
        } else if(this.status === "Big") {
            this.status = "Small"
        } else if(this.status === "Small") {
            this.status = "Dead"
        }
    }

    gotPowerup() {
        if(this.status === "Small") {
            this.status = "Big"
            // return user.print()
        } else if(this.status === "Big") {
            this.status = "Powered Up"
            // return user.print()
        } else if(this.status === "Powered Up") {
            if(this.hasStar === true) {
                console.log("You already have a star!")
            } else {
                console.log("Congratulations! You got a Star!")
                this.hasStar = true
            }
        }
    }

    useStar() {
        console.log("Your Star protected you!")
        this.hasStar = false
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`)
    }
    
}

const user = new Player("Mario")

const game = (user) => {
    let randomNum = Math.floor(Math.random() * 3)
    if(user.status === "Dead") {
        console.log(`GAME OVER ${user.name}! You finished the game with ${user.totalCoins} coins! Did you beat your friends?`)
        clearInterval(gameStart)
    } else if(randomNum === 0) {
        user.gotHit()
        user.print()
    } else if(randomNum === 1) {
        user.gotPowerup()
        user.print()
    } else if(randomNum === 2) {
        user.addCoin()
        user.print()
    }
}

const gameStart = setInterval(() => game(user), 1500);