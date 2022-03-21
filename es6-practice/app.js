// let and const
// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// ES6 Arrow Fuctions
// Task 1
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))

// Task 2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

// Task 3
// var doMathSum = (a, b) => a + b
// console.log(doMathSum(5,5))

// var produceProduct = (a, b) => a * b
// console.log(produceProduct(5, 5))

// Task 4
// function printString(firstName = "Jane", lastName = "Doe", age = 100) {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }

// Task 5
// const animals = [
//    {
//        type: "dog",
//        name: "theodore"
//    },
//    {
//        type: "cat",
//        name: "whiskers"
//    },
//    {
//        type: "pig",
//        name: "piglette"
//    },
//    {
//        type: "dog",
//        name: "sparky"
//    }
// ];

// function filterForDogs(arr) {return arr.filter(animal => animal.type === "dog")}

// console.log(filterForDogs(animals))

// Template Literals
// function welcomeMssg(location, name) {
//     return `Hi ${name}! \n\nWelcome to ${location}. \n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
// }
// console.log(welcomeMssg("Hawaii", "Janice"))