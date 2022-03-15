const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    if(arr.age > 18){
        return true
    }
    arr.sort((a, b) => {
        if(a.lastName < b.lastName){return -1}
        if(a.lastName > b.lastName){return 1}
    })
    
}
console.log(sortedOfAge(peopleArray))



// const newList = []

// //1)
// const olderThan18 = peopleArray.filter(person => {
//     if(person.age > 18) {
//         newList.push(person)
//     }
// })

// //2)
// const alphLName = newList.sort((a, b) => {
//     if(a.lastName < b.lastName) {
//         return -1
//     }
//     if(a.lastName > b.lastName) {
//         return 1
//     }
// })

// //3)
// const finalArr = []

// const liLookAlike = alphLName.forEach(person => {
//     finalArr.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
// })

// console.log(finalArr)