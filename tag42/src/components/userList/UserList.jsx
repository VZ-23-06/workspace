import { useState } from "react";
import users from "../../data/user.json"
import Nav from "../nav/Nav";
import { useTransition } from "react";
import UserCard from "../userCard/UserCard";

const UserList = () => {
    // console.log(users);
    let [usersData, setUsersData] = useState(users)
    // console.log(usersData);

    return (
        <>
            <Nav />
            <h2>UserList</h2>
            {usersData.map((user, index) => {
                return (
                    <div key={index}>
                        <UserCard
                            user={user}
                            id={user.id}
                        />
                    </div>
                )
            })}
        </>
    );
}

export default UserList;