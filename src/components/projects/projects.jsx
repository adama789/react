import React from 'react'
import './projects.css'

const projects = () => {
  return (
    <div id="projects">
    <div class="container">
        <h1 class="sub-title">My <span>Projects</span></h1>
        <div class="services-list">
            <div>
                <i class="fa-brands fa-python"></i>
                <h2>Projekt 1</h2>
                <p>W tym projekcie zrobilem bardzo dobre rzeczy</p>
                <a href={"#header"}>Learn more</a>
            </div>
            <div>
                <i class="fa-solid fa-pepper-hot"></i>
                <h2>Projekt 2</h2>
                <p>W tym projekcie zrobilem bardzo dobre rzeczy</p>
                <a href={"#header"}>Learn more</a>
            </div>
            <div>
                <i class="fa-brands fa-html5"></i>
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