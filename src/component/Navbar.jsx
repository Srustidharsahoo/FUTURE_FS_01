import { Link } from "react-router-dom"; // Correct import
import image from '../assets/logo.JPG';
import '../css/Navbar.css'
import { useState } from "react";

export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav-section">

            <div className="nav-logo">
                <img src={image} alt="Logo" style={{ width: "100%", borderRadius: "50%"}} /> {/* Always add a meaningful `alt` text */}
            </div>

            <div className={`nav-items ${menuOpen ? "show" : ""}`}>
                <Link to="/">Home</Link> {/* Add `to` prop */}
                <Link to="/about">About</Link>
                <Link to="/skill">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>

            

            <div  className={`nav-btn ${menuOpen ? "show" : ""}`}>
                <button>Hire Me</button>
            </div>

            <div class="hamburger" onClick={toggleMenu}>
                ☰
            </div>

        </div>
    );
};