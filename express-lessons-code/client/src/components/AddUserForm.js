import React, { useState } from 'react'

export default function AddUserForm(props) {
    const initInputs = { name: "", age: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.addUser(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name}
                onChange={handleChange} 
                placeholder="Name"
            />
            <input 
                type="num" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange} 
                placeholder="Age"
            />
            <button>Add User</button>
        </form>
    )
}