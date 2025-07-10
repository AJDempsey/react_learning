import { useState } from 'react';

function Header({ title }) {
    console.log(title ? title : "No title, using Default"); // "React"
    return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hooper', 'Margaret Hamilton'];

    // Got to put this function inside HomePage so that it can see the
    // setLikes function when we press it
    function handleClick() {
        console.log("Increment like count.");
        setLikes(likes + 1);
    }
    //    Value,  Function to update value,  Initial Value
    const [likes, setLikes] = React.useState(0);

    return (
        <div>
            {/* Nesting the Header Component */}
            <Header title="React" />
            <Header title="Develop. Preview. Deploy." />
            <Header />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    );
}