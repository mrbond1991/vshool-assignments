// Rest and Spread Operator
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animals) {
//     return animals
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties. 
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is 
// mentioned twice in both the name and value of properties in your object:
// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }
// console.log(combineFruit(
//     ["apple", "pear"],
//     ["cake", "pie"],
//     ["carrot"]
//     ))

// Use destructuring to use the property names as variables. Desructure the object in the parameter:
// const parseSentence = (location, duration) => `We're going to have a good time in ${location} for ${duration}`  
//   console.log(parseSentence("Burly Idaho", "2 weeks"));

//   const obj = {
//     location: "Burly, Idaho", 
//     duration: "2 weeks"
//  }

// without destructuring object in parameter list 
//function parseSentence(parameter) {
//    return `We're going to have a good time in ${parameter.location} for ${parameter.duration}`
//}

// const {location, duration} = obj 
// console.log(`I'm going to ${location}`)


// function parseSentence({location, duration}) {
//     return `We're going to have a good time in ${location} for ${duration}`
// }


// console.log(parseSentence(obj))

// Use array destructuring to make this code ES6:
// function returnFirst(items){
//     const [firstItem, secondItem] = items;
//     return firstItem
// }
// var items = ["socks", "pjs", "pillow"]
// console.log(returnFirst(items))

// Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }
// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// function combineAnimals(arr1, arr2, arr3) {
//     return [...arr1, ...arr2, ...arr3]
// }
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["unicorn","jackolope"];
// const mysteriousAnimals = ["possum", "platypus"];
// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// Try to make the following function more ES6y:
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }

// function product(...numbers) {
//     return numbers.reduce((acc, number) => acc * number, 1)
//  }

// Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(a,b,c,d,e, ...array) {
//     return [a, b, c, d, e,...array];
//   }

// Write some destructuring code to help this function out. 
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names){
    return names.map((name) => {
        const nameSplit = name.split(" ");
        const [firstName, lastName] = nameSplit;
        return {firstName,lastName}
        }
    )
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]