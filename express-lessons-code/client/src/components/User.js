import React, { useState } from "react"
import AddUserForm from "./AddUserForm"

export default function User(props) {
    const { name, age, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="user">
            { !editToggle ?
                <>
                    <h1>Name: { name }</h1>
                    <h2>Age: { age }</h2>
                    <button
                        className="dlt-btn"
                        onClick={() => props.deleteUser(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddUserForm
                        name={ name }
                        age={ age }
                        _id={ _id }
                        btnText="Submit Edit"
                        submit={props.editUser}
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