import React from "react"


export default function App() {

    const [formData, setFormData] = React.useState(
        {
            name: ""
        }
    )

    const [nameList, setNameList] = React.useState([])

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value} = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault()
        setNameList(prevNameList => [...prevNameList, formData])
    }
    
    const nameListElements = nameList.map((name) => (
        <li key={name.name}>{name.name}</li>
    ))
    
    return (
        <div>
            <form>
                <label htmlFor="fullName">Full Name: </label>
                <input
                    id="fullName"
                    type="text" 
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <h1>{formData.name}</h1>
                <button onClick={handleClick}>Submit</button>
                <ul>{nameListElements}</ul>
            </form>
        </div>
    )
}