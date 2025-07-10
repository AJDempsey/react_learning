'use client'
// This is the directive to make the rendering happen on the client
// Withouth this the rendering will happen on the server

import { useState } from 'react';
// This hook is only for client components

export default function LikeButton() {
    //    Value,  Function to update value,  Initial Value
    const [likes, setLikes] = useState(0);

    // Got to put this function inside HomePage so that it can see the
    // setLikes function when we press it
    function handleClick() {
        console.log("Increment like count.");
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Likes ({likes})</button>
}