import React from 'react'
import './projects.css'

const projects = () => {
  return (
    <div id="projects">
    <div className="container">
        <h1 className="sub-title">My <span>Projects</span></h1>
        <div className="services-list">
            <div>
                <i className="fa-brands fa-python"></i>
                <h2>Projekt 1</h2>
                <p>W tym projekcie zrobilem bardzo dobre rzeczy</p>
                <a href={"#header"}>Learn more</a>
            </div>
            <div>
                <i className="fa-solid fa-pepper-hot"></i>
                <h2>Projekt 2</h2>
                <p>W tym projekcie zrobilem bardzo dobre rzeczy</p>
                <a href={"#header"}>Learn more</a>
            </div>
            <div>
                <i className="fa-brands fa-html5"></i>
                <h2>Projekt 3</h2>
                <p>W tym projekcie zrobilem bardzo dobre rzeczy</p>
                <a href={"#header"}>Learn more</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default projects
