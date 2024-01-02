import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { name, description, href, icon } = props;
  return (
    <div>
      <i className={icon}></i>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={href}>Learn more</Link>
    </div>
  );
};

export default ProjectCard;
