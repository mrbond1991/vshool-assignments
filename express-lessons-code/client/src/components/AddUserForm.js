import React, { useState } from 'react'

export default function AddUserForm(props) {
    const initInputs = { name: props.name || "", age: props.age || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text" 
                name="name" 
                value={inputs.name}
                onChange={handleChange} 
                placeholder="Name"
                className='form-input'
            />
            <input 
                type="num" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange} 
                placeholder="Age"
                className='form-input'
            />
            <button
                className='form-button'
            >{ props.btnText }</button>
        </form>
    )
}