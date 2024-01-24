import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/productlist"><button>Product List</button></Link>
        </nav>
    )
}

export default Nav