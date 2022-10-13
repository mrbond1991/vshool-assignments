import React, { useContext } from 'react'
import { UglyThingsContext } from './uglyThingsContext'

function UglyThing(props) {

    const{title, description, imgUrl} = useContext(UglyThingsContext)

    const uglyThingsArray = allUglyThings.map((thing, index) => {
        return  <UglyThing 
                id={thing._id}
                title={title}
                description={description}
                imgUrl={imgUrl}
        />
    })

    return (
         <div>
            {uglyThingsArray}
         </div>
    )
}

export default UglyThing