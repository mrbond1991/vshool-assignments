//1) Turn an array of numbers into a total of all the numbers
// const total = [1,2,3]

// const result = total.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result)

//2) Turn an array of numbers into a long string of all those numbers.
// const stringConcat = [1,2,3]

// const result = stringConcat.reduce(function(final, num){
//     final += num.toString()
//     return final
// })

// console.log(result)

//3) Turn an array of voter objects into a count of how many people voted
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const totalVotes = voters.reduce((final, votes) => {
//     if(votes.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log("Total votes: " + totalVotes)

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// const wishList = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const shoppingSpree = wishList.reduce((final, price) => {
//     final += price.price
//     return final
// }, 0)

// console.log("Wish List Total Amount: $" + shoppingSpree)

//5) Given an array of arrays, flatten them into a single array
// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// const flatten = arrays.reduce((final, array) => {
//     final.push(...array)
//     return final
// }, [])

// console.log(flatten)

//