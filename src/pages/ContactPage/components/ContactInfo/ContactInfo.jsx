import React from "react";
import Title from "../../../../components/Title/Title";
import SocialIcon from "../../../../components/SocialIcon/SocialIcon";
import socialJson from "../../../../content/socials.json";
import "./ContactInfo.css";

const ContactInfo = () => {
    const socialIcons = socialJson.socials;
    return <>
        <Title>Contact <span>Me</span></Title>
        <p className="contact-info"><i className="fa-solid fa-paper-plane"></i> cedroadam@tlen.pl</p>
        <p className="contact-info"><i className="fa-solid fa-phone"></i> +48 *** *** ***</p>
        <div className="social-icons">
            {socialIcons.map((social) => <SocialIcon key={social.href} href={social.href} icon={social.icon}/>)}
        </div>
    </>;
}

export default ContactInfo;
