import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { fName, lName, type, bountyAmount, living, _id, } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>Name: {fName} {lName}</h1>
                    <h1>Type: {type}</h1>
                    <h1>Bounty: {bountyAmount}</h1>
                    <div className='btn-container'>
                        <button
                            className='dlt-btn'
                            onClick={() => props.deleteBounty(_id)}>
                            Complete Bounty
                        </button>
                        <button
                            className='edit-btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit Bounty
                        </button>
                    </div>
                </>
            :
                <>
                    <AddBountyForm 
                        fName={ fName }
                        lName={ lName }
                        type={ type }
                        bountyAmount={ bountyAmount }
                        living={ living }
                        _id={ _id }
                        btnText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}