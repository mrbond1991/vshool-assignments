import React, { useState, useEffect } from 'react'
import Form from './Form'
import UglyThing from './UglyThing'
import { UglyThingsContextProvider } from './uglyThingsContext'

function App(props) {

    return(
        <>
            <UglyThingsContextProvider>
                <Form />
                <UglyThing />
            </UglyThingsContextProvider>
        </>
    )
}

export default App