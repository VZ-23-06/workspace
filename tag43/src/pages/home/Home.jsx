import React from 'react'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'

// ! rfce ist das neue Emmet

function Home() {
    return (
        <>
            <Nav />
            <div>Home</div>
            <Link to="/productlist"><button>Go to our Shop</button></Link>
        </>
    )
}

export default Home