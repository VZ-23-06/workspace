import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from "react-router-dom"

const Login = () => {

    const userNameVomRef = useRef()
    const emailVomRef = useRef()
    const passwordVomRef = useRef()


    const { user, setUser } = useContext(mainContext)
    // console.log("User in Login.jsx", user);

    // ! bitte immer in einer function schreiben, weil value danach als undefined zurrückgibt 
    // console.log(userNameVomRef.current.value);


    const loginFunction = (event) => {
        event.preventDefault()
        // console.log(userNameVomRef.current.value);
        // console.log(emailVomRef.current.value);
        // console.log(passwordVomRef.current.value);
        setUser({
            ...user,
            userName: userNameVomRef.current.value,
            email: emailVomRef.current.value,
            password: passwordVomRef.current.value
        })

    }



    return (
        <>
            <Link to="/"><button>Back to Home</button></Link>
            <div>Login</div>
            <form onSubmit={loginFunction}>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    ref={userNameVomRef}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    ref={emailVomRef}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    ref={passwordVomRef}
                />
                <button type='submit'>Log In</button>
            </form>
        </>
    )
}

export default Login