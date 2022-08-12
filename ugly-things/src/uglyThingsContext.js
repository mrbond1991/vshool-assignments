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
                allUglyThings: allUglyThings,
            }}>
                {props.children}
        </UglyThingsContext.Provider>
    )
}

export {UglyThingsContext, UglyThingsContextProvider}