import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar =()=>{
    return(
        <>
            <nav className="navBar">
                <section>
                    <h2>My Life</h2>
                </section>
                <section>
                    <Link to="/"> Home</Link>
                    <Link to="/blog"> Blog</Link>
                </section>
            </nav>
        </>
    )
}

export default Navbar