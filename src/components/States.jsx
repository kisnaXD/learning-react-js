import { useState } from 'react'

const States = () => {

    // The useState function allows us to keep track of the state of a variable and then use it dynamically in components
    // The useState function returns an array containing the value of a state and a function which is responsible for making changes to that state
    // We use restructuring so that we can store the state in the variable count and the function in setCount, instead of storing them in an array 
    // What happens in this program is, we store two states, an array containing an initial state of 0 and the changing function "counter"
    // And another state variable count whose initial value is 99, but can be changed using the "setCount" function
    // We call these state change functions in other functions, which are called during onClick events of buttons
    // If we try to update the value of the state without using its state change function, the value will change behind the scenes
    // But that change will not load on the UI. Which is why we use states in React
    // We can also send a function as an argument to the useState function
    const counter = useState(0);
    const [count, setCount] = useState(99);
    const [newCount, setNewCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })
    function increment() {
        setCount(count- 1);
    }
    function nonRestructuredIncrement() {
        counter[1](counter[0] + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>-</button>
            <h1>{counter[0]}</h1>
            <button onClick={nonRestructuredIncrement}>+</button>
        </div>
    )
}

export default States