import { Link, useParams } from "react-router-dom";
import users from "../../data/user.json"

const UserDetail = () => {

    const idParam = useParams()


    console.log("users vom userDetail", users);
    console.log(idParam);


    const gesuchteUser = users.filter((user) => {
        return user.id === Number(idParam.pizza)
    })
    console.log(gesuchteUser);



    return (
        <>
            <h2>UserDetail</h2>
            <h3>{gesuchteUser[0].first_name}</h3>
            <h4>{gesuchteUser[0].last_name}</h4>
            <h4>{gesuchteUser[0].email}</h4>
            <h5>{gesuchteUser[0].gender}</h5>
            <h6>{gesuchteUser[0].ip_address}</h6>
            <Link to="/userlist"><button>Come Back to User List</button></Link>
        </>
    );
}

export default UserDetail;