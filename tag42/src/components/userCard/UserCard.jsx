import { Link } from "react-router-dom";

const UserCard = ({ user, id }) => {
    // console.log(id);
    // console.log(user);
    return (
        <>
            <h3>Lastname:{user.last_name}</h3>

            <Link to={`/userlist/${id}`}>More Info</Link>
        </>
    );
}

export default UserCard;