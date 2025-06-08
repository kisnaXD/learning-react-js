import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((Data) => setData(Data))
    }, [])
    return [data]
}

export default useFetch