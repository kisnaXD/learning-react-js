import { useEffect, useState } from 'react'

const Hooks = () => {
    // By using the useEffect Hook in React.JS, we can create side missions that are executed as soon as a render takes place. We can
    // also customize it to an extent that the side mission/effect only takes place when render in a specific DOM node happens. This
    // is done using the dependency array where we give all the DOM nodes which when undergo a render, the useEffect's callback function
    // is called.

    const [value, setValue] = useState(0);
    // Because no dependency array has been provided here to the useEffect Hook, it will be executed on every re render that takes place. 
    // If we provide a dependency array, effect will only be executed when the elements within that dependency array are re rendered.
    // In case we provide an empty dependency array, the callback function will only be executed when the entire window is rendered
    // and not anytime else, that is because there is no dependency for it. 
    // A useEffect callback function will not be executed if the value of our dependency array's elements is changed buy a function
    // not related to it. Also, a useEffect hook cannot be wrapped inside a conditional statement. Conditional statement must go inside
    // the callback function passed within that hook.
    useEffect(function () {
        console.log("Used Effect")
        document.title = `Increment ${value}`;
    }, [value])
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value+1)}>+</button>
        </div>
    )
}

export default Hooks