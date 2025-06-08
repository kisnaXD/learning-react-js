import { useReducer } from "react"

const Reducers = () => {
    // useReducer in React.JS is a special type of hook which can be used to handle states in React.JS in a more complex manner. 
    // The syntax for useReducer is 
    // const [state, dispatch] = useReducer(reducer, initialState)
    // Here, the state variable will store our state value and can be used in components. The dispatch variable will store the function
    // which can be called during computation to change our states. The reducer is a condition or a function which will determine
    // what will happen to the state, or if it at all anything will happen to the state. initialState is the variable which will be the
    // initial value of our state variable on initial render. As shown in the example, we have created the reducer function which takes
    // current state and action as arguments, and then uses a switch case to execute actions based on action.type and the state 
    // argument is provided by default to the reducer. 
    const initialState = {count : 0};
    const [myReducer, setMyReducer] = useReducer((state, action) => {
        switch(action.type) {
            case "increment":
                return { 
                    ...state, 
                    count: state.count + 1
                };
            case "decrement":
                return { 
                    ...state,
                    count: state.count - 1
                };
            case "reset":
                return {
                    ...state,
                    count: 0
                }
            default: 
                break;
        }
    }, initialState)
    return (
        <div>
            <h1>Count : {myReducer.count}</h1>
            <button onClick={() => setMyReducer({type: "increment"})}>+</button>
            <button onClick={() => setMyReducer({type: "decrement"})}>-</button>
            <button onClick={() => setMyReducer({type: "reset"})}>Set to 0</button>
        </div>
    )
}

export default Reducers