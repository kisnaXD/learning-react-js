import { createContext, useState } from "react";
import ComponentMedium from "./ComponentMedium";

export const Data = createContext();

const ContextAPI = () => {
    // ContextAPI is a tool which allows us to share state variables and change them across components without passing them as a 
    // prop across every component.
    // What we have done here is, we have created an object of "createContext" in the Data variable. Then we have used the Data.Provider
    // tag to pass our data (variable name) to its daughter tags (ComponentMedium) in this case. Then in ComponentMedium, we have 
    // called ComponentEnd. In ComponentEnd, we have used Data.Consumer tag and then created an arrow function to use the name data
    // which was passed by the Provider. Similar job can be done by using the useContext hook. With the help of the UseContext hook,
    // we dont need to pass an arrow function in the ComponentEnd.jsx as we can just declare them as a variable.
    const [age, setAge] = useState(0);
    return (
        <section>
            <Data.Provider value={{age, setAge}}>
                <ComponentMedium />
            </Data.Provider>
        </section>
    )
}

export default ContextAPI