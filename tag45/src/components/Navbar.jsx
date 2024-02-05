import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <section>
                    <h2>My Life</h2>
                </section>
                <section>
                    <Link to="/"><button className="text-[#ffa200] underline underline-offset-4 m-2">Home</button></Link>
                    <Link to="/blog"><button className="text-[#ffa200] underline underline-offset-4 m-2">Blog</button></Link>
                </section>
            </nav>
        </>
    )
}

export default Navbar