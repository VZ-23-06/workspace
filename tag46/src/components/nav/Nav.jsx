import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div>Nav</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/kontaktlist">Kontakte</Link>
            </nav>
        </>
    )
}

export default Nav