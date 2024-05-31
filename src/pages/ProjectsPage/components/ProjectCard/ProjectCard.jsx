import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { name, description, href, icon } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <i className={icon}></i>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={href}>Learn more</Link>
    </div>
  );
};

export default ProjectCard;