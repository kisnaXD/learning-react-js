const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const PasswordComponent = (props) => {
    if(props.isValid === true) {
        return <ValidPassword />;
    } else {
        return <InvalidPassword />;
    }
}

export default PasswordComponent;