import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div>Nav</div>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/kontaktlist"><button>Kontakte</button></Link>
                <Link to="/addkontakt"><button>Add Kontakt</button></Link>
            </nav>
        </>
    )
}

export default Nav