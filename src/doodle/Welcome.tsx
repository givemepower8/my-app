interface WelcomeProps {
    name: string; 
}

const Welcome = (props:WelcomeProps) => {
    console.log("Welcome"); 
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome;