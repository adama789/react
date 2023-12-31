import React from "react";
import "./NavBar.css";
import LOGO from "../../assets/logo.png";
import CV from "../../assets/CV_Adam_Cedro.pdf";

const NavBar = () => {
    const downloadCV = () => {
        window.open(CV, "_blank");
    };

    return <nav>
        <img src={LOGO} alt="logo" className="logo"/>
        <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href={downloadCV}>CV</a></li>
        </ul>
    </nav>;
}

export default NavBar;
