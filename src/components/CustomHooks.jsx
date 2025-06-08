import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

const CustomHooks = () => {

    // We would need to do all this if we had not modularised this into a custom made react hook called as useFetch

    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((res) => res.json())
    //     .then((Data) => setData(Data))
    // }, [])
    // return (
    //     <div>
    //         {data && data.map(item => {
    //             return <p key={item.id}>{item.title}</p>
    //         })}
    //     </div>
    // )

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <div>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}

export default CustomHooks