import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = {
        fName: props.fName || "",
        lName: props.lName || "",
        type: props.type || "",
        bountyAmount: props.bountyAmount || "",
    }
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
        <div className='form-container'>
            <h1>Add Bounty</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="fName"
                    value={inputs.fName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="form-input"
                />
                <input
                    type="text"
                    name="lName"
                    value={inputs.lName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="form-input"
                />
                <input
                    type="text"
                    name="type"
                    value={inputs.type}
                    onChange={handleChange}
                    placeholder="Jedi or Sith?"
                    className="form-input"
                />
                <input
                    type="num"
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    onChange={handleChange}
                    placeholder="Bounty Amount"
                    className="form-input"
                />
                <button
                    className='form-btn'>
                    {props.btnText}
                </button>
            </form>
        </div>
    )
}