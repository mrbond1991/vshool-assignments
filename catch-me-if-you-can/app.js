//1) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y) {
//     try {
//         if(x === "") {throw "empty"} 
//         if(isNaN(x)) {throw "not a number"}
//         x = Number(x)
//         if(y === "") {throw "empty"} 
//         if(isNaN(y)) {throw "not a number"}
//         y = Number(y)
//         sum
//     }
//     catch(err) {
//         console.log(err)
//     }
//     finally {
//         console.log("I am running!")
//     }
//     return x + y
// }
 
// console.log(sum("dog", 5))

//2)
var user = {username: "sam", password: "123abc"};

function login(username, password) {
    try {
        if(username !== "sam") {throw "Incorrect Username"}
        if(password !== "123abc") {throw "Incorrect Password"}
        if(username === "sam" && password === "123abc") {
            console.log("login successful!")
        }
    }
    catch(err) {
        console.log(err)
    }
}

login("sam", "123abc")
login("mike", "123abc")
login("sam", "123456")