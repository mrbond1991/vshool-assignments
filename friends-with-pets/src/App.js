import React from 'react';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Pet from './components/Pet';
import Data from './Data';

export default function App() {
    const friends = Data.map(friend => {
        return (
            <FriendsList 
                key={friend.id}
                friend={friend}
            />
        )
    })

    return (
        <div>
            {friends}
            <Friend />
            <Pet />
        </div>
    )
}