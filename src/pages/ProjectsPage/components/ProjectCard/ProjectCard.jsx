import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
    const {name, description, href, icon} = props;
    return <div>
        <i className={icon}></i>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={href}>Learn more</a>
    </div>
}

export default ProjectCard;
