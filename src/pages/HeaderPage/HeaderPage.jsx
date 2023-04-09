import React from 'react'
import './HeaderPage.css'
import Title from "../../components/Title/Title";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import socialJson from "../../content/socials.json";
import NavBar from "../../components/NavBar/NavBar";

const HeaderPage = () => {
    const socialIcons = socialJson.socials;

    return (
        <div id="header">
            <div className="container">
            <NavBar/>
                <div className="header-text">
                    <p>Software Developer</p>
                    <Title>Hi, I'm <span>Adam Cedro</span></Title>
                    <div className="social-icons">
                        {socialIcons.map((socialIcon) => <SocialIcon href={socialIcon.href} icon={socialIcon.icon}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage
