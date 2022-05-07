import React from 'react';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Pet from './components/Pet';
import Data from './Data';

export default function App() {
    const friends = Data.map(friend => {
        return (
            <div>
                <FriendsList 
                    key={friend.id}
                    friend={friend}
                />
                {
                   friend.pets.map(pet => {
                        return (
                            <Pet 
                                key={pet.id}
                                pet={pet}
                            />
                        )
                    })
                }
            </div>
        )
    })

    // const pets = Data.map(pet => {
    //     return (
    //         <Pet 
    //            key={pet.id}
    //            pet={pet} 
    //         />
    //     )
    // })

    return (
        <div>
            <Friend />
            {friends}
            {/* {pets} */}
        </div>
    )
}