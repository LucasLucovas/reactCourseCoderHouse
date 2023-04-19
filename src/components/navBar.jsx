import { Link } from "react-router-dom"
import "../css/navBar.css"

function Navbar(){

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Ecommerce</Link>
            <ul>
                <Link to="./products.jsx">Products</Link>
                <Link to="./login.jsx">Log In</Link>
                <Link to="./about.jsx">About</Link>
            </ul>
        </nav>
    )
}



export default Navbar;