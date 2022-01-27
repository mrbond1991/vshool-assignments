const readline = require("readline-sync");

let key = false;
while (true) {
    mainMenu()
}
function mainMenu() {
    let choice = readline.question("What will you do? /n 1) Open the Door /n 2) Find the Key /n 3) Put Hand in the Hole ");
    switch(choice) {
        case "1":
            if (key === 0) {
                console.log("The Door is Locked...")
            } else if (key === 1) {
                victoryMenu();
            }
            break;
        case "2":
            console.log("You've Acquired a Key!");
            key = 1;
            break;
        case "3":
            defeatMenu()
            break;
        default:
            console.log("Please Enter Eiether '1', '2', or '3' ")
            break;
    }
}
function victoryMenu() {
    let repeat = readline.question("Congratulations! /n You've made it out of the Escape Room! /n Play Again? /n 1) Yes /n 2) No ");
    switch (repeat) {
        case "1":
            mainMenu();
            break;
        case "2":
            console.log("Goodbye! Thanks for Playing!")
            break;
        default:
            console.log("Please Enter Either '1', or '2' ");
            victoryMenu();
            break;
    }
}
function defeatMenu() {
    let repeat = readline.question("Game Over /n You Died! /n Play Again? /n 1) Yes /n 2) No ");
    switch (repeat) {
        case "1":
            mainMenu();
            break;
        case "2":
            console.log("Goodbye!")
            process.exit()
        default:
            console.log("Pleasse Enter Either '1', or '2' ");
            defeatMenu();
            break;
    }
}