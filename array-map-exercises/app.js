// 1.
// function doubleNumbers(arr) {
//     return arr.map(num => num * 2)
// }
// console.log(doubleNumbers([2, 5, 100]))

//2.
// function stringItUp(arr) {
//     return arr.map(num => JSON.stringify(num))
// }
// console.log(stringItUp([2, 5, 100]))

//3.
// function capNames(arr) {
//     return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
// }
// console.log(capNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//4.
// function namesOnly(arr) {
//     return arr.map(name => name.name)
// }
// console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//     ]))

//5.
// function makeStrings(arr) {
//     return arr.map(name => {
//         if(name.age >= 18) {
//             return name.name + " can go to The Matrix!"
//         } else if(name.age < 18) {
//             return name.name + " is under age!"
//         }
//     })
// }
// console.log(makeStrings(
//     [
//         {
//             name: "Angelina Jolie",
//             age: 80
//         },
//         {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//       ]
// ))

//6.
// function readyToPutInTheDom(arr) {
//     return arr.map (name => {
//         name.name = "<h1>" + name.name + "</h1>"
//         name.age = "<h2>" + name.age + "</h2>"
//         return name.name + name.age
//     })
// }
// console.log(readyToPutInTheDom(
//     [{
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }]
// ))