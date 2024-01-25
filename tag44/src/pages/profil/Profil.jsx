import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link, useNavigate } from 'react-router-dom'

const Profil = () => {

    const { user } = useContext(mainContext)

    const navigate = useNavigate()

    return (
        <>
            <div>Profil</div>
            <h2>
                Welcome back {user.userName}
                Email: {user.email}
            </h2>
            {/* <Link to="/">Sign Out</Link> */}
            <button onClick={() => navigate(-1)}>Sign out</button>
        </>
    )
}

export default Profil