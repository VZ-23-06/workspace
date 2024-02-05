
import { Link } from "react-router-dom"

const Button = (props) => {

    return (
        <Link key={props.id} to={`/blog/${props.id}`}><button className="text-[#ffa200] hover:text-white border-2 border-[#ffcc00] bg-white hover:bg-[#ffcc00] rounded-[10px] w-[120px] h-[35px] font-extrabold text-lg leading-[19px] transition-colors duration-300">Read more</button></Link>
    )
}

export default Button