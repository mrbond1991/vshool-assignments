import React from 'react'

function Form() {
    return (
        <form className='gradient-form'>
            <h2>Options</h2>
            <div className='form-color-1'>
                <h4 className='color-1-title'>Color 1</h4>
                <h4 className='color-1-value'></h4>
                <input type='color'></input>
            </div>
            <div className='form-color-2'>
                <h4 className='color-2-title'>Color 2</h4>
                <h4 className='color-2-value'></h4>
                <input type='color'></input>
            </div>
        </form>
    )
}

export default Form