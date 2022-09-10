import React from 'react'

function Form() {
    const [formData, setFormData] = React.useState({
        color1: "#f43434",
        color2: "#1f90d6",
        angle: "50"
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value} = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className='gradient-app'>
            <div className='gradient-display-box' >
                <div className='gradient-display' style={{background: `linear-gradient(${formData.angle}deg, ${formData.color1}, ${formData.color2})`}} ></div>
                <textarea 
                    className='gradient-display-text'
                    onChange={handleChange}
                    readOnly value={[
                        "background: linear-gradient(" + formData.angle + "deg", formData.color1, formData.color2 + ")" + "\r\n" + "-moz-background: linear-gradient(" + formData.angle + "deg", formData.color1, formData.color2 + ")" + "\r\n" + "-webkit: linear-gradient(" + formData.angle + "deg", formData.color1, formData.color2 + ")"
                    ]}
                />
            </div>
            <form className='gradient-form'>
                <h2 className='gradient-form-title'>Options</h2>
                <div className='form-color-1'>
                    <h4 className='color-1-title'>Color 1</h4>
                    <h4 className='color-1-value'>{formData.color1}</h4>
                    <input 
                        type='color'
                        onChange={handleChange}
                        name="color1"
                        className="input-color"
                        value={formData.color1}
                    />
                </div>
                <div className='form-color-2'>
                    <h4 className='color-2-title'>Color 2</h4>
                    <h4 className='color-2-value'>{formData.color2}</h4>
                    <input 
                        type='color'
                        onChange={handleChange}
                        name="color2"
                        className="input-color"
                        value={formData.color2}
                    />
                </div>
                <div className='form-angle'>
                    <h4>Angle</h4>
                    <input
                        type='number'
                        onChange={handleChange}
                        name='angle'
                        className='angle'
                        value={formData.angle}
                    />
                </div>
            </form>
        </div>
    )
}

export default Form