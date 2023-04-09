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
            <p className="tab-links active-link" onClick={(event) => openTab(event, 'Languages')}>Languages</p>
            <p className="tab-links" onClick={(event) => openTab(event, 'Technologies')}>Technologies</p>
            <p className="tab-links" onClick={(event) => openTab(event, 'Aplications')}>Applications</p>
        </div>
        <div className="tab-contents active-tab" id="Languages">
            <ul>
                {knowledgeJson.languages.map((lang) => <li key={lang}><span>{lang}</span></li>)}
            </ul>
        </div>
        <div className="tab-contents" id="Technologies">
            <ul>
                {knowledgeJson.technologies.map((tech) => <li key={tech}><span>{tech}</span></li>)}
            </ul>
        </div>
        <div className="tab-contents" id="Aplications">
            <ul>
                {knowledgeJson.applications.map((app) => <li key={app}><span>{app}</span></li>)}

            </ul>
        </div>
    </>;
}

export default KnowledgePanel;
