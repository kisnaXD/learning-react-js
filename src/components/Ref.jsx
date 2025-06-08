import { useRef } from "react";

const Ref = () => {
    // useRef in React.JS allows a user to have access and interact with DOM Elements or to persist values across renders without 
    // causing a re render. useRef is majorly used whenever the state variable that we are going to use is not going to change
    // across renders
    const inputElement = useRef(null);
    function focusInput() {
        inputElement.current.focus();
        inputElement.current.value = 'Set Value'
    }
    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus Button</button>
        </div>
    )
}

export default Ref