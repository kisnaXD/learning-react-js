import { useId } from "react"

const UniqueID = () => {
    const id = useId();
    // Using the useId hook, we made React.JS generate a unique ID which we used in our labels and forms. This unique ID was only 
    // rendered once during the initial render, so it does not change until the user reloads their page. We can use this ID For 
    // multiple input types by giving suffixes like {id}--email and {id}--pass or we can just generate another ID for both of them to
    // be unique on their own.
    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}`} />

            <label htmlFor={`${id}-pass`}>Password</label>
            <input type="text" id={`${id}`} />
        </div>
    )
}

export default UniqueID