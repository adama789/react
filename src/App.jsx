import React from 'react'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HeaderPage from './pages/header/HeaderPage'
import ProjectsPage from './pages/projects/ProjectsPage'


const App = () => {
    return (
        <>
            <HeaderPage/>
            <AboutPage/>
            <ProjectsPage/>
            <ContactPage/>
        </>
    )
}

export default App
