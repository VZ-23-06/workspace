
import { Link } from "react-router-dom"

const Button =(props)=> {

    return(
        <Link key={props.id} to={`/blog/${props.id}`}><button>Read more</button></Link>
    )
}

export default Button