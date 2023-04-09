import React from 'react'
import './ProjectsPage.css'
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Title from "../../components/Title/Title";
import projectsJson from "../../content/projects.json";

const ProjectsPage = () => {
    const projects = projectsJson.projects;
    return <div id="projects">
        <div className="container">
            <Title>My <span>Projects</span></Title>
            <div className="services-list">
                {projects.map((project) => <ProjectCard key={project.name} name={project.name}
                                                        description={project.description}
                                                        href={project.href} icon={project.icon}/>)}
            </div>
        </div>
    </div>
}

export default ProjectsPage
