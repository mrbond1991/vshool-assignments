import React from "react"
import Badge from "./components/Badge"

export default function Form () {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favFood: "",
        about: ""
    })

    const [badgeList, setBadgeList] = React.useState([])

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value} = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setBadgeList(prevBadgeList => [...prevBadgeList, formData])
    }

    const badgeListElements = badgeList.map((badge) => (
        <li key={badge.firstName}>
            <Badge 
                name={badge.firstName + " " + badge.lastName} 
                phone={badge.phone}
                placeOfBirth={badge.placeOfBirth}
                favoriteFood={badge.favFood}
                email={badge.email}
                about={badge.about}
            />
        </li>
    ))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <input
                    type="text"
                    placeholder="Place of Birth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <input
                    type="number"
                    minLength="3"
                    maxLength="11"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Favorite Food"
                    name="favFood"
                    value={formData.favFood}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <textarea
                    onChange={handleChange}
                    name="about"
                    className="form--textarea"
                    value={formData.about}
                    required
                    minLength="3"
                    placeholder="Tell us about yourself!"
                >
                    Tell us about yourself!
                </textarea>
                <button>Submit</button>
            </form>
            <ul>
                {badgeListElements}
            </ul>
        </div>
    )
}