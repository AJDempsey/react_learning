import LikeButton from "./like-button";

function Header({ title }) {
    console.log(title ? title : "No title, using Default"); // "React"
    return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hooper', 'Margaret Hamilton'];

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
            <LikeButton />
        </div>
    );
}