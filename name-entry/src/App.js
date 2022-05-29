import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        name: "",
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type} = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form>
                <input
                    type="text" 
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <h1></h1>
                <button></button>
                <ol>

                </ol>
            </form>
        </div>
    )
}