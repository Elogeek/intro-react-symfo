import './Header.css';
import logo from '../../../assets/images/logo.png';
import {Link} from "react-router-dom";

export const Header = function () {

    const altText = "Shop logo";

    return (
        <div className="Header">
            <img src={logo} alt={altText}/>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/user-account">User Account</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/promotions?color=purple">Promotions</Link>
            </nav>
        </div>
    );
};