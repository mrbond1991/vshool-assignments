const readlineSync = require("readline-sync")

function add(num1, num2) {
    return (Number(num1) + Number(num2))
}

function mul(num1, num2) {
    return (Number(num1) * Number(num2))
}

function div(num1, num2) {
    return (Number(num1) / Number(num2))
}

function sub(num1, num2) {
    return (Number(num1) - Number(num2))
}

var num1 = readlineSync.question("Please enter your first number: ");
console.log(num1);

var num2 = readlineSync.question("Please enter your second number: ");
console.log(num2);

var mathFunction = ["add", "sub", "mul", "div"];
index = readlineSync.keyInSelect(mathFunction, "Please enter the operation to perform ");
console.log(mathFunction[index])
if (mathFunction[index] == "add") {
    console.log(add(num1, num2))
} else if (mathFunction[index] == "sub") {
    console.log(sub(num1, num2))
} else if (mathFunction[index] == "mul") {
    console.log(mul(num1, num2))
} else if (mathFunction[index] == "div") {
    console.log(div(num1, num2))
}