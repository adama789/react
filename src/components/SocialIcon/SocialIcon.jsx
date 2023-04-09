import React from "react";
import "./SocialIcon.css";

const SocialIcon = (props) => {
    const {icon, href} = props;
    return <a className="social-icon" href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
    </a>
}

export default SocialIcon;
