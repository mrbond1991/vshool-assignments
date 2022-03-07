const readline = require("readline-sync")
let inventory = [];
let hp = 150
// 1. Greet the player!
console.log("You awake in a overgrown forest. All around you there are sounds of animals, insects, and other sounds that you can't quite place. You realize you still have your sword and sheild close to you, but nothing else. You have no armor, no supplies and no idea where you are. The only thing you can think to do is to push on and hope for the best!")
// 2. Ask for and Store player's name
const name = readline.question("What is thy name adventurer? ")
console.log("Hello " + name + ", welcome to your doom! Muah ah ah ah ah...")
// 3. Walking:
function walk() {
    let willWalk = readline.keyIn(name + ", will you press the w key to walk into the dark and dreary forest? ", {limit: "w"})
    let willFight = Math.floor((Math.random() * 3) + 1)
    if(willFight == 3){
        fight()
    }
}

function fight(){
    let wildEnemy = ["Demigorgon", "Orc", "Dragon Welp", "Animated Corps"]
    let enemy = wildEnemy[Math.floor(Math.random() * wildEnemy.length)]
    console.log("A " + enemy + " has appeared!")
    if(enemy) {
        let fightQuestion = readline.keyIn("What is your choice? Press a for attack and r for run! ", {limit: "a r"})
        console.log()
        if(fightQuestion == "a") {
            attack()
        } else if(fightQuestion == "r") {
            console.log("You run away, like a coward!")
            run()
        }
    }
    
}

function attack() {
    let enemyLife = 100;
    while(enemyLife > 0){
        let playerAttackDamage = Math.floor((Math.random() * 100) + 1)
        enemyLife = enemyLife - playerAttackDamage 
        console.log(name + " attacks for " + playerAttackDamage)
        if(enemyLife <= 0){
        console.log("You have vanquished your foe " + name + "!")
        hp = hp + 50;
        inventory.push("Life Force")
        console.log("You gained 50 hp from the monster's life force and you store the rest in your inventory! Your hp is now: " + hp)
        checkStats()
        break;
        }
        let enemyAttackDamage = Math.floor((Math.random() * 100) + 1)
        hp = hp - enemyAttackDamage
        console.log("You have been hit for " + enemyAttackDamage + " by your enemy!")
        if(hp <= 0){
        console.log("You have been defeated " + name + ", GAME OVER!");
        process.exit()
        }
    }
}

function run() {
    let runChance = Math.floor((Math.random() * 2) + 1)
    if(runChance == 1) {
        let enemyAttackDamage = Math.floor((Math.random() * 100) + 1)
        hp = hp - enemyAttackDamage
        console.log("You have been hit for " + enemyAttackDamage + " by your enemy!")
        if(hp > 0) {
            console.log("Luckily, you escape this time with your life...")
            walk()
        } else if(hp <= 0) {
            console.log("Your cowardice is your downfall. You have been defeated " + name + ", GAME OVER!");
        process.exit()
        }
    } else if(runChance == 2) {
            console.log("You are unable to escape! It is time to stand and fight!")
            attack()
        }
}

function checkStats() {
    console.log("Your Name: " + name)
    console.log("Your HP: " + hp)
    console.log("Your Inventory: " + inventory)
    let useLifeForce = readline.keyIn("Would you like to absorb 1 Life Force to gain 50 hp? Press y for yes and n for no: ", {limit: "y n"})
    if(useLifeForce == "y") {
        hp = hp + 50;
        inventory.pop()
        console.log("You gained 50 hp. Your hp is now at " + hp)
        walk()
    } else if(useLifeForce == "n") {
        walk()
    }
}
//While hp is more than 0 it will continue
while(hp > 0) {
    walk()
    if(hp >= 250) {
    console.log("You have escaped the dark and dreary forest with your life intact! Congratulations " + name + ", YOU WIN!")
    process.exit()
    }
}
