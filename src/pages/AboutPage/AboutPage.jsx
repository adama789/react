import React from 'react';
import './AboutPage.css';
import ME from '../../assets/aboutme.png';
import KnowledgePanel from "./components/KnowledgePanel/KnowledgePanel";
import AboutContent from "./components/AboutContent/AboutContent";

const AboutPage = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={ME} alt="logo"/>
                    </div>
                    <div className="about-col-2">
                        <span><AboutContent/></span>
                        <KnowledgePanel/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
