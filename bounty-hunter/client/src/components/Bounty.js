import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { fName, lName, type, bountyAmount, living, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>Name: {fName} {lName}</h1>
                    <h2>Type: {type}</h2>
                    <h2>Bounty: {bountyAmount}</h2>
                    <h3>Is the target alive?: {`${living}`}</h3>
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