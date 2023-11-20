//nav-bar

import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/BckgndStyles.css";

function Nav()
{
    return(
      <div>
        <nav class="navbar px-4 fixed-top">
            <a class="navbar-brand" href="/" to="/"><img src={logo} alt="logo of hospital" width="70" height="64" class="d-inline-block align-text-top"></img></a>
            <div class="nav me-auto">
                <Link class="nav-link text-dark fw-bold" to="/">Home</Link>
                <Link class="nav-link text-dark fw-bold" to="/Services">Services</Link>
                <Link class="nav-link text-dark fw-bold" to="/About">About Us</Link>
                <Link class="nav-link text-dark fw-bold" to="/Doctor">Our Doctor</Link>
                <Link class="nav-link text-dark fw-bold" to="/Contact">Contact</Link>    
            </div>
            
            <Link className="nav-link " to="/login">
            <button to="Login" className="btn btn-primary rounded-pill me-3">Login</button>
          </Link>
          <Link className="nav-link " to="/signup">
            <button className="btn btn-primary rounded-pill">Signup</button>
          </Link>
        </nav>
        </div>
    )
}

export default Nav;