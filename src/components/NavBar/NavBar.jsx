import React from "react";
import "./NavBar.css";
import LOGO from "../../assets/logo.png";

const NavBar = () => {
    return <nav>
        <img src={LOGO} alt="logo" className="logo"/>
        <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="images/Adam_Cedro_CV.pdf" download>CV</a></li>
        </ul>
    </nav>;
}
