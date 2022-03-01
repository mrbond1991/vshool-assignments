// Preliminaries
// for(var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// for(var j = 9; j >= 0; j--) {
//     console.log(j)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// Bronze Medal
// 1.
// var arr = []
// for (var i = 0; i <= 9; i++) {
//     arr.push(i);
// }
// console.log(arr)

// 2.
// for(var i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 3
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const otherFruit = []
// for(var i = 1; i < fruit.length; i += 2) {
//     otherFruit.push(fruit[i])
// }
// console.log(otherFruit)

// Silver Medal
// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
  
// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations
  
// 1.
//   for(var i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }

// 2.
// const names = [];
// const occupations = [];

// // for(var i = 0; i < peopleArray.length; i++) {
// //     names.push(peopleArray[i].name);
// //     occupations.push(peopleArray[i].occupation)
// // }
// // console.log(names)
// // console.log(occupations)

// 3.
// const otherNames = [];
// const otherOccupations = [];

// for(var i = 0; i < peopleArray.length; i += 2) {
//     otherNames.push(peopleArray[i].name)
// }
// for(var i = 1; i < peopleArray.length; i += 2) {
//     otherOccupations.push(peopleArray[i].occupation)
// }

// console.log(otherNames);
// console.log(otherOccupations)

// Gold Medal
// 1.
var arr = []
var arr1 = []
for(var i = 0; i <= 2; i++) {
    arr.push(i)
    for(var j = 0; j <= 2; j++) {
        arr1.push(j)
    }
}
console.log(arr1)