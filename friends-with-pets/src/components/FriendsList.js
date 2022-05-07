import React from 'react';

export default function FriendsList(props) {
    return (
        <div className='friends-list'>
            <h1>Friend: {props.friend.name}</h1>
            <h1>Age: {props.friend.age}</h1>
            <h1>Pets: {props.friend.pets.name}</h1>
        </div>
    )
}