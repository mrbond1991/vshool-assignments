import React from 'react';
import Friend from './Friend';

export default function FriendsList(props) {
    return (
        <div className='friends'>
            <h1>Friend: {props.friend.name}</h1>
            <h1>Age: {props.friend.age}</h1>
            <h1>Pets: {props.friend.pets.name}</h1>
        </div>
    )
}