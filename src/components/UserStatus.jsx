const UserStatus = (props) => {
    if(props.loggedIN && props.isAdmin) {
        return <h1>Welcome Admin!</h1>
    } else if(props.loggedIN) {
        return <h1>Welcome User</h1>
    }
}

export default UserStatus;