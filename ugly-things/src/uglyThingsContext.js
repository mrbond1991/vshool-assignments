import React, {useState, useEffect} from 'react'

const UglyThingsContext = React.createContext()

function UglyThingsContextProvider(props) {

    const [allUglyThings, setAllUglyThings] = useState([])

    useEffect(() => {
        fetch("https://api.vschool.io/mikebond/thing")
            .then(res => res.json())
            .then(data => setAllUglyThings(data))
    }, [])

    return (
        <UglyThingsContext.Provider 
            value={{
                title: allUglyThings.title,
                description: allUglyThings.description,
                imgUrl: allUglyThings.imgUrl
            }}>
                <li>
                    {props.children}
                </li>
        </UglyThingsContext.Provider>
    )
}

export {UglyThingsContext, UglyThingsContextProvider}