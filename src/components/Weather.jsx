const Weather = (props) => {
    if(props.temperature > 25) {
        return <h2>Its hot outside</h2>
    } else if(props.temperature < 15) {
        return <h2>Its nice outside</h2>
    } else {
        return <h2>Its cold outside</h2>
    }
}

export default Weather