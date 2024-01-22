import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
    return (
        // Das machen wir nicht mehr so =>
        // <nav>
        //     <a href="#home">Home</a>
        //     <a href="#about">About</a>
        //     <a href="#contact">Contact</a>
        // </nav>
        <>
            <nav>
                {/* Hier werden die Straßenschilder festgestellt */}
                <Link to="/"><button>Home</button>  </Link>
                <Link to="/about"><button>About</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
                <Link to="/userlist"><button>User List</button></Link>
            </nav>
        </>
    );
}

export default Nav;