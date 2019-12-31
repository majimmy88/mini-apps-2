import React from 'react';

const EventList = (props) => {
    return (
        <ul className= 'Events'>
            {props.array.map((event, i)=> (
                <li key = {i}>
                    <div>{event.date}</div>
                    <div>{event.description}</div>
                </li>
            ))}
        </ul>
    )
}

export default EventList