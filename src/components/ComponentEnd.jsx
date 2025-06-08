import { Data } from "./ContextAPI"
import { useContext } from "react"
const ComponentEnd = () => {
    const {age, setAge} = useContext(Data);
    // Clearly, we can just ask useContext to take in the Data we are importing, and then use it as any normal variable in our HTML.
    // We also passed an object in the Provider so here we have destructured the object to get the state and state change function.
    return (
        <section>
            <h1>{age}</h1>
            <button onClick={() => setAge(age+1)}>+</button>
            <button onClick={() => setAge(age-1)}>-</button>
        </section>
    )
}

export default ComponentEnd