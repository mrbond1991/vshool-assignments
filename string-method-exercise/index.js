//1.
// function capilizeAndLowercase(string) { // => "HELLOhello"
//     var upperCaseString = string.toUpperCase()
//     var lowerCaseString = string.toLowerCase()
//     var capilizeAndLowercase = upperCaseString + lowerCaseString
//     console.log(capilizeAndLowercase)
// }
// capilizeAndLowercase("Mom")

//2.
// function findMiddleIndex(string) {
//     var halfString = string.length / 2
//     var roundDownString = Math.floor(halfString)
//     console.log(roundDownString)
// }

// findMiddleIndex("hey lad") // => 3

//3.
// function returnFirstHalf(string) {
//     var firstHalf = string.slice(0, string.length / 2)
//     console.log(firstHalf)
// }

// returnFirstHalf("hello big ol world") // => "hello big"

//4.
// function capilizeAndLowercase(string) {
//     var firstHalf = string.slice(0, string.length / 2).toUpperCase()
//     var secondHalf = string.slice(string.length / 2).toLowerCase()
//     var completedString = firstHalf + secondHalf
//     console.log(completedString)
// }

// capilizeAndLowercase("hello big ol world")

//Optional Code Challenge
// function capitalize(string) {
//     var wordArr = string.split(" ")
//     for (var i = 0; i < wordArr.length; i++) {
//         var cap0 = wordArr[i].charAt(0).toUpperCase()
//         var lowCase = wordArr[i].slice(1).toLowerCase()
//         var word = cap0 + lowCase
//         console.log(word)
    // }
    // var joinedWord = wordArr.join(" ")
    // console.log(joinedWord)
// }

// capitalize("Hello everyone, it is great to meet you!")

