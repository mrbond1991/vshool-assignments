const readline = require("readline-sync");
let hp = 100

// 1. Greet the player!
console.log("You awake in a overgrown forest. All around you there are sounds of animals, insects, and other sounds that you can't quite place. You realize you still have your sword and sheild close you to, but nothing else. You have no armor, no supplies and no idea where you are. The only thing you can think to do is to push on and hope for the best!")
// 2. Ask for and Store player's name
const name = readline.question("What is thy name adventurer? ")
// 3. Walking:
function walk() {
    function willFight(min, max) {
        return Math.random(1, 3);
    }
    const walking = readline.question("Will you choose to walk forth into the dark and dreary forest? /n Press the w key to walk ")
    switch(walking){
        case "w":
            if(willFight() === 2){
                fight()
            } else {
              walk()  
            }
    }
}

function fight() {

}

while(hp > 0) {
    return walk()
}