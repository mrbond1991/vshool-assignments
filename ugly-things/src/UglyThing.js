import React, { useContext } from 'react'
import { UglyThingsContext } from './uglyThingsContext'

function UglyThing(props) {

    const{allUglyThings} = useContext(UglyThingsContext)

    const uglyThingsArray = allUglyThings.map((thing, index) => {
        return <li
            key={index}
            className="ugly-thing-li"
        >
            <UglyThing 
                id={thing._id}
                title={thing.title}
                description={thing.description}
                imgUrl={thing.imgUrl}
            />
        </li>
    })

    return (
         <div>
            {uglyThingsArray}
         </div>
    )
}

export default UglyThing