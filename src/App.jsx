import React from 'react'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import HeaderPage from './pages/HeaderPage/HeaderPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'


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
