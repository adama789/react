import React from "react";
import knowledgeJson from "../../../../content/knowledge.json";
import "./KnowledgePanel.css";

const KnowledgePanel = () => {
    function openTab(event, tabName) {
        const tabLinks = document.getElementsByClassName("tab-links");
        const tabContents = document.getElementsByClassName("tab-contents");
        for (const tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
        }
        for (const tabContent of tabContents) {
            tabContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
    }

    return <>
        <div className="tab-titles">
            <p className="tab-links active-link" onClick={(event) => openTab(event, 'Technologies')}>Technologies</p>
            <p className="tab-links" onClick={(event) => openTab(event, 'Certifications')}>Certifications</p>
            <p className="tab-links" onClick={(event) => openTab(event, 'Languages')}>Languages</p>
        </div>
        <div className="tab-contents active-tab" id="Technologies">
            <ul>
                {knowledgeJson.technologies.map((lang) => <li key={lang}><span>{lang}</span></li>)}
            </ul>
        </div>
        <div className="tab-contents" id="Certifications">
            <ul>
                {knowledgeJson.certifications.map((tech) => <li key={tech}><span>{tech}</span></li>)}
            </ul>
        </div>
        <div className="tab-contents" id="Languages">
            <ul>
                {knowledgeJson.languages.map((app) => <li key={app}><span>{app}</span></li>)}

            </ul>
        </div>
    </>;
}

export default KnowledgePanel;
