// 1.
// const arr = [2, 5, 100]

// const doubleNumbers = arr.map(num => num * 2)

// console.log(doubleNumbers)

//2.
// const arr = [2, 5, 100]

// const stringItUp = arr.map(num => JSON.stringify(num))

// console.log(stringItUp) // => [ '2', '5', '100' ]

//3.
// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const capNames = arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())

// console.log(capNames) // => [ 'John', 'Jacob', 'Jingleheimer', 'Schmidt' ]

//4.
const arr = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]

// const namesOnly = arr.map(name => name.name)

// console.log(namesOnly)

//5.
// const makeStrings = arr.map((name) => {
//   if(name.age >= 18) {
//     return name.name + " can go to The Matrix!"
//   } else if (name.age < 18) {
//     return name.name + " is under age!!"
//   }
// })

// console.log(makeStrings)

//6.
// const readyToPutInTheDom = arr.map(name => {
//   name.name = "<h1>" + name.name + "</h1>"
//   name.age = "<h2>" + name.age + "</h2>"
//   return name.name + name.age
// })

// console.log(readyToPutInTheDom)