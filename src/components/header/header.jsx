import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'

const header = () => {
  return (
    <div id="header">
    <div class="container">   
        <nav>
            <img src={LOGO} alt="logo" class="logo"/>
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="images/Adam_Cedro_CV.pdf" download >CV</a></li>
            </ul>
        </nav>
        <div class="header-text">
            <p>Software Developer</p>
            <h1>Hi, I'm <span>Adam Cedro</span></h1>
            <div class="social-icons">
                <a href="https://github.com/adama789" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/adam-cedro-53427025b/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:cedrq@tlen.pl"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://www.facebook.com/adam.cedro.39/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
    </div>
</div>
  )
}

export default header