const ButtonEventHandler = () => {

    function handeClick() {
        console.log("I will handle this")
    }

    return <div>
        <button onClick={() => console.log("I was clicked")}>Click Me</button>
        <button onClick={handeClick}>Click Me</button>
    </div>
}

export default ButtonEventHandler;