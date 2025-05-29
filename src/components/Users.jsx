const Users = () => {
    const usersArray = [
        {
            username: "kisnaXD",
            age: 18
        },
        {
            username: "shxvam_",
            age: 20
        }
    ];
    return (
        <div>
            {usersArray.map((user) => (
                <div className="userCard">
                    <p className="userName">{user.username}</p>
                    <p className="userAge">{user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default Users