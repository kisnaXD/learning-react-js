const InlineStyle = () => {
    const stylesReturn = { 
        backgroundColor: "teal", 
        padding: "2rem", 
        color: "white"
    };
    return (
        <section>
            <h1 style={stylesReturn}>Trying out more styling</h1>
            <h1 style={{color: "red", fontFamily: "Comic Sans MS"}}>Trying out styling</h1>
        </section>
    )
}

export default InlineStyle