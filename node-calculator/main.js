const readlineSync = require("readline-sync")

function add(num1, num2) {
    let sum = num1 + num2;
    return sum
}

function mul(num1, num2) {
    console.log(num1 * num2)
}

function div(num1, num2) {
    console.log (num1 / num2)
}

function sub(num1, num2) {
    console.log(num1 - num2)
}

var num1 = readlineSync.question("Please enter your first number: ");
console.log(num1);

var num2 = readlineSync.question("Please enter your second number: ");
console.log(num2);

var mathFunction = ["add", "sub", "mul", "div"];
index = readlineSync.keyInSelect(mathFunction, "Please enter the operation to perform ") 
    if (mathFunction[1]) {
        console.log(add(num1, num2))
    } else if (mathFunction[2]) {
        console.log(sub(num1, num2))
    } else if (mathFunction[3]) {
        console.log(mul(num1, num2))
    } else if (mathFunction[4]) {
        console.log(div(num1, num2))
    }