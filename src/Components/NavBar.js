import { Link } from "react-router-dom";
import '../index.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1 className="navBarH1">Welcome to ReactRouter</h1>
            <div className="navBarLinks">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default NavBar;