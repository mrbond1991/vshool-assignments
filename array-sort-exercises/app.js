// //1) Sort an array from smallest number to largest
// function leastToGreatest(arr) {
//     return arr.sort((a, b) => a - b)
// }
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

//2) Sort an array from largest number to smallest
// function greatestToLeast(arr) {
//     return arr.sort((a, b) => b - a)
// }
// console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

//3) Sort an array from shortest string to longest
// function lengthSort(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

//4) Sort an array alphabetically
// function alphabetically(arr) {
//     return arr.sort((a, b) => {
//         if(a < b){return -1}
//         if(a > b){return 1}
//     })
// }
// console.log(alphabetically(["dog", "wolf", "by", "family", "eaten"]))

//5) Sort the objects in the array by age
// function byAge(arr) {
//     return arr.sort((a, b) => a.age - b.age)
// }
// console.log(byAge([
//         { name: "Quiet Samurai", age: 22 },
//         { name: "Arrogant Ambassador", age: 100 },
//         { name: "Misunderstood Observer", age: 2 },
//         { name: "Unlucky Swami", age: 77 }
//     ]))