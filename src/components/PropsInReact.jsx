const PropsInReact = (props) => {
    return (
        <ul>
            <li>Name : {props.name}</li>
            <li>Age : {props.age}</li>
            <li>Email : {props.email}</li>
            <li>Job : {props.job}</li>
        </ul>
    )
}

export default PropsInReact;