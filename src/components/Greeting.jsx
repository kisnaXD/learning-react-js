const Greeting = (props) => {
    props.timeOfDay === "morning" ? <h1>Good Morninng</h1> : <h1>Good Night</h1>
}

export default Greeting;