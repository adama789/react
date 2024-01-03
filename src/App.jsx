import React from 'react';
import 'animate.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Project01 from './pages/ProjectsPage/Projects/Project01';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
            <Route path="" element={<div>
            <HeaderPage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </div>} />

            <Route path="project/01" element={<Project01/>} />
        
        </Routes>
      </>
    </Router>
  );
};

export default App;
