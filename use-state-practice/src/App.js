import React from 'react'

//1. & 2.
// export default function App() {
//     const [color, setColor] = React.useState("pink")
    
//     function handleClick() {
//         setColor("blue")
//     }

//     function handleDblClick() {
//         setColor("pink")
//     }
    // return (
    //     <div
    //         className='div-container'
    //         onClick={handleClick}
    //         onDoubleClick={handleDblClick}
    //     >
    //         <h1>{color}</h1>
    //     </div>
    // )
// }

//3.
// export default function App() {
//     const [people, setPeople] = React.useState([
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
//     ])
//     function addPerson() {
//         setPeople(people => people.push([{
//             firstName: "Mike",
//             lastName: "Bond"
//         }]))
//         console.log(people)
//     }
    // return (
    //     <div
    //         className='div-container'
    //         onClick={addPerson}
    //     >
    //         <h1>{people[0].firstName}</h1>
    //         <h1>{people[0].lastName}</h1>
    //     </div>
    // )
// }

//4.a.
// export default function App() {
// const [colors, setColors] = React.useState(["pink", "blue"])

// setColors(prevColors => [prevColors, "green"])
// }

//4.b.
// export default function App() {
//     const [countObject, setCountObject] = React.useState({
//         count: 0
//     })
//     setCountObject(prevState => prevState.count + 1)
//     console.log(countObject)
// }

//5.
export default function App() {
        const [person, setPerson] = React.useState({
            firstName: "John",
            lastName: "Smith"
        })
        setPerson(prevPerson => prevPerson.age = 30)
        console.log(person)
}
